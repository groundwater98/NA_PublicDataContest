package com.example.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.server.entity.LikeAgenda;

public interface LikeAgendaRepository extends JpaRepository<LikeAgenda, Long>, LikeAgendaRepositoryCustom {
}
