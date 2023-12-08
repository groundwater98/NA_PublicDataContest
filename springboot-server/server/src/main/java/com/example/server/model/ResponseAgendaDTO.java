package com.example.server.model;

import com.example.server.entity.Agenda;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseAgendaDTO {

    // 안건의 제목이 겹칠수도 있어 게시판 조회를 위해 id값도 DTO에 넣었음
    private Long id;
    private String title;
    private String detail;
    private LocalDateTime createDate;
    private Long recommend;

    public static ResponseAgendaDTO from(Agenda agenda) {
        return ResponseAgendaDTO.builder()
                .id(agenda.getId())
                .title(agenda.getTitle())
                .detail(agenda.getDetail())
                .createDate(agenda.getCreateDate())
                .recommend(agenda.getRecommend())
                .build();
    }

}
