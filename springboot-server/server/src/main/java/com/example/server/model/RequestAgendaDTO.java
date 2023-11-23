package com.example.server.model;

import com.example.server.entity.Agenda;
import lombok.*;

@Builder
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class RequestAgendaDTO {

    // 요청받을 안건 데이터는 title과 detail만
    private String title;
    private String detail;


}
