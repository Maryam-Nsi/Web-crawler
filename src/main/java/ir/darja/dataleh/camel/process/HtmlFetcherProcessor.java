package ir.darja.dataleh.camel.process;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class HtmlFetcherProcessor implements Processor {
    @Value("${jsoup.default-user-agent}")
    private String userAgent;

    @Override
    public void process(Exchange exchange) throws Exception {
        String url = exchange.getMessage().getBody(String.class);
        if (url == null) return;
        Connection jsoup = Jsoup.connect(url);
        Document document = jsoup.userAgent(userAgent).timeout(15000).get();
        exchange.getMessage().setBody(document);
    }
}
