package tools.java.pats.constants;

import java.util.regex.Pattern;

/**
 * Created with IntelliJ IDEA.
 * User: Pat
 * Date: 3/23/13
 * Time: 7:27 PM
 * To change this template use File | Settings | File Templates.
 */
public interface ProjectStaticConstants {

    /* Byte variables */
   byte CLOSING_PAREN_BYTE = ')';
   byte OPEN_PAREN_BYTE = '(';

    /* String variables */
    String CLOSING_PAREN_STRING = ")";
    String OPEN_PAREN_STRING = "(";
    String SEMI_COLON = ";";

    /* User integer indents */
    int ZERO_INDENTS  = 0;
    int TWO_INDENTS   = 2;
    int THREE_INDENTS = 3;
    int FOUR_INDENTS  = 4;
    int NINE_INDENTS  = 9;

    /* Space string, 160 spaces */
    String SPACES =
            "                                                                                 " +
            "                                                                                 ";


    /* Invalid indent parameter message */
    public static String INVALID_INDENT = "Indent amount must be a value between 0 and 9";

    /* Patterns to identify all line terminators.
    *  \n - unix,
    *  \r\n or \n - windows (\n works most of the time, except for notepad).
    *  \r - apple, recently they are moving to \n.
    */
    Pattern p1 = Pattern.compile(System.getProperty("line.separator"));
   	Pattern p2 = Pattern.compile("\n");

    /* Error messages */
    String INVALID_ADD_CMD = "Add cmd can not be an empty value";
    String INVALID_ADD_DATA = "Add data can not be an empty value";

    String INVALID_ALTER_CMD = "Alter cmd can not be an empty value";
    String INVALID_ALTER_DATA = "Alter data can not be an empty value";

    String INVALID_BETWEEN_CMD = "Between cmd can not be an empty value";
    String INVALID_BETWEEN_DATA = "Between data can not be an empty value";

    String INVALID_COMMA_CMD = "Comment cmd can not be an empty value";
    String INVALID_COMMA_DATA = "Comment data can not be an empty value";

    String INVALID_CREATEDATABASE_CMD = "CreateDatabase cmd can not be an empty value";
    String INVALID_CREATEDATABASE_DATA = "CreateDatabase data can not be an empty value";

    String INVALID_CREATEINDEX_CMD = "CreateIndex cmd can not be an empty value";
    String INVALID_CREATEINDEX_DATA = "CreateIndex data can not be an empty value";

    String INVALID_CREATETABLE_CMD = "CreateTable cmd can not be an empty value";
    String INVALID_CREATETABLE_DATA = "CreateTable data can not be an empty value";

    String INVALID_CREATEVIEW_CMD = "CreateView cmd can not be an empty value";
    String INVALID_CREATEVIEW_DATA = "CreateView data can not be an empty value";

    String INVALID_DECLARE_CMD = "Declare cmd can not be an empty value";
    String INVALID_DECLARE_DATA = "Declare data can not be an empty value";

    String INVALID_DELETE_CMD = "Delete cmd can not be an empty value";
    String INVALID_DELETE_DATA = "Delete data can not be an empty value";

    String INVALID_DROP_CMD = "Drop cmd can not be an empty value";
    String INVALID_DROP_DATA = "Drop data can not be an empty value";

    String INVALID_FROM_CMD = "From cmd can not be an empty value";
    String INVALID_FROM_DATA = "From data can not be an empty value";

    String INVALID_GROUPBY_CMD = "GroupBy cmd can not be an empty value";
    String INVALID_GROUPBY_DATA = "GroupBy data can not be an empty value";

    String INVALID_HAVING_CMD = "Having cmd can not be an empty value";
    String INVALID_HAVING_DATA = "Having data can not be an empty value";

    String INVALID_INSERT_CMD = "Insert cmd can not be an empty value";
    String INVALID_INSERT_DATA = "Insert data can not be an empty value";

    String INVALID_INTO_CMD = "Into cmd can not be an empty value";
    String INVALID_INTO_DATA = "Into data can not be an empty value";

    String INVALID_JOIN_CMD = "Join cmd can not be an empty value";
    String INVALID_JOIN_DATA = "Join data can not be an empty value";

    String INVALID_MODIFY_CMD = "Modify cmd can not be an empty value";
    String INVALID_MODIFY_DATA = "Modify data can not be an empty value";

    String INVALID_ORDERBY_CMD = "OrderBy cmd can not be an empty value";
    String INVALID_ORDERBY_DATA = "OrderBy data can not be an empty value";

    String INVALID_RENAME_CMD = "Rename cmd can not be an empty value";
    String INVALID_RENAME_DATA = "Rename data can not be an empty value";

    String INVALID_SELECT_CMD = "Select cmd can not be an empty value";
    String INVALID_SELECT_DATA = "Select data can not be an empty value";

    String INVALID_SET_CMD = "Set cmd can not be an empty value";
    String INVALID_SET_DATA = "Set data can not be an empty value";

    String INVALID_TRUNCATE_CMD = "Truncate cmd can not be an empty value";
    String INVALID_TRUNCATE_DATA = "Truncate data can not be an empty value";

    String INVALID_UNION_CMD = "Union cmd can not be an empty value";

    String INVALID_UPDATE_CMD = "Update cmd can not be an empty value";
    String INVALID_UPDATE_DATA = "Update data can not be an empty value";

    String INVALID_VALUES_CMD = "Values cmd can not be an empty value";
    String INVALID_VALUES_DATA = "Values data can not be an empty value";

    String INVALID_WITH_CMD = "With cmd can not be an empty value";
    String INVALID_WITH_DATA = "With data can not be an empty value";

}
