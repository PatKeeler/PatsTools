package tools.java.pats.formatters;

import net.jcip.annotations.ThreadSafe;

import java.io.Serializable;

import static java.lang.String.format;

/**
 *
 * Created by IntelliJ IDEA.
 * User: Pat Keeler
 * Date: 8/26/11
 * Time: 7:35 PM
 * To change this template use File | Settings | File Templates.
 */
@ThreadSafe
public class CaseLinesFormatter implements Serializable {

    private static final long serialVersionUID = 1951L;

    /** Maximum length of WHEN line before splitting to multiple lines */
    private static final int WHEN_LENGTH = 20;


    /**
     * Method to format and return CASE node.
     */
    public String formatNode(String line, String indent, String userIndent) {

        StringBuffer newList = new StringBuffer();

        int index;      //work index
        int wtLength = 4;  //when or then length

        if (line.toUpperCase().trim().startsWith("CASE") ||
            line.toUpperCase().trim().startsWith("MAX(CASE") ||
            line.toUpperCase().trim().startsWith("SUM(CASE")) {

            //Get index of WHEN
            index = line.toUpperCase().indexOf(" WHEN");
            if (index > -1) {
                //Append the statement up to WHEN.
                newList.append(format("\n%s%s%s", indent, userIndent, line.substring(0,
                        index).trim()));
                //Bump line up to WHEN
                line = line.substring(index);
            }

            //We are pointing at first WHEN statement - loop for multiples
            while ((index = line.indexOf(" WHEN", wtLength)) > -1) {
                newList.append(formatWT(index, line, indent, userIndent));
                line = line.substring(index);
            }

            //Process rest of CASE statement
            index = line.indexOf(" ELSE", wtLength);


            if (index  > -1) {
                newList.append(formatWT(index, line, indent, userIndent));
                line = line.substring(index);

                index = line.indexOf(" END", wtLength);
                {
                    // Last ELSE statement.
                    newList.append(format("\n%s%s%s%s", indent, userIndent, userIndent, line.substring(1,
                            index).trim()));
                    // End statement
                    line = format("\n%s%s%s", indent, userIndent, line.substring(index + 1).trim());
                }
            }
            else {

                index = line.indexOf(" END", wtLength);
                {
                    // Last WHEN/THEN statement.
                    newList.append(formatWT(index, line, indent, userIndent));
                    line = line.substring(index);

                    //Format End statement
                    line = format("\n%s%s%s", indent, userIndent, line.trim());
                }
            }
        }

        //Append END statement.
        newList.append(format("%s%s,", indent, line));

        return newList.toString();
    }

    /**
     * Format the When and Then statements.
     *
     * @param index      - pointing at WHEN or ELSE
     * @param line       - to be formatted
     * @param indent     - recursion indent
     * @param userIndent - user supplied indent
     * @return formatted When/Then sql string
     */
    private String formatWT(int index, String line, String indent, String userIndent) {

        StringBuffer newList = new StringBuffer();
        int wtIndex;    //WHEN or THEN index
        int andIndex;   //Pointer to " AND "
        int multiIndex; //Pointer to subsequent " AND " elements

        // Format WHEN and THEN statement(s).
        wtIndex = line.indexOf("THEN");

        //Separate statements longer than WHEN_LENGTH for readability.
        if (wtIndex > WHEN_LENGTH ) {
            //Format for AND if present.
            if ((andIndex = line.indexOf(" AND ")) > -1) {
                //Print WHEN element up to AND
                newList.append(format("\n%s%s%s%s", indent, userIndent, userIndent, line.substring(1,
                        andIndex).trim()));
                //Contine with multiple ANDs if present.
                while ((multiIndex = line.indexOf(" AND ", andIndex + 4)) > -1) {
                    newList.append(format("\n%s%s%s %s", indent, userIndent, userIndent, line.substring(
                            andIndex, multiIndex).trim()));
                    andIndex = multiIndex;
                }
                newList.append(format("\n%s%s%s %s", indent, userIndent, userIndent, line.substring(
                        andIndex, wtIndex).trim()));
            }
            //Append the WHEN statement
            else {
                newList.append(format("\n%s%s%s%s", indent, userIndent, userIndent, line.substring(1,
                        wtIndex).trim()));
            }
            //THEN
            newList.append(format("\n%s%s%s%s%s", indent, userIndent, userIndent, userIndent,
                    line.substring(wtIndex, index).trim()));
        } else {
            //BOTH
            newList.append(format("\n%s%s%s%s", indent, userIndent, userIndent, line.substring(1,
                    index).trim()));
        }

        return newList.toString();
    }
}
