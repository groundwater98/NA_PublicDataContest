package com.example.server.dao;

import com.example.server.entity.LikeAgenda;
import com.example.server.model.RequestLikeDTO;

public interface LikeAgendaDAO {

	LikeAgenda findByAgendaIdAndUserId(RequestLikeDTO dto);
}
