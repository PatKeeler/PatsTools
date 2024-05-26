package webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collections;
import java.util.Map;

/**
 * Hello world!
 *
 */
@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200")
public class PatsToolsTestApp extends SpringBootServletInitializer
{

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(PatsToolsTestApp.class);
    }

    public static void main( String[] args ) {
        SpringApplication.run(PatsToolsTestApp.class, args);
    }

    @RequestMapping(value = "/message", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> index() {
        return Collections.singletonMap("message", "Hello from Pat Keeler!");
    }

}
