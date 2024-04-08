package tools.java.pats.controllers;

import java.io.Serializable;
import tools.java.pats.classparams.ICMParms;



/*
This controller calls the ICMCalculator to determine payouts
for poker tournaments based on prize amounts and chip counts.
 */
public class ICMController implements Serializable {

    private static final long serialVersionUID = 1951L;
    String[] icmParms;


    public String[] getICMParms(ICMParms icmParms) {
        this.icmParms = icmParms.getICMParms();
        return this.icmParms;
    }

}
