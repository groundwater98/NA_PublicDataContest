package com.example.server.model;

import com.example.server.entity.Agenda;
import com.example.server.entity.LikeAgenda;
import com.example.server.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseLikeAgendaDTO {

	private Long user;

	public static ResponseLikeAgendaDTO from(LikeAgenda likeAgenda) {
		return ResponseLikeAgendaDTO.builder()
			.user(likeAgenda.getUser().getUserId())
			.build();
	}
}
