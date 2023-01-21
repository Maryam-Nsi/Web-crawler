package ir.darja.dataleh.controller;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import ir.darja.dataleh.logic.RecordRepositoryHelper;
import ir.darja.dataleh.logic.URLInjectionRouteEnabler;
import ir.darja.dataleh.model.input.TaskConfigurationInputDTO;
import ir.darja.dataleh.model.output.RecordsOutputDTO;
import ir.darja.dataleh.model.output.TaskIdOutputDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/v1")
@OpenAPIDefinition(info = @Info(title = "This tool can integrate your data from hole network.", version = "0.0.1"))
@RequiredArgsConstructor
public class TaskController {
    private final URLInjectionRouteEnabler urlInjectionRouteEnabler;
    private final RecordRepositoryHelper recordRepositoryHelper;

    @Operation(summary = "You can start your data set creation task based on your configuration input.",
            responses = {@ApiResponse(description = "It contains a task id. You can follow your task with that.")})
    @PostMapping("/")
    public TaskIdOutputDTO start(@RequestBody TaskConfigurationInputDTO taskConfigurationInputDTO) throws IOException {
        UUID id = UUID.randomUUID();
        urlInjectionRouteEnabler.enable(id, taskConfigurationInputDTO);
        return new TaskIdOutputDTO(id);
    }

    @Operation(summary = "You can get your task result with its id and pagination.",
            responses = {@ApiResponse(description = "It contains list of records in json type.")})
    @GetMapping("/")
    public RecordsOutputDTO get(@RequestParam String taskId, @RequestParam int pageNumber, @RequestParam int pageSize) {
        return recordRepositoryHelper.getRecords(taskId, pageNumber, pageSize);
    }
}
