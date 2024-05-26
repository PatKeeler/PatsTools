package tools.java.pats.controllers;

import java.io.Serializable;
import java.util.Collections;
import java.util.Map;

import tools.java.pats.classparams.IcmParms;
import tools.java.pats.models.ICMCalculator;


/*
This controller calls the ICMCalculator to determine payouts
for poker tournaments based on prize amounts and chip counts.
 */
public class ICMController implements Serializable {

    private static final long serialVersionUID = 1951L;
    private ICMCalculator icmCalculator = new ICMCalculator();


    public Map<String, String[]> getPayouts(IcmParms icmParms) {


        String[] results = new String[icmParms.getCount()];

        try {
            results = icmCalculator.getICMChops(icmParms);
        }
        catch (Exception e) {
            results[0] = e.getLocalizedMessage();
            e.printStackTrace();
        }

        //for testing
//        for (String s : results)
//            System.out.println("ICMController: " + s);
        
        return Collections.singletonMap("result", results);
    }

}
