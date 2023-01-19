package ir.darja.dataleh.model.internal;

import ir.darja.dataleh.model.input.TaskConfigurationInputDTO;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TaskAndTaskIdDTO {
    private TaskConfigurationInputDTO inputDTO;
    private UUID taskId;
}
