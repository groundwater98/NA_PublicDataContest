package com.example.server.entity;

import com.fasterxml.jackson.annotation.JacksonInject;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class LikeAgenda {

	@Id @GeneratedValue
	private Long id;

	@ManyToOne
	@JoinColumn(name = "agenda_id")
	private Agenda agenda;

	@JsonIgnore
	@Getter
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public static LikeAgenda from (Agenda agenda, User user) {
		return LikeAgenda.builder()
			.agenda(agenda)
			.user(user)
			.build();
	}

	public void changeAgenda(Agenda agenda) {
		this.agenda = agenda;
		agenda.getLikeAgendaList().add(this);
	}
}
