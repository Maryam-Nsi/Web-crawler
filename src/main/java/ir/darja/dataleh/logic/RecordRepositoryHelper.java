package ir.darja.dataleh.logic;

import ir.darja.dataleh.dao.RecordRepository;
import ir.darja.dataleh.model.entity.Record;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class RecordRepositoryHelper {
    private final RecordRepository recordRepository;

    public List<String> getRecords(String taskId, int pageNumber, int pageSize) {
        return recordRepository.findAllByTaskId(taskId, PageRequest.of(pageNumber, pageSize))
                .stream()
                .map(Record::getData)
                .collect(Collectors.toList());
    }
}
