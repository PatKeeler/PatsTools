package tools.java.pats.controllers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
@ComponentScan(basePackages = "tools.java.pats")
public class PatsWebApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(PatsWebApplication.class);
    }
}
