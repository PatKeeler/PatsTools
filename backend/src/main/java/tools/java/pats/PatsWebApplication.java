package tools.java.pats;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tools.java.pats.controllers.SqlFormatterController;
import tools.java.pats.controllers.XmlFormatterController;

import java.util.Map;


@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api")
public class PatsWebApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(PatsWebApplication.class);
    }


    @RequestMapping(value = "/formatSql")
    public Map<String, String> formatSql() {
        SqlFormatterController sqlFormatterController =
                new SqlFormatterController();
        return sqlFormatterController.getSql();
    }


    @RequestMapping(value = "/formatXml")
    public Map<String, String> formatXml() {
        XmlFormatterController xmlFormatterController =
                new XmlFormatterController();
        return xmlFormatterController.getXml();
    }
}
