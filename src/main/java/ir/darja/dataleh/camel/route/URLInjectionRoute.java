package ir.darja.dataleh.camel.route;

import ir.darja.dataleh.camel.process.HtmlDownloaderProcessor;
import ir.darja.dataleh.camel.process.InformationExtractorProcessor;
import ir.darja.dataleh.camel.process.URLInjectorProcessor;
import lombok.RequiredArgsConstructor;
import org.apache.camel.builder.RouteBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class URLInjectionRoute extends RouteBuilder {
    @Value("${URLInjection.consumerSeda}")
    private String consumerSeda;
    private final URLInjectorProcessor urlInjectorProcessor;
    private final HtmlDownloaderProcessor htmlDownloaderProcessor;
    private final InformationExtractorProcessor informationExtractorProcessor;

    @Override
    public void configure() throws Exception {
        from(consumerSeda)
                .process(urlInjectorProcessor)
                .to("direct:htmlDownloader");

        from("direct:htmlDownloader")
                .split().body()
                .process(htmlDownloaderProcessor)
                .to("direct:informationExtraction");

        from("direct:informationExtraction")
                .process(informationExtractorProcessor);


    }
}
