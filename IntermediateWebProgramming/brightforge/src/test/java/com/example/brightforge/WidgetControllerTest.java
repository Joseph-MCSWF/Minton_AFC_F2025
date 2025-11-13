package com.example.brightforge;

import com.example.brightforge.controller.WidgetController;
import com.example.brightforge.data.RequestWidgetDTO;
import com.example.brightforge.data.ResponseWidgetDTO;
import com.example.brightforge.data.WidgetEntity;
import com.example.brightforge.service.WidgetService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class WidgetControllerTest {
    @Autowired
    WidgetController widgetController;

    @Autowired
    WidgetService widgetService;

    @Test
    public void controllerPostTest(){
        RequestWidgetDTO newWidgetDTO = new RequestWidgetDTO();
        newWidgetDTO.setName("test widget");
        newWidgetDTO.setBlurb("test widget blurb");
        newWidgetDTO.setColor("test widget color");
        newWidgetDTO.setImageUrl("test widget image url");

        ResponseEntity<ResponseWidgetDTO> response = widgetController.controllerCreateWidget(newWidgetDTO);

        assertThat(response.getBody()).isNotNull();
        assertThat(response.getStatusCode().value()).isEqualTo(HttpStatus.CREATED.value());
        assertThat(response.getBody().getName()).isEqualTo("test widget");
        assertThat(response.getBody().getBlurb()).isEqualTo("test widget blurb");
        assertThat(response.getBody().getColor()).isEqualTo("test widget color");
        assertThat(response.getBody().getImageUrl()).isEqualTo("test widget image url");
        assertThat(response.getBody().getId()).isNotNull();
        assertThat(response.getBody().getCreated()).isNotNull();
    }
    @Test
    public void controllerGetTest(){
        RequestWidgetDTO newWidgetDTO = new RequestWidgetDTO();
        newWidgetDTO.setName("test widget");
        newWidgetDTO.setBlurb("test widget blurb");
        newWidgetDTO.setColor("test widget color");
        newWidgetDTO.setImageUrl("test widget image url");

        WidgetEntity newWidget = widgetService.createWidget(newWidgetDTO);

        ResponseEntity<ResponseWidgetDTO> response = widgetController.controllerGetWidget(newWidget.getId());

        assertThat(response.getBody()).isNotNull();
        assertThat(response.getStatusCode().value()).isEqualTo(HttpStatus.OK.value());
        assertThat(response.getBody().getName()).isEqualTo("test widget");
        assertThat(response.getBody().getBlurb()).isEqualTo("test widget blurb");
        assertThat(response.getBody().getColor()).isEqualTo("test widget color");
        assertThat(response.getBody().getImageUrl()).isEqualTo("test widget image url");
        assertThat(response.getBody().getId()).isNotNull();
        assertThat(response.getBody().getCreated()).isNotNull();
    }

    @Test
    public void controllerDeleteTest(){
        RequestWidgetDTO newWidgetDTO = new RequestWidgetDTO();
        newWidgetDTO.setName("test widget");
        newWidgetDTO.setBlurb("test widget blurb");
        newWidgetDTO.setColor("test widget color");
        newWidgetDTO.setImageUrl("test widget image url");

        WidgetEntity newWidget = widgetService.createWidget(newWidgetDTO);

        ResponseEntity<Void> response = widgetController.deleteWidget(newWidget.getId());

        assertThat(response.getStatusCode().value()).isEqualTo(204);
    }

    @Test
    public void controllerUpdateTest(){
        RequestWidgetDTO newWidgetDTO = new RequestWidgetDTO();
        newWidgetDTO.setName("test widget");
        newWidgetDTO.setBlurb("test widget blurb");
        newWidgetDTO.setColor("test widget color");
        newWidgetDTO.setImageUrl("test widget image url");

        WidgetEntity newWidget = widgetService.createWidget(newWidgetDTO);

        RequestWidgetDTO newWidgetDTOUpdate = new RequestWidgetDTO();
        newWidgetDTOUpdate.setName("test widget updated");
        newWidgetDTOUpdate.setBlurb("test widget updated blurb");
        newWidgetDTOUpdate.setColor("test widget updated color");
        newWidgetDTOUpdate.setImageUrl("test widget updated image url");

        ResponseEntity<ResponseWidgetDTO> response = widgetController.controllerUpdateWidget(newWidget.getId(), newWidgetDTOUpdate);

        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getId()).isNotNull().isEqualTo(newWidget.getId());
        assertThat(response.getStatusCode().value()).isEqualTo(HttpStatus.OK.value());
        assertThat(response.getBody().getName()).isEqualTo("test widget updated");
        assertThat(response.getBody().getBlurb()).isEqualTo("test widget updated blurb");
        assertThat(response.getBody().getColor()).isEqualTo("test widget updated color");
        assertThat(response.getBody().getImageUrl()).isEqualTo("test widget updated image url");
        assertThat(response.getBody().getCreated()).isNotNull();
    }

}
