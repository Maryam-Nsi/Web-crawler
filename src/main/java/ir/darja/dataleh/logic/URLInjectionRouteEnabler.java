package ir.darja.dataleh.logic;

import ir.darja.dataleh.model.input.TaskConfigurationInputDTO;
import ir.darja.dataleh.model.internal.TaskAndTaskIdDTO;
import lombok.RequiredArgsConstructor;
import org.apache.camel.CamelContext;
import org.apache.camel.ProducerTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class URLInjectionRouteEnabler {
    @Value("${URLInjection.producerSeda}")
    private String producerSeda;
    private final CamelContext camelContext;

    public void enable(UUID taskUuid, TaskConfigurationInputDTO inputDTO) throws IOException {
        ProducerTemplate producerTemplate = null;
        try {
            producerTemplate = camelContext.createProducerTemplate();
            producerTemplate.sendBody(producerSeda, TaskAndTaskIdDTO.builder().taskId(taskUuid).inputDTO(inputDTO).build());
        } finally {
            assert producerTemplate != null;
            producerTemplate.close();
        }
    }
}
