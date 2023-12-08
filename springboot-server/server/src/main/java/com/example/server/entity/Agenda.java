package com.example.server.entity;

import com.example.server.model.RequestAgendaDTO;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@Getter
// @Table(name = "board_table")
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
public class Agenda {

    @Id @GeneratedValue
    private Long id;
    private String title;
    private String detail;
    @CreationTimestamp
    private LocalDateTime createDate;
    @Column(length = 32, columnDefinition = "varchar(32) default 'NONE'")
    @Enumerated(EnumType.STRING)
    private CheckState state;
    // 추천
    @ColumnDefault("0")
    private Long recommend;
    // 댓글 상위 게시물이 지워지면 댓글도 모두 삭제되도록
    @OneToMany(mappedBy = "agenda", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @OrderBy("agendaRecommendId asc")
    private List<AgendaRecommend> agendaRecommends = new ArrayList<>();

    public static Agenda from(RequestAgendaDTO dto) {
        return Agenda.builder()
                .title(dto.getTitle())
                .detail(dto.getTitle())
                .build();
    }

}

