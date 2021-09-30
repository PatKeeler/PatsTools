package angular.java.webapp;

/**
 * Hello world!
 *
 */
@SpringBootApplication
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
