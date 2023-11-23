package com.example.server.repository;

import com.example.server.entity.Agenda;
import org.springframework.data.jpa.repository.JpaRepository;

// 게시판 관련 JPA 메소드를 정의
public interface BoardRepository extends JpaRepository<Agenda, Long>{
}
