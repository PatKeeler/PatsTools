package tools.java.pats.models;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.Test;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import static java.lang.String.format;
import static org.testng.Assert.assertEquals;

public class ICMCalculatorTest {


    private static final Logger logger = LoggerFactory.getLogger("ICMCalculator");

    String[] results = new String[20];

    @Test
    public String[] testICMCalculator() throws IOException {

        String[] testData = new String[]{
                "--chips",
                "220",
                "160",
                "70",
                "30",
                "10",
                "--prizes",
                "181",
                "122",
                "73",
                "58",
                "53"};

        String[] myList = new String[5];
        myList[0] = "Player  1: 220 chips ---> 136.93\r\n";
        myList[1] = "Player  2: 160 chips ---> 123.92\r\n";
        myList[2] = "Player  3:  70 chips --->  93.26\r\n";
        myList[3] = "Player  4:  30 chips --->  72.97\r\n";
        myList[4] = "Player  5:  10 chips --->  59.92\r\n";

        ICMCalculator calculator = new ICMCalculator();
        results = calculator.main(testData);

        assertEquals(results, myList, "Error computing ICM Calculations!");

        System.out.println(("        ICM Calculator Test Results: "));
        for (String s : results) System.out.println((format("           %s", s)));
        System.out.println(" ");

        return results;

    }

}
