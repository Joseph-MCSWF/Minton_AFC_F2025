package com.example.brightforge.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "widgets_info")
public class WidgetInfoEntity {
    @Id
    @Column(name = "widget_id")
    private Long widgetId;

    @Column(name = "blurb")
    private String blurb;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "color")
    private String color;


}
