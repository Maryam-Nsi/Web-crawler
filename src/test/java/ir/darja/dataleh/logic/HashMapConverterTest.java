package ir.darja.dataleh.logic;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class HashMapConverterTest {
    HashMapConverter converter = new HashMapConverter(new ObjectMapper());

    @Test
    void convertToDatabaseColumn() {
        Map<String, String> map = Map.of("sef", "s", "df", "ss");
        String result = converter.convertToDatabaseColumn(map);
        assertEquals(21, result.length());
    }

    @Test
    void convertToEntityAttribute() {
        String s = "{\"df\":\"ss\",\"sef\":\"s\"}";
        Map<String, String> result = converter.convertToEntityAttribute(s);
        assertEquals(Map.of("sef", "s", "df", "ss"), result);
    }
}