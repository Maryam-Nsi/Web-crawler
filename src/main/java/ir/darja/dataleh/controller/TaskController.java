package ir.darja.dataleh.controller;

import ir.darja.dataleh.model.input.TaskConfigurationInputDTO;
import ir.darja.dataleh.model.output.TaskIdOutputDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class TaskController {
    @PostMapping("/")
    public TaskIdOutputDTO start(@RequestBody TaskConfigurationInputDTO taskConfigurationInputDTO) {
        return new TaskIdOutputDTO(UUID.randomUUID());
    }
}
