package ir.darja.dataleh.util;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class UrlExtractor {
    public  List<String> getUrls() throws FileNotFoundException {
        FileReader fileReader = new FileReader(new File("src/main/resources/sitemap/digikala1.xml"));
        FileInputStream stream = new FileInputStream(new File("src/main/resources/sitemap/digikala1.xml"));
        List<String> urls = new ArrayList<>();
        while (urls.size() <= 10) {

        }
        return urls;
    }

//    private String getNexUrl(FileReader fileReader) throws IOException {
//        fileReader.
//    }
}
