package com.example.server.model;

import com.example.server.entity.Agenda;
import com.example.server.entity.AgendaRecommend;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseRecommendDTO {

    private LocalDateTime createDate;
    private String detail;

    public static ResponseRecommendDTO from(AgendaRecommend recommend) {
        return ResponseRecommendDTO.builder()
                .createDate(recommend.getCreateDate())
                .detail(recommend.getDetail())
                .build();
    }
}
