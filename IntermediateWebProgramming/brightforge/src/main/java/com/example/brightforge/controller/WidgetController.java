package com.example.brightforge.controller;

import com.example.brightforge.data.RequestWidgetDTO;
import com.example.brightforge.data.ResponseWidgetDTO;
import com.example.brightforge.data.WidgetEntity;
import com.example.brightforge.service.WidgetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/widgets")
public class WidgetController {

    private final WidgetService widgetService;

    public WidgetController(WidgetService widgetService) {
        this.widgetService = widgetService;
    }

    @PostMapping("/api/widgets")
    public ResponseEntity<ResponseWidgetDTO> controllerCreateWidget(@RequestBody RequestWidgetDTO request) {
        WidgetEntity created = widgetService.createWidget(request);
        ResponseWidgetDTO response = widgetService.getWidget(created.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/api/widgets/{id}")
    public ResponseEntity<ResponseWidgetDTO> controllerGetWidget(@PathVariable Long id) {
        ResponseWidgetDTO response = widgetService.getWidget(id);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PatchMapping("/api/widgets/{id}")
    public ResponseEntity<ResponseWidgetDTO> controllerUpdateWidget(@PathVariable Long id, @RequestBody RequestWidgetDTO request) {
        ResponseWidgetDTO response = widgetService.updateWidget(id, request);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @DeleteMapping("/api/widgets/{id}")
    public ResponseEntity<Void> deleteWidget(@PathVariable Long id) {
        widgetService.deleteWidget(id);
        return ResponseEntity.noContent().build();
    }


}
