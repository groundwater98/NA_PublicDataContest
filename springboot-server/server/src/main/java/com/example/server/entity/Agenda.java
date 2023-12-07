package com.example.server.entity;

import com.example.server.model.RequestAgendaDTO;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@Getter
// @Table(name = "board_table")
@NoArgsConstructor
@AllArgsConstructor
public class Agenda {

    @Id @GeneratedValue
    private Long id;
    private String title;
    private String detail;
    @CreationTimestamp
    private LocalDateTime createDate;
    private String state;
    // 추천
    private Long recommend;
    // 댓글
    @OneToMany(mappedBy = "agenda", fetch = FetchType.LAZY)
    private List<AgendaRecommend> agendaRecommends = new ArrayList<>();

    public static Agenda from(RequestAgendaDTO dto) {
        return Agenda.builder()
                .title(dto.getTitle())
                .detail(dto.getTitle())
                .build();
    }

}

