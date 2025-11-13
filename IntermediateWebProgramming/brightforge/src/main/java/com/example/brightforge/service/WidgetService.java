package com.example.brightforge.service;

import com.example.brightforge.data.RequestWidgetDTO;
import com.example.brightforge.data.ResponseWidgetDTO;
import com.example.brightforge.data.WidgetEntity;
import com.example.brightforge.data.WidgetInfoEntity;
import com.example.brightforge.repository.WidgetInfoRepository.WidgetInfoRepository;
import com.example.brightforge.repository.WidgetRepository.WidgetRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDate;


@Service
public class WidgetService {

    private final WidgetRepository widgetRepository;
    private final WidgetInfoRepository widgetInfoRepository;

    public WidgetService(WidgetRepository widgetRepository, WidgetInfoRepository widgetInfoRepository) {
        this.widgetRepository = widgetRepository;
        this.widgetInfoRepository = widgetInfoRepository;
    }

    public WidgetEntity createWidget(RequestWidgetDTO widgetDTO) {
        WidgetEntity newWidget = new WidgetEntity();
        newWidget.setName(widgetDTO.getName());
        newWidget.setCreated(LocalDate.now());

        newWidget = widgetRepository.save(newWidget);

        WidgetInfoEntity newWidgetInfo = new WidgetInfoEntity();
        newWidgetInfo.setColor(widgetDTO.getColor());
        newWidgetInfo.setBlurb(widgetDTO.getBlurb());
        newWidgetInfo.setImageUrl(widgetDTO.getImageUrl());
        newWidgetInfo.setWidgetId(newWidget.getId());

        newWidgetInfo = widgetInfoRepository.save(newWidgetInfo);

        newWidget.setInfo(newWidgetInfo);
        widgetRepository.save(newWidget);

        return newWidget;
    }

    public ResponseWidgetDTO getWidget(Long id) {
        WidgetEntity widget = widgetRepository.findById(id).orElseThrow();
        WidgetInfoEntity widgetInfo = widgetInfoRepository.findById(id).orElseThrow();
        ResponseWidgetDTO responseWidgetDTO = new ResponseWidgetDTO();
        responseWidgetDTO.setName(widget.getName());
        responseWidgetDTO.setId(widget.getId());
        responseWidgetDTO.setCreated(widget.getCreated());
        responseWidgetDTO.setBlurb(widgetInfo.getBlurb());
        responseWidgetDTO.setImageUrl(widgetInfo.getImageUrl());
        responseWidgetDTO.setColor(widgetInfo.getColor());
        return responseWidgetDTO;
    }

    @Transactional
    public ResponseWidgetDTO updateWidget(Long id, RequestWidgetDTO widgetDTO) {
        WidgetEntity widget = widgetRepository.findById(id).orElseThrow();

        WidgetInfoEntity widgetInfo = widget.getInfo();
        if (widgetInfo == null) {
            widgetInfo = new WidgetInfoEntity();
            widget.setInfo(widgetInfo);
        }
        if (widgetDTO.getName() != null) {
            widget.setName(widgetDTO.getName());
        }
        if (widgetDTO.getImageUrl() != null) {
            widgetInfo.setImageUrl(widgetDTO.getImageUrl());
        }
        if (widgetDTO.getBlurb() != null) {
            widgetInfo.setBlurb(widgetDTO.getBlurb());
        }
        if (widgetDTO.getColor() != null) {
            widgetInfo.setColor(widgetDTO.getColor());
        }

        widgetRepository.save(widget);

        ResponseWidgetDTO response = new ResponseWidgetDTO();
        response.setId(widget.getId());
        response.setName(widget.getName());
        response.setBlurb(widgetInfo.getBlurb());
        response.setImageUrl(widgetInfo.getImageUrl());
        response.setColor(widgetInfo.getColor());
        response.setCreated(widget.getCreated());

        return response;
    }
    @Transactional
    public void deleteWidget(Long id) {
        widgetRepository.deleteById(id);
    }



}
