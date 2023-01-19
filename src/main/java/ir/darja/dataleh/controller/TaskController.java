package ir.darja.dataleh.controller;

import ir.darja.dataleh.logic.URLInjectionRouteEnabler;
import ir.darja.dataleh.model.input.TaskConfigurationInputDTO;
import ir.darja.dataleh.model.output.TaskIdOutputDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class TaskController {
    private final URLInjectionRouteEnabler urlInjectionRouteEnabler;

    @PostMapping("/")
    public TaskIdOutputDTO start(@RequestBody TaskConfigurationInputDTO taskConfigurationInputDTO) throws IOException {
        UUID id = UUID.randomUUID();
        urlInjectionRouteEnabler.enable(id, taskConfigurationInputDTO);
        return new TaskIdOutputDTO(id);
    }
}
