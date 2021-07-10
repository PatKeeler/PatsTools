package tools.java.pats.nodes;

import net.jcip.annotations.ThreadSafe;

import java.io.Serializable;
import java.security.InvalidParameterException;

import static java.lang.String.format;

/**
 *
 * Created by IntelliJ IDEA.
 * User: Pat Keeler
 * Date: 11/2/11
 * Time: 7:40 PM
 * To change this template use File | Settings | File Templates.
 */
@ThreadSafe
public class Alter extends Node implements Query, Serializable {

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
    public Alter(final String cmd,
                  final String data,
                  final String recursionTab,
                  final String userIndentAmount,
                  final String selectedStyle) {

        super(recursionTab, userIndentAmount, selectedStyle);

        this.cmd = cmd;
        this.data = data;

        if (cmd.isEmpty()) {
            throw new InvalidParameterException(INVALID_ALTER_CMD);
        }

        if (data.isEmpty()) {
            throw new InvalidParameterException(INVALID_ALTER_DATA);
        }
    }


    /**
     * This class will have the table name as the data resulting in
     * a one line statement.
     *
     * @return - formatted sql string
     */
    public String processLine(Query node) {

        printCmdData(this.tab, this.cmd, this.data);

        StringBuffer sb = new StringBuffer();
        sb.append(format("\n%s%s\n%s%s%s", tab, cmd.trim(), 
                tab, userIndentTab, data.trim()));

        return sb.toString();
    }

}

