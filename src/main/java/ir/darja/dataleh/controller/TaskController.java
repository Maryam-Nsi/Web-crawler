package ir.darja.dataleh.controller;

import ir.darja.dataleh.logic.RecordRepositoryHelper;
import ir.darja.dataleh.logic.URLInjectionRouteEnabler;
import ir.darja.dataleh.model.input.TaskConfigurationInputDTO;
import ir.darja.dataleh.model.output.TaskIdOutputDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class TaskController {
    private final URLInjectionRouteEnabler urlInjectionRouteEnabler;
    private final RecordRepositoryHelper recordRepositoryHelper;

    @PostMapping("/")
    public TaskIdOutputDTO start(@RequestBody TaskConfigurationInputDTO taskConfigurationInputDTO) throws IOException {
        UUID id = UUID.randomUUID();
        urlInjectionRouteEnabler.enable(id, taskConfigurationInputDTO);
        return new TaskIdOutputDTO(id);
    }

    @GetMapping("/")
    public List<String> get(@RequestParam String taskId, @RequestParam int pageNumber, @RequestParam int pageSize) {
        return recordRepositoryHelper.getRecords(taskId, pageNumber, pageSize);
    }
}
