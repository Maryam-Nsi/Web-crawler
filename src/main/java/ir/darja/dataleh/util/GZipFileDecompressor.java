package ir.darja.dataleh.util;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.zip.GZIPInputStream;

@Component
@Slf4j
public class GZipFileDecompressor {
    public void decompress(String fileName) {
        Path source = Paths.get("src/main/resources/sitemap/" + fileName + ".xml.gz");
        Path target = Paths.get("src/main/resources/sitemap/" + fileName + ".xml");

        if (Files.notExists(source)) {
            log.error("The path %s doesn't exist! " + fileName);
            return;
        }

        try {
            decompressGzip(source, target);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //copied from https://mkyong.com/java/how-to-decompress-file-from-gzip-file/
    private void decompressGzip(Path source, Path target) throws IOException {
        try (GZIPInputStream gis = new GZIPInputStream(
                new FileInputStream(source.toFile()));
             FileOutputStream fos = new FileOutputStream(target.toFile())) {

            byte[] buffer = new byte[1024];
            int len;
            while ((len = gis.read(buffer)) > 0) {
                fos.write(buffer, 0, len);
            }
        }
    }
}
