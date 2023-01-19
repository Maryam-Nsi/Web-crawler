package ir.darja.dataleh.camel.process;

import com.fasterxml.jackson.databind.ObjectMapper;
import ir.darja.dataleh.dao.RecordRepository;
import ir.darja.dataleh.model.entity.Record;
import lombok.RequiredArgsConstructor;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.springframework.stereotype.Component;

import java.util.Map;

import static ir.darja.dataleh.camel.process.URLInjectorProcessor.TASK_ID_HEADER_KEY;

@Component
@RequiredArgsConstructor
public class DataSaverProcessor implements Processor {
    private final RecordRepository recordRepository;
    private final ObjectMapper mapper;

    @Override
    public void process(Exchange exchange) throws Exception {
        String taskId = exchange.getMessage().getHeader(TASK_ID_HEADER_KEY, String.class);
        Map<String, String> data = exchange.getMessage().getBody(Map.class);
        recordRepository.save(Record.builder().taskId(taskId).data(mapper.writeValueAsString(data)).build());
    }
}
