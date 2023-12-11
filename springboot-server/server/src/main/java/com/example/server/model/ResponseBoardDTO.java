package com.example.server.model;

import com.example.server.entity.Agenda;
import com.example.server.entity.CheckState;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseBoardDTO {

    private Long id;
    private String title;
    private String detail;
    private LocalDateTime createDate;
    private Long recommend;
    private CheckState state;

    public static ResponseBoardDTO from(Agenda agenda) {
        return ResponseBoardDTO.builder()
                .id(agenda.getId())
                .title(agenda.getTitle())
                .detail(agenda.getDetail())
                .createDate(agenda.getCreateDate())
                .recommend((long)agenda.getLikeAgendaList().size())
                .state(agenda.getState())
                .build();
    }

}
