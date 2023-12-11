package com.example.server.dao;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.server.entity.LikeAgenda;
import com.example.server.model.RequestLikeDTO;
import com.example.server.repository.LikeAgendaRepository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class LikeAgendaDAOImpl implements LikeAgendaDAO{

	private final LikeAgendaRepository repository;

	@Override
	public LikeAgenda findByAgendaIdAndUserId(RequestLikeDTO dto) {
		return (LikeAgenda)repository.findByAgendaIdAndUserId(dto.getBoardId(), dto.getUserId());
	}
}
