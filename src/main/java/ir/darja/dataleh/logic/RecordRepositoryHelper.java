package ir.darja.dataleh.logic;

import ir.darja.dataleh.dao.RecordRepository;
import ir.darja.dataleh.model.entity.Record;
import ir.darja.dataleh.model.output.RecordsOutputDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class RecordRepositoryHelper {
    private final RecordRepository recordRepository;
    private final HashMapConverter converter;

    public RecordsOutputDTO getRecords(String taskId, int pageNumber, int pageSize) {
        return new RecordsOutputDTO(
                recordRepository.findAllByTaskId(taskId, PageRequest.of(pageNumber, pageSize))
                        .stream()
                        .map(Record::getData)
                        .map(converter::convertToEntityAttribute)
                        .collect(Collectors.toList())
        );
    }
}
