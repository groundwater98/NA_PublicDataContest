package com.example.server.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

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

}
