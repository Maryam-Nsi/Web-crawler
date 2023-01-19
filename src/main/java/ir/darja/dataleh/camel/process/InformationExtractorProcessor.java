package ir.darja.dataleh.camel.process;

import ir.darja.dataleh.model.internal.FeatureDTO;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static ir.darja.dataleh.camel.process.URLInjectorProcessor.FEATURES_HEADER_KEY;

@Component
public class InformationExtractorProcessor implements Processor {
    @Override
    public void process(Exchange exchange) throws Exception {
        Document document = exchange.getMessage().getBody(Document.class);
        List<FeatureDTO> featureDTOS = exchange.getMessage().getHeader(FEATURES_HEADER_KEY, List.class);
        Map<String, String> data = new HashMap<>();
        featureDTOS.forEach(featureDTO -> {
            Elements value = document.select(featureDTO.getSelector());
            data.put(featureDTO.getName(), value.text());
        });
        exchange.getMessage().setBody(data);
    }
}
