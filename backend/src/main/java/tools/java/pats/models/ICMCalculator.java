package tools.java.pats.models;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import static java.lang.String.format;

/*
This class takes in chip counts and tournament chop amounts
and determines payouts based on chip count.
 */
public class ICMCalculator implements Serializable {

    private static final long serialVersionUID = 1951L;

    private static final Logger logger = LoggerFactory.getLogger("ICMCalculator");


    /**
     * Default constructor
     */
    public ICMCalculator() {

        super();
    }

    private static int N;
    private static int xcnt;
    private static List<Integer> chips = new ArrayList<>();
    private static List<Integer> prizes = new ArrayList<>();
    private static int[] instanceOrder;
    private static double[] instanceChips;
    private static double[] instanceAccumChips;
    private static double[] instanceOdds1;
    private static double[] instanceOdds2;
    private static double[][] finalResults;


    public String[] getICMChops(String[] args) {

        String[] playerResults = new String[5];
        
        // Argument parsing (simplified)
        for (int i = 0; i < args.length; i++) {
            if (args[i].equals("--chips")) {
                i++;
                while (i < args.length && !args[i].startsWith("--")) {
                    chips.add(Integer.parseInt(args[i]));
                    i++;
                }
                i--; // adjust for loop increment
            } else if (args[i].equals("--prizes")) {
                i++;
                while (i < args.length && !args[i].startsWith("--")) {
                    prizes.add(Integer.parseInt(args[i]));
                    i++;
                }
                i--; // adjust for loop increment
            }
        }

        N = chips.size();
        xcnt = N - 1;
        instanceOrder = new int[N];
        instanceChips = new double[N];
        instanceAccumChips = new double[N];
        instanceOdds1 = new double[N];
        instanceOdds2 = new double[N];
        finalResults = new double[N][N];

        List<Integer> players = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            players.add(i);
        }

        xyz(players);

        double[] finalPrizes = new double[N];
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                finalPrizes[i] += finalResults[i][j] * prizes.get(j);
            }
        }

        //String[] needed for testing
        for (int i = 0; i < N; i++) {
//            System.out.printf("Player %2d: %3d chips ---> %6.2f%n", i + 1, chips.get(i), finalPrizes[i]);
            playerResults[i] = format("Player %2d: %3d chips ---> %6.2f%n",
                    i + 1, chips.get(i), finalPrizes[i]);
        }

//        logger.info("ICM Player results:");
//        for (String s: playerResults) {
//            logger.info(format("  %s", s.substring(0, s.length() -2)));
//        }

        //Return required for testing
        return playerResults;
    }

    private static void xyz(List<Integer> players) {
        int index = players.size() - 1;
        List<Integer> playersSubset;

        for (int j = 0; j < players.size(); j++) {
            playersSubset = new ArrayList<>(players);
            instanceOrder[index] = playersSubset.remove(j);

            if (index == 0) {
                // Reverse the order
                int[] instanceOrderReversed = new int[N];
                for (int i = 0; i < N; i++) {
                    instanceOrderReversed[i] = instanceOrder[N - 1 - i];
                }

                for (int i = 0; i < N; i++) {
                    if (i >= xcnt) {
                        instanceChips[i] = chips.get(instanceOrderReversed[i]);
                    }
                }

                for (int i = 0; i < N; i++) {
                    if (i >= xcnt) {
                        double sum = 0;
                        for (int k = i; k < N; k++) {
                            sum += instanceChips[k];
                        }
                        instanceAccumChips[i] = sum;
                        instanceOdds1[i] = instanceChips[i] / instanceAccumChips[i];
                        instanceOdds2[i] = 1;
                        for (int k = 0; k <= i; k++) {
                            instanceOdds2[i] *= instanceOdds1[k];
                        }
                    }
                }

                for (int i = 0; i < N; i++) {
                    if (i >= xcnt) {
                        finalResults[instanceOrderReversed[i]][i] += instanceOdds2[i];
                    }
                }
                xcnt = N - 1;
            } else {
                xcnt -= 1;
                xyz(playersSubset);
            }
        }
    }
}
