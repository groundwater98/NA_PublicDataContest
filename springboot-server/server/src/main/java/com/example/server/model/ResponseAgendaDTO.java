package com.example.server.model;

import com.example.server.entity.Agenda;
import com.example.server.entity.CheckState;
import com.example.server.entity.LikeAgenda;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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
    private List<ResponseLikeAgendaDTO> recommend;
    private List<ResponseRecommendDTO> responseRecommendDTO;
    private CheckState state;

    public static ResponseAgendaDTO from(Agenda agenda) {
        return ResponseAgendaDTO.builder()
                .id(agenda.getId())
                .title(agenda.getTitle())
                .detail(agenda.getDetail())
                .createDate(agenda.getCreateDate())
                // 좋아요한 유저의 수를 recommend에 담아 return
                .recommend(agenda.getLikeAgendaList()
                    .stream()
                    .map(ResponseLikeAgendaDTO :: from)
                    .collect(Collectors.toList())
                )
                // AgendaRecommends를 DTO로
                .responseRecommendDTO(agenda.getAgendaRecommends()
                        .stream()
                        .map(ResponseRecommendDTO :: from)
                        .collect(Collectors.toList())
                )
                .state(agenda.getState())
                .build();
    }

}
