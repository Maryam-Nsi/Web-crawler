package ir.darja.dataleh.dao;

import ir.darja.dataleh.model.entity.Record;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {
    List<Record> findAllByTaskId(String taskId, Pageable pageable);
}
