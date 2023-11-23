package com.example.server.entity;

import com.example.server.model.RequestAgendaDTO;
import com.example.server.model.ResponseAgendaDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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

    public static Agenda from(RequestAgendaDTO dto) {
        return Agenda.builder()
                .title(dto.getTitle())
                .detail(dto.getTitle())
                .build();
    }
}
