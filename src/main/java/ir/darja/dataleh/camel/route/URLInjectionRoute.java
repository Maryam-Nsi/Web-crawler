package ir.darja.dataleh.camel.route;

import org.apache.camel.builder.RouteBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class URLInjectionRoute extends RouteBuilder {
    @Value("${URLInjection.consumerSeda}")
    private String consumerSeda;

    @Override
    public void configure() throws Exception {
        from(consumerSeda)
                .process(p -> System.err.println("hihihihih"));
    }
}
