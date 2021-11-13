package tools.java.pats.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api")
public class XmlFormatterController implements Serializable {

	private static final long serialVersionUID = 1951L;

	@RequestMapping(value = "/formatXml")
	public String doPost(String[] args) {

		for (String s: args) {
			System.out.println(s);
		}

		return "Done";

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
//		}
//		else {
//			try {
//
//				results = formatter.doInvoke(inputXML, userIndentAmount);
//
//			}
//			//catch errors and set message on results
//			catch (ParserConfigurationException e) {
//				results = "ParserConfigurationException: " + e.getLocalizedMessage();
//			}
//			catch (SAXException e) {
//				results = "SAXException: " + e.getLocalizedMessage();
//			}
//			catch (TransformerFactoryConfigurationError e) {
//				results = "TransformerFactoryConfigurationError: " + e.getLocalizedMessage();
//			}
//			catch (TransformerException e) {
//				results = "TransformerException: " + e.getLocalizedMessage();
//			}
//
//			finally {
//				//print out the error message
//				response.getWriter().write(results);
//			}
//		}
	}
}
