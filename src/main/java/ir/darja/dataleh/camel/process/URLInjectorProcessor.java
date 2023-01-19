package ir.darja.dataleh.camel.process;

import ir.darja.dataleh.model.internal.TaskAndTaskIdDTO;
import lombok.RequiredArgsConstructor;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class URLInjectorProcessor implements Processor {
    @Override
    public void process(Exchange exchange) throws Exception {
        TaskAndTaskIdDTO taskAndTaskIdDTO = exchange.getMessage().getBody(TaskAndTaskIdDTO.class);
        exchange.getMessage().setHeader("id", taskAndTaskIdDTO.getTaskId());
        exchange.getMessage().setBody(List.of(
                "https://www.digikala.com/product/dkp-374558/%DA%A9%D8%A7%D8%A8%D9%84-vga-%D8%A7%DB%8C-%D9%81%D9%88%D8%B1-%D9%86%D8%AA-%D9%85%D8%AF%D9%84-005-%D8%B7%D9%88%D9%84-3-%D9%85%D8%AA%D8%B1/",
                "https://www.digikala.com/product/dkp-6982667/%D9%86%DA%AF%D9%87%D8%AF%D8%A7%D8%B1%D9%86%D8%AF%D9%87-%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%DA%98%DB%8C%D9%88%D9%86-%D9%85%D8%AF%D9%84-zhiyun-smooth-q3-combo/"));
    }
}
