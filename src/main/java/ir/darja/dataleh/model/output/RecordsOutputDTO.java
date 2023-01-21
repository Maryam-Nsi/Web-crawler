package ir.darja.dataleh.model.output;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class RecordsOutputDTO extends ArrayList<Map<String, String>> {
    public RecordsOutputDTO(List<Map<String, String>> maps) {
        this.addAll(maps);
    }
}
