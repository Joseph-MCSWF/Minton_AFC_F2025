package com.example.brightforge.data;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ResponseWidgetDTO {

    private Long id;
    private LocalDate created;
    private String name;
    private String blurb;
    private String imageUrl;
    private String color;


}
