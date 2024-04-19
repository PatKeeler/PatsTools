package tools.java.pats.controllers;

import java.io.Serializable;
import tools.java.pats.models.ICMCalculator;


/*
This controller calls the ICMCalculator to determine payouts
for poker tournaments based on prize amounts and chip counts.
 */
public class ICMController implements Serializable {

    private static final long serialVersionUID = 1951L;
    
    private ICMCalculator icmCalculator = new ICMCalculator();
    private String[] results;

    
    public String[] getICMPayouts(String[] inputParms) {

        System.out.println("In ICMController");

        try {
            this.results = icmCalculator.getICMChops(inputParms);
        }
        catch (Exception e) {
            this.results[0] = "Exception in ICMController: " +
                    e.getLocalizedMessage();
            e.printStackTrace();
        }


        //for testing
        for (String s : this.results)
            System.out.println(s);
        
        return this.results;
    }

}
