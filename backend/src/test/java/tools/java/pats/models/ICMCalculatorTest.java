package tools.java.pats.models;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.Test;
import tools.java.pats.classparams.IcmParms;

import java.io.Console;
import java.io.IOException;

import static java.lang.String.format;
import static org.testng.Assert.assertEquals;


public class ICMCalculatorTest {

    private static final Logger logger = LoggerFactory.getLogger("ICMCalculator");

    @Test
    public void testICMCalculator() throws IOException {

        IcmParms icmParms = new IcmParms();
        String[] results = new String[20];

        icmParms.setInputParms(new String[]{
                "--chips",
                "66",
                "55",
                "44",
                "33",
                "22",
                "11",
                "--prizes",
                "420",
                "264",
                "180",
                "132",
                "108",
                "96"});

        String[] myList = new String[6];
        myList[0] = "Player  1:  66 chips ---> 253.86\r\n";
        myList[1] = "Player  2:  55 chips ---> 236.43\r\n";
        myList[2] = "Player  3:  44 chips ---> 216.50\r\n";
        myList[3] = "Player  4:  33 chips ---> 193.42\r\n";
        myList[4] = "Player  5:  22 chips ---> 166.25\r\n";
        myList[5] = "Player  6:  11 chips ---> 133.53\r\n";

        ICMCalculator calculator = new ICMCalculator();
        results = calculator.getICMChops(icmParms);

        assertEquals(results, myList, "Error computing ICM Calculations!");

        logger.info("Test Input: ");
        for (String s : icmParms.getInputParms())
            logger.info(format("  %s", s));
        logger.info(" ");

        logger.info("Test Results: ");
        for (String s : results)
            logger.info(format("  %s", s.substring(0, s.length() -2)));
//        logger.info(" ");

//        return results;

    }

}
