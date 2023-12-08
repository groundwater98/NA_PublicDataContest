package com.example.server.service;

import com.example.server.model.RequestAgendaDTO;
import com.example.server.model.RequestRecommendDTO;
import com.example.server.model.ResponseAgendaDTO;
import org.springframework.data.domain.Page;

public interface BoardService {

    Page<ResponseAgendaDTO> findByBoardPage(int page);
    String insert(RequestAgendaDTO dto);
    ResponseAgendaDTO findByBoardId(Long boardId);

    void recommendInsert(RequestRecommendDTO dto);

}
