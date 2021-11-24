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

		//Input xml string.
		String inputXML = xmlParms.getInputSQL();

		//Indent value requested by user.
		String userIndentAmount = xmlParms.getIndentAmount();
		if (userIndentAmount == null) {
			userIndentAmount = "0";
		}

		//Default message if input is empty.
		String results = "Input Xml string is blank!";

		XmlFormatter formatter = new XmlFormatter();

		if (! inputXML.isEmpty()) {
			try {
				results = formatter.doInvoke(inputXML, userIndentAmount);
			}
			//catch errors and set message on results
			catch (IOException ioe) {
				results = "IOException: " + ioe.getLocalizedMessage();
			}
			catch (ParserConfigurationException e) {
				results = "ParserConfigurationException: " + e.getLocalizedMessage();
			} catch (SAXException e) {
				results = "SAXException: " + e.getLocalizedMessage();
			} catch (TransformerFactoryConfigurationError e) {
				results = "TransformerFactoryConfigurationError: " + e.getLocalizedMessage();
			} catch (TransformerException e) {
				results = "TransformerException: " + e.getLocalizedMessage();
			}
//			finally {
//				//print out the error message
//				response.getWriter().write(results);
//			}
		}
		return Collections.singletonMap("result", results);
	}
}
