package ir.darja.dataleh.logic;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class HashMapConverter {
    private final ObjectMapper mapper;

    public String convertToDatabaseColumn(Map<String, String> attribute) {
        try {
            return mapper.writeValueAsString(attribute);
        } catch (JsonProcessingException e) {
            return "";
        }
    }

    public Map<String, String> convertToEntityAttribute(String dbData) {
        if (dbData == null || dbData.equals("")) return new HashMap<>();
        try {
            return mapper.readValue(dbData, new TypeReference<HashMap<String, String>>() {
            });
        } catch (JsonProcessingException e) {
            return new HashMap<>();
        }
    }
}
