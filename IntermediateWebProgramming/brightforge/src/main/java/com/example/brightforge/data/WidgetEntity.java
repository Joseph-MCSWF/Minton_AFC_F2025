package com.example.brightforge.data;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "widgets")
@AllArgsConstructor
@NoArgsConstructor
public class WidgetEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;


    @Column(name = "created")
    private LocalDate created;

    @OneToOne
    @JoinColumn(name = "info_id", referencedColumnName = "widget_id")
    private WidgetInfoEntity info;
}

