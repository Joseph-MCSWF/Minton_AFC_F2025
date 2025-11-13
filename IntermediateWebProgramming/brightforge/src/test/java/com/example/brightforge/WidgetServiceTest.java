package com.example.brightforge;

import com.example.brightforge.data.RequestWidgetDTO;
import com.example.brightforge.data.ResponseWidgetDTO;
import com.example.brightforge.data.WidgetEntity;
import com.example.brightforge.repository.WidgetRepository.WidgetRepository;
import com.example.brightforge.service.WidgetService;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class WidgetServiceTest {

    @Autowired
    WidgetRepository widgetRepository;

    @Autowired
    WidgetService widgetService;

    @Test
    public void givenDTOShouldCreateAndSaveWidget() {
        RequestWidgetDTO incoming = new RequestWidgetDTO();
        incoming.setName("test widget");
        incoming.setBlurb("test widget blurb");
        incoming.setColor("test widget color");
        incoming.setImageUrl("test widget image url");

        WidgetEntity testWidget = widgetService.createWidget(incoming);

        WidgetEntity fetchedWidget = widgetRepository.findById(testWidget.getId()).orElseThrow();
        assertThat(fetchedWidget.getName()).isEqualTo("test widget");
        assertThat(fetchedWidget.getCreated()).isNotNull();
        assertThat(fetchedWidget.getInfo().getBlurb()).isEqualTo("test widget blurb");
        assertThat(fetchedWidget.getInfo().getImageUrl()).isEqualTo("test widget image url");
        assertThat(fetchedWidget.getInfo().getColor()).isEqualTo("test widget color");
    }

    @Test
    public void askedForDTOShouldFetchWidget(){
        RequestWidgetDTO incoming = new RequestWidgetDTO();
        incoming.setName("test widget");
        incoming.setBlurb("test widget blurb");
        incoming.setColor("test widget color");
        incoming.setImageUrl("test widget image url");
        WidgetEntity result = widgetService.createWidget(incoming);

        ResponseWidgetDTO resultToDTO;
        resultToDTO = widgetService.getWidget(result.getId());

        assertThat(resultToDTO.getName()).isEqualTo("test widget");
        assertThat(resultToDTO.getBlurb()).isEqualTo("test widget blurb");
        assertThat(resultToDTO.getColor()).isEqualTo("test widget color");
        assertThat(resultToDTO.getImageUrl()).isEqualTo("test widget image url");
        assertThat(resultToDTO.getId()).isEqualTo(result.getId());
        assertThat(resultToDTO.getCreated()).isEqualTo(result.getCreated());

    }

    @Test
    public void givenDTOAndIdShouldUpdateWidget() {
        RequestWidgetDTO incoming = new RequestWidgetDTO();
        incoming.setName("test widget");
        incoming.setBlurb("test widget blurb");
        incoming.setColor("test widget color");
        incoming.setImageUrl("test widget image url");
        WidgetEntity existing = widgetService.createWidget(incoming);

        RequestWidgetDTO incomingUpdate = new RequestWidgetDTO();
        incomingUpdate.setName("test widget updated");
        incomingUpdate.setBlurb("test widget updated blurb");
        incomingUpdate.setColor("test widget updated color");
        incomingUpdate.setImageUrl("test widget updated image url");
        ResponseWidgetDTO updated = widgetService.updateWidget(existing.getId(),incomingUpdate);

        assertThat(updated.getName()).isEqualTo("test widget updated");
        assertThat(updated.getBlurb()).isEqualTo("test widget updated blurb");
        assertThat(updated.getColor()).isEqualTo("test widget updated color");
        assertThat(updated.getImageUrl()).isEqualTo("test widget updated image url");
    }
    @Test
    public void givenIDShouldDeleteWidget() {
        RequestWidgetDTO incoming = new RequestWidgetDTO();
        incoming.setName("test widget");
        incoming.setBlurb("test widget blurb");
        incoming.setColor("test widget color");
        incoming.setImageUrl("test widget image url");
        WidgetEntity existing = widgetService.createWidget(incoming);
        widgetService.deleteWidget(existing.getId());
        assertThat(widgetRepository.findById(existing.getId())).isEmpty();
    }


}


