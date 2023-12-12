package com.example.server.entity;

import com.example.server.model.RequestAgendaDTO;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    @Setter
    @Enumerated(EnumType.STRING)
    private CheckState state;
    // 댓글 상위 게시물이 지워지면 댓글도 모두 삭제되도록
    // 두개의 컬럼은 게시물에 완전히 종속적이기 때문에 Cascade ALL을 사용
    @OneToMany(mappedBy = "agenda", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @OrderBy("agendaRecommendId asc")
    private List<AgendaRecommend> agendaRecommends = new ArrayList<>();
    @OneToMany(mappedBy = "agenda", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<LikeAgenda> likeAgendaList = new ArrayList<>();

    public static Agenda from(RequestAgendaDTO dto) {
        return Agenda.builder()
                .title(dto.getTitle())
                .detail(dto.getTitle())
                .build();
    }

    public void remove(LikeAgenda likeAgenda) {
        this.getLikeAgendaList().remove(likeAgenda);
        likeAgenda.setAgenda(null);
    }
}

