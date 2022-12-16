package ir.darja.dataleh.model.internal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FeatureDTO {
    private String name;
    private String richResultPath;
    private String selector;
}
