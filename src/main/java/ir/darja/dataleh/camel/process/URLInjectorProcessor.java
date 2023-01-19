package ir.darja.dataleh.camel.process;

import ir.darja.dataleh.model.internal.TaskAndTaskIdDTO;
import ir.darja.dataleh.util.ReadLoc;
import lombok.RequiredArgsConstructor;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class URLInjectorProcessor implements Processor {
    public static final String FEATURES_HEADER_KEY = "Features";
    public static final String TASK_ID_HEADER_KEY = "id";
    private final ReadLoc readLoc;

    @Override
    public void process(Exchange exchange) throws Exception {
        TaskAndTaskIdDTO taskAndTaskIdDTO = exchange.getMessage().getBody(TaskAndTaskIdDTO.class);
        exchange.getMessage().setHeader(TASK_ID_HEADER_KEY, taskAndTaskIdDTO.getTaskId().toString());
        exchange.getMessage().setHeader(FEATURES_HEADER_KEY, taskAndTaskIdDTO.getInputDTO().getFeatures());
        exchange.getMessage().setBody(readLoc.readData(taskAndTaskIdDTO.getInputDTO().getHostName()));
    }
}
