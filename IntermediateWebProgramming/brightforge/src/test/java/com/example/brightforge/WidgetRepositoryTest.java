package com.example.brightforge;


import com.example.brightforge.data.WidgetEntity;
import com.example.brightforge.data.WidgetInfoEntity;
import com.example.brightforge.repository.WidgetInfoRepository.WidgetInfoRepository;
import com.example.brightforge.repository.WidgetRepository.WidgetRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import static org.assertj.core.api.Assertions.assertThat;


import java.time.LocalDate;

@DataJpaTest
public class WidgetRepositoryTest {

    @Autowired
    WidgetRepository widgetRepository;

    @Autowired
    WidgetInfoRepository widgetInfoRepository;

    private WidgetEntity testWidget;
    private WidgetInfoEntity testWidgetInfo;

    @BeforeEach
    void setUp() {

        testWidget = new WidgetEntity();
        testWidget.setCreated(LocalDate.now());
        testWidget.setName("testWidget");
        testWidget = widgetRepository.save(testWidget);

        testWidgetInfo = new WidgetInfoEntity();
        testWidgetInfo.setWidgetId(testWidget.getId());
        testWidgetInfo.setBlurb("test blurb");
        testWidgetInfo.setImageUrl("test imageUrl");
        testWidgetInfo.setColor("test color");
        widgetInfoRepository.save(testWidgetInfo);

        testWidget.setInfo(testWidgetInfo);
        widgetRepository.save(testWidget);
    }


    @Test
    public void shouldSaveWidget(){

        WidgetEntity testWidgetFound = widgetRepository.findById(testWidget.getId()).orElseThrow();
        assertThat(testWidgetFound.getName()).isEqualTo("testWidget");
        assertThat(testWidgetFound.getInfo()).isNotNull();
        assertThat(testWidgetFound.getInfo().getBlurb()).isEqualTo("test blurb");
        assertThat(testWidgetFound.getInfo().getColor()).isEqualTo("test color");
        assertThat(testWidgetFound.getInfo().getImageUrl()).isEqualTo("test imageUrl");

    }
    @Test
    public void shouldDeleteWidget(){

        widgetRepository.delete(testWidget);
        widgetInfoRepository.delete(testWidgetInfo);
        assertThat(widgetRepository.findById(testWidget.getId())).isEmpty();
        assertThat(widgetInfoRepository.findById(testWidgetInfo.getWidgetId())).isEmpty();
    }
    @Test
    public void shouldUpdateWidget() {
        WidgetEntity widget = widgetRepository.findById(testWidget.getId()).orElseThrow();
        WidgetInfoEntity info = widgetInfoRepository.findById(testWidgetInfo.getWidgetId()).orElseThrow();

        widget.setName("testWidget2");
        info.setColor("test color 2");

        widgetRepository.save(widget);
        widgetInfoRepository.save(info);

        WidgetEntity updatedWidget = widgetRepository.findById(testWidget.getId()).orElseThrow();
        WidgetInfoEntity updatedInfo = widgetInfoRepository.findById(testWidgetInfo.getWidgetId()).orElseThrow();

        assertThat(updatedWidget.getName()).isEqualTo("testWidget2");
        assertThat(updatedInfo.getColor()).isEqualTo("test color 2");
    }
}
