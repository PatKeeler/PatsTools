package tools.java.pats.controllers;

import org.xml.sax.SAXException;
import tools.java.pats.classparams.XmlParms;
import tools.java.pats.models.XmlFormatter;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactoryConfigurationError;
import java.io.IOException;
import java.io.Serializable;
import java.util.Collections;
import java.util.Map;


public class XmlFormatterController implements Serializable {

	private static final long serialVersionUID = 1951L;

	public Map<String, String> getXml(XmlParms xmlParms) {

		//Default message if input is empty.
		String results = "";

		//Input xml string.
		String inputXML = xmlParms.getInputSQL();

		//Indent value requested by user.
		String userIndentAmount = xmlParms.getIndentAmount();
		if (userIndentAmount == null) {
			userIndentAmount = "0";
		}

		XmlFormatter formatter = new XmlFormatter();

		if (null == inputXML || inputXML.isEmpty()) {
			results = "InputXML string is blank";
		}
		else {
			try {
				results = formatter.doInvoke(inputXML, userIndentAmount);
			}
			//catch errors and set message on results
			catch (IOException ioe) {
				results = "IOException: " + ioe.getLocalizedMessage();
			}
			catch (ParserConfigurationException e) {
				results = "ParserConfigurationException: " + e.getLocalizedMessage();
			}
			catch (SAXException e) {
				results = "SAXException: " + e.getLocalizedMessage();
			}
			catch (TransformerFactoryConfigurationError e) {
				results = "TransformerFactoryConfigurationError: " + e.getLocalizedMessage();
			}
			catch (TransformerException e) {
				results = "TransformerException: " + e.getLocalizedMessage();
			}
		}
		return Collections.singletonMap("result", results);
	}
}
