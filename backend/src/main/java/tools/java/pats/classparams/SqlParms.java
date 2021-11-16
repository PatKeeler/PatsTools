package tools.java.pats.classparams;

public class SqlParms {

      private String inputSQL;
      private String indent;
      private String indentAmount;
      private String selectedStyle;
      private String addQuotesAndReformat;
      private String addQuotesOnly;
      private String removeQuotesAndReformat;
      private String removeQuotesOnly;

    public String getInputSQL() {
        return inputSQL;
    }
    public void setInputSQL(String inputSQL) {
        this.inputSQL = inputSQL;
    }

    public String getIndent() {
        return indent;
    }
    public void setIndent(String indent) {
        this.indent = indent;
    }

    public String getIndentAmount() {
        return indentAmount;
    }
    public void setIndentAmount(String indentAmount) {
        this.indentAmount = indentAmount;
    }

    public String getSelectedStyle() {
        return selectedStyle;
    }
    public void setSelectedStyle(String selectedStyle) {
        this.selectedStyle = selectedStyle;
    }

    public String getAddQuotesAndReformat() {
        return addQuotesAndReformat;
    }
    public void setAddQuotesAndReformat(String addQuotesAndReformat) {
        this.addQuotesAndReformat = addQuotesAndReformat;
    }

    public String getAddQuotesOnly() {
        return addQuotesOnly;
    }
    public void setAddQuotesOnly(String addQuotesOnly) {
        this.addQuotesOnly = addQuotesOnly;
    }

    public String getRemoveQuotesAndReformat() {
        return removeQuotesAndReformat;
    }
    public void setRemoveQuotesAndReformat(String removeQuotesAndReformat) {
        this.removeQuotesAndReformat = removeQuotesAndReformat;
    }

    public String getRemoveQuotesOnly() {
        return removeQuotesOnly;
    }
    public void setRemoveQuotesOnly(String removeQuotesOnly) {
        this.removeQuotesOnly = removeQuotesOnly;
    }
}
