package tools.java.pats.controllers;

import tools.java.pats.classparams.XmlParms;
import java.io.Serializable;
import java.util.Collections;
import java.util.Map;


public class XmlFormatterController implements Serializable {

	private static final long serialVersionUID = 1951L;

	public Map<String, String> getXml(XmlParms xmlParms) {

		return Collections.singletonMap("result", "XML indent amount: " + xmlParms.getIndentAmount());

//		//Input xml string.
//		String inputXML = request.getParameter("inputXML");
//
//		//Indent value requested by user.
//		String userIndentAmount = request.getParameter("indentAmount");
//		if (userIndentAmount == null) {
//			userIndentAmount = "0";
//		}
//
//		//Default message if input is empty.
//		String results = "Input Xml string is blank!";
//
//		XmlFormatter formatter = new XmlFormatter();
//
//		if (inputXML.isEmpty()) {
//			response.getWriter().write(results);
//		} else {
//			try {
//
//				results = formatter.doInvoke(inputXML, userIndentAmount);
//
//			}
//			//catch errors and set message on results
//			catch (ParserConfigurationException e) {
//				results = "ParserConfigurationException: " + e.getLocalizedMessage();
//			} catch (SAXException e) {
//				results = "SAXException: " + e.getLocalizedMessage();
//			} catch (TransformerFactoryConfigurationError e) {
//				results = "TransformerFactoryConfigurationError: " + e.getLocalizedMessage();
//			} catch (TransformerException e) {
//				results = "TransformerException: " + e.getLocalizedMessage();
//			} finally {
//				//print out the error message
//				response.getWriter().write(results);
//			}
//		}
	}
}
