package tools.java.pats.nodes;

import net.jcip.annotations.ThreadSafe;

import java.io.Serializable;
import java.security.InvalidParameterException;

import static java.lang.String.format;

/**
 *
 * Created by IntelliJ IDEA.
 * User: Pat Keeler
 * Date: 10/24/11
 * Time: 7:37 PM
 * To change this template use File | Settings | File Templates.
 */
@ThreadSafe
public class Insert extends Node implements Query, Serializable {

    private static final long serialVersionUID = 1951L;

    private final String cmd;
    private final String data;


    /**
     * Final Argument Constructor.
     *
     * @param cmd - sql command name
     * @param data - sql arguments for command
     * @param recursionTab - number of user indents
     * @param userIndentAmount - length of user supplied indents
     * @param selectedStyle - block or expanded
     */
    public Insert(final String cmd,
                  final String data,
                  final String recursionTab,
                  final String userIndentAmount,
                  final String selectedStyle) {

        super(recursionTab, userIndentAmount, selectedStyle);

        this.cmd = cmd;
        this.data = data;

        if (cmd.isEmpty()) {
            throw new InvalidParameterException(INVALID_INSERT_CMD);
        }

        if (data.isEmpty()) {
            throw new InvalidParameterException(INVALID_INSERT_DATA);
        }
    }


    /**
     * This class must collect the table name from the data.
     *
     * There may or may not be multi columns in parens - process accordingly.
     *
     * @param node - Class type
     * @return formatted sql string
     */
    public String processLine(Query node) {

        printCmdData(this.tab, this.cmd, this.data);

        StringBuffer sb = new StringBuffer();

        //Look for open paren in data
        int index = data.indexOf(OPEN_PAREN_BYTE);
        if (index > -1) {
            //Yes multi columns, get the table name
            String table = data.substring(0, index).trim();
            sb.append(format("\n%s%s %s", tab, cmd.trim(), table));

            //And get the columns and format them.
            String columns = data.substring(index);
            sb.append(formatMultiColumnsWithinParens(columns));
        } else {
            sb.append(format("\n%s%s %s", tab, cmd.trim(), data.trim()));
        }

        return sb.toString();
    }

}
