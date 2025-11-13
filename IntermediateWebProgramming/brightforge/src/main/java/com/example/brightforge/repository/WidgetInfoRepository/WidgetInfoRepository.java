package com.example.brightforge.repository.WidgetInfoRepository;

import com.example.brightforge.data.WidgetInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface WidgetInfoRepository extends JpaRepository<WidgetInfoEntity, Long> {

}
