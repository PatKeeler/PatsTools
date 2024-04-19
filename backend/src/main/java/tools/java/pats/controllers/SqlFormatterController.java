package tools.java.pats.controllers;

import tools.java.pats.classparams.SqlParms;
import tools.java.pats.models.SqlFormatter;
import tools.java.pats.utils.AddQuotesForJavaString;
import tools.java.pats.utils.RemoveQuotesFromJavaString;

import java.io.Serializable;
import java.util.Collections;
import java.util.Map;


public class SqlFormatterController implements Serializable {

    private static final long serialVersionUID = 1951L;

    public Map<String, String> getSql(SqlParms sqlParms) {

        System.out.println("In SqlFormatterController");

        //Initial indent value for recursion of SqlFormatter.
        String tab = "";
        String results = "";

        //Indent value requested by user.
        String userIndentAmount = sqlParms.getIndentAmount();
        if (userIndentAmount == null) {
            userIndentAmount = "0";
        }

        //Get Input Sql.
        String inputSQL = sqlParms.getInputSQL();

        //If inputSql is blank return error message.
        if (null == inputSQL ||
                inputSQL.isEmpty()) {
            results = "Input Sql string is blank! ";
        } else {
            //Get the selected style, block or expanded
            String selectedStyle = sqlParms.getSelectedStyle();

            //See if "Reformat and Quotes" request?
            String addQuotesAndReformat = sqlParms.getAddQuotesAndReformat();

            //See if "Quotes Only" request?
            String addQuotesOnly = sqlParms.getAddQuotesOnly();

            //See if "remove quotes and reformat"
            String removeQuotesAndReformat = sqlParms.getRemoveQuotesAndReformat();

            //See if "remove quotes only"
            String removeQuotesOnly = sqlParms.getRemoveQuotesOnly();

            SqlFormatter formatter = new SqlFormatter();

            //if add quotes only.
            if (null != addQuotesOnly && addQuotesOnly.equals("true")) {
                try {
                    AddQuotesForJavaString getQuotes = new AddQuotesForJavaString();
                    results = getQuotes.addQuotes(inputSQL);
                }
                catch (Exception e) {
                    results = "Exception during Add Quotes Only processing: " +
                            e.getLocalizedMessage();
                    e.printStackTrace();
                }
            }
            //if remove quotes only.
            else if (null != removeQuotesOnly && removeQuotesOnly.equals("true")) {
                try {
                    RemoveQuotesFromJavaString removeQuotes = new RemoveQuotesFromJavaString();
                    results = removeQuotes.removeQuotes(inputSQL);
                }
                catch (Exception e) {
                    results = "Exception during Remove Quotes Only processing: " +
                            e.getLocalizedMessage();
                    e.printStackTrace();
                }
            }
            //if remove quotes and format.
            else if (null != removeQuotesAndReformat && removeQuotesAndReformat.equals("true")) {
                try {
                    RemoveQuotesFromJavaString removeQuotes = new RemoveQuotesFromJavaString();
                    results = removeQuotes.removeQuotes(inputSQL);
                    results = formatter.formatSql(results, tab, userIndentAmount, selectedStyle);
                }
                catch (Exception e) {
                    results = "Exception during Remove Quotes And Format processing: " +
                            e.getLocalizedMessage();
                    e.printStackTrace();
                }
            } else {
                try {
                    //Format the input.
                    results = formatter.formatSql(inputSQL, tab, userIndentAmount, selectedStyle);

                    //Add quotes to formatted results if requested.
                    if (null != addQuotesAndReformat && addQuotesAndReformat.equals("true")) {

                        AddQuotesForJavaString getQuotes = new AddQuotesForJavaString();
                        results = getQuotes.addQuotes(results);
                    }
                }
                catch (Exception e) {
                    results = "Exception during format processing: " +
                            e.getLocalizedMessage();
                    e.printStackTrace();
                }
            }
        }

        return Collections.singletonMap("result", results);
    }
}
