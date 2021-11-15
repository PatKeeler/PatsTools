package tools.java.pats.controllers;

import org.springframework.web.bind.annotation.*;
import org.xml.sax.SAXException;
import tools.java.pats.models.XmlFormatter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactoryConfigurationError;
import java.io.IOException;
import java.io.Serializable;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api")
public class XmlFormatterController implements Serializable {

	private static final long serialVersionUID = 1951L;

	@PostMapping(value = "/formatXml")
	public void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
//		for (String s: args) {
//			System.out.println(s);
//		}
//
//		return "Done";

		//Input xml string.
		String inputXML = request.getParameter("inputXML");

		//Indent value requested by user.
		String userIndentAmount = request.getParameter("indentAmount");
		if (userIndentAmount == null) {
			userIndentAmount = "0";
		}

		//Default message if input is empty.
		String results = "Input Xml string is blank!";

		XmlFormatter formatter = new XmlFormatter();

		if (inputXML.isEmpty()) {
			response.getWriter().write(results);
		} else {
			try {

				results = formatter.doInvoke(inputXML, userIndentAmount);

			}
			//catch errors and set message on results
			catch (ParserConfigurationException e) {
				results = "ParserConfigurationException: " + e.getLocalizedMessage();
			} catch (SAXException e) {
				results = "SAXException: " + e.getLocalizedMessage();
			} catch (TransformerFactoryConfigurationError e) {
				results = "TransformerFactoryConfigurationError: " + e.getLocalizedMessage();
			} catch (TransformerException e) {
				results = "TransformerException: " + e.getLocalizedMessage();
			} finally {
				//print out the error message
				response.getWriter().write(results);
			}
		}
	}
}
