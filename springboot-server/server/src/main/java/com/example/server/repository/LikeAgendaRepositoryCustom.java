package com.example.server.repository;

import java.util.List;

import com.example.server.entity.LikeAgenda;

public interface LikeAgendaRepositoryCustom {
	LikeAgenda findByAgendaIdAndUserId(Long agendaId, Long userId);
}
