package com.example.server.dao;

import com.example.server.entity.Agenda;
import com.example.server.entity.AgendaRecommend;
import com.example.server.model.ResponseAgendaDTO;
import com.example.server.model.ResponseBoardDTO;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BoardDAO {

    public Page<ResponseBoardDTO> findByBoardPage(int page);
    public String insert(Agenda agenda);
    public Agenda findByBoardId(Long boardId);
    public void recommendInsert(AgendaRecommend recommend);
}
