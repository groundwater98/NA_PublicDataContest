package com.example.server.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import com.example.server.model.RequestRecommendDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class AgendaRecommend {

	@Id @GeneratedValue
	private Long agendaRecommendId;
	@CreationTimestamp
	private LocalDateTime createDate;
	private String detail;
	@ManyToOne
	@JoinColumn(name = "agenda_id")
	private Agenda agenda;

	// 연관관계 편의 메소드
	public void changeAgenda(Agenda agenda) {
		this.agenda = agenda;
		agenda.getAgendaRecommends().add(this);
	}

	public static AgendaRecommend from(RequestRecommendDTO dto) {
		return AgendaRecommend.builder()
			.detail(dto.getDetail())
			.build();
	}



}
