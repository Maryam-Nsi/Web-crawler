package ir.darja.dataleh.camel.route;

import ir.darja.dataleh.camel.process.DataSaverProcessor;
import ir.darja.dataleh.camel.process.HtmlFetcherProcessor;
import ir.darja.dataleh.camel.process.InformationExtractorProcessor;
import ir.darja.dataleh.camel.process.URLInjectorProcessor;
import lombok.RequiredArgsConstructor;
import org.apache.camel.builder.RouteBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RouteBuildersDefinition extends RouteBuilder {
    private final URLInjectorProcessor urlInjectorProcessor;
    private final HtmlFetcherProcessor htmlFetcherProcessor;
    private final InformationExtractorProcessor informationExtractorProcessor;
    private final DataSaverProcessor dataSaverProcessor;
    @Value("${context.endpoint.urlInjection.consumer}")
    private String urlInjectionConsumer;
    @Value("${context.endpoint.htmlFetcher.producer}")
    private String htmlFetcherProducer;
    @Value("${context.endpoint.htmlFetcher.consumer}")
    private String htmlFetcherConsumer;
    @Value("${context.endpoint.dataExtraction.producer}")
    private String dataExtractionProducer;
    @Value("${context.endpoint.dataExtraction.consumer}")
    private String dataExtractionConsumer;

    @Override
    public void configure() {
        from(urlInjectionConsumer)
                .process(urlInjectorProcessor)
                .to(htmlFetcherProducer);

        from(htmlFetcherConsumer)
                .split().body()
                .process(htmlFetcherProcessor)
                .to(dataExtractionProducer);

        from(dataExtractionConsumer)
                .process(informationExtractorProcessor)
                .process(dataSaverProcessor)
                .process(e -> System.err.println("done!"));
    }
}
