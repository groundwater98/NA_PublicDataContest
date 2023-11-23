package com.example.server.dao;

import com.example.server.entity.Agenda;
import com.example.server.model.ResponseAgendaDTO;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BoardDAO {

    public Page<ResponseAgendaDTO> findByBoardPage(int page);
    public String insert(Agenda agenda);
    public Agenda findByBoardId(Long boardId);
}
