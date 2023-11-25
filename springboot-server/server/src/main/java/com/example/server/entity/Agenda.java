package com.example.server.entity;

import com.example.server.model.RequestAgendaDTO;
import com.example.server.model.ResponseAgendaDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Builder
@Getter
@Table(name = "board_table")
@NoArgsConstructor
@AllArgsConstructor
public class Agenda {

    @Id @GeneratedValue
    private Long id;
    private String title;
    private String detail;
    @CreationTimestamp
    private LocalDateTime createDate;
    @Enumerated(EnumType.ORDINAL)
    private State state;
    // 추천
    private Long recommend;

    public static Agenda from(RequestAgendaDTO dto) {
        return Agenda.builder()
                .title(dto.getTitle())
                .detail(dto.getTitle())
                .build();
    }
}

enum State {
    CHECK, NONE
}
