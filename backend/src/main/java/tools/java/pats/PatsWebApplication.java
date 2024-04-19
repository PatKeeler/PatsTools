package tools.java.pats;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tools.java.pats.classparams.SqlParms;
import tools.java.pats.classparams.XmlParms;
import tools.java.pats.controllers.ICMController;
import tools.java.pats.controllers.SqlFormatterController;
import tools.java.pats.controllers.XmlFormatterController;

import java.util.Map;


@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api")
public class PatsWebApplication extends SpringBootServletInitializer {

    public static void main(ApplicationArguments args) throws Exception {
        SpringApplication.run(PatsWebApplication.class);
    }


    @RequestMapping(value = "/formatSql")
    public Map<String, String> formatSql(SqlParms sqlParms) {
        SqlFormatterController sqlFormatterController =
                new SqlFormatterController();
        return sqlFormatterController.getSql(sqlParms);
    }


    @RequestMapping(value = "/formatXml")
    public Map<String, String> formatXml(XmlParms xmlParms) {
        XmlFormatterController xmlFormatterController =
                new XmlFormatterController();
        return xmlFormatterController.getXml(xmlParms);
    }


    @RequestMapping(value = "/getICM")
    public String[] computeICM(String[] icmParms) {
        ICMController icmController =
                new ICMController();
        return icmController.getICMPayouts(icmParms);
    }
}
