package tools.java.pats.models;

import net.jcip.annotations.ThreadSafe;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import tools.java.pats.nodes.Node;
import tools.java.pats.nodes.Query;
import tools.java.pats.string.utils.StringCleaner;
import tools.java.pats.string.utils.sql.SqlKeywordsToUpperCase;
import tools.java.pats.string.utils.sql.SqlNodeParser;

import java.io.Serializable;
import java.security.InvalidParameterException;
import java.util.List;

import static java.lang.String.format;

/**
 * SQL statement formatter.
 * <p>
 * This class will format sql commands.
 * <p>
 * Feel free to contact me with comments, questions or suggestions for
 * improvements.
 * 
 * @author Pat Keeler - keelerpl@gmail.com
 */
@ThreadSafe
public class SqlFormatter implements Serializable {

    private static final long serialVersionUID = 1951L;

    private static final Logger logger = LoggerFactory.getLogger("SqlFormatter");



	/**
     * Default constructor
     */
	public SqlFormatter() {

		super();
	}

    /**
     * The main SqlFormatter driver.
     *
     * @param sql - un-formatted sql
     * @param tab - user indent amount
     * @param stringIndentAmount - string of tab length
     * @return formatted sql string
     */
	public String formatSql(String sql, String tab,
                            String stringIndentAmount, String selectedStyle) {

        if (sql.isEmpty()) {
            throw new InvalidParameterException(
                    "SQL string can not be blank: String = " + sql);
        }

        //Get leading comment buffer
        StringBuffer comments = new StringBuffer();

        //TODO move comment handler here.

		// StringCleaner.java - Cleans up
		//    form feeds,
		//    line breaks,
		//    excess spaces,
		//    and removes embedded comments.
		StringCleaner cleaner = new StringCleaner();
		sql = cleaner.cleanString(sql, comments);

        // Log the one line sql string.
		logger.info("");
        logger.info(tab + "Sql:");
        logger.info("  " + tab + sql);

        //Log each node - printed in each node
		logger.info(tab + "Nodes:");

		// Upper case all commands.
		SqlKeywordsToUpperCase upper = new SqlKeywordsToUpperCase();
		sql = upper.upperCaseKeywords(sql);

		/* Get List of Nodes in script. */
		SqlNodeParser nodeParser = new SqlNodeParser(sql, tab, stringIndentAmount, selectedStyle);
		List<Query> nodeList = nodeParser.parseSql();

		StringBuffer sb = new StringBuffer();
		
		// Remove last newline from comments.
		if (comments.length() > 0 && 
				comments.charAt(comments.length() - 1) == '\n') {
			comments.deleteCharAt(comments.length() - 1);
		}
		//Load leading comments (if any) to StringBuffer.
		sb.append(comments.toString());

		// Format each node.
        for (Query node : nodeList) {
            try {	
            	sb.append(node.processLine(node));
            } catch (Exception e) {
				throw new InvalidParameterException(node.getClass().getCanonicalName());
			}
		}

		// remove first newline
		if (sb.charAt(0) == '\n') {
			sb.deleteCharAt(0);
		}

		return sb.toString().replace(";",";\n");
	}
}
