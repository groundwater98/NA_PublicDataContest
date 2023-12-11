package com.example.server.repository;

import java.util.List;

import com.example.server.entity.LikeAgenda;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

public class LikeAgendaRepositoryImpl implements LikeAgendaRepositoryCustom{

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public LikeAgenda findByAgendaIdAndUserId(Long agendaId, Long userId) {
		List<LikeAgenda> result = entityManager.createQuery(
				"SELECT la FROM LikeAgenda la " +
					"WHERE la.agenda.id = :agendaId AND la.user.id = :userId", LikeAgenda.class)
			.setParameter("agendaId", agendaId)
			.setParameter("userId", userId)
			.getResultList();

		if (!result.isEmpty()) {
			return result.get(0); // 첫 번째 결과 반환
		} else {
			return null; // 또는 다른 처리를 수행
		}
	}
}
