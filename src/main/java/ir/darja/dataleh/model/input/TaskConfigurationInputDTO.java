package ir.darja.dataleh.model.input;

import ir.darja.dataleh.model.internal.FeatureDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TaskConfigurationInputDTO {
    private String hostName;
    private String uriStartRegex;
    private int dataSetSize;
    private int webPageVisitSize;
    private double requestPerSecond;
    private List<FeatureDTO> features;
}
