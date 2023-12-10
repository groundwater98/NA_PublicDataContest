package com.example.server.service;

import com.example.server.dao.BoardDAO;
import com.example.server.entity.Agenda;
import com.example.server.entity.AgendaRecommend;
import com.example.server.model.RequestAgendaDTO;
import com.example.server.model.RequestRecommendDTO;
import com.example.server.model.ResponseAgendaDTO;
import com.example.server.model.ResponseBoardDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    private final BoardDAO dao;

    // 비동기 통신으로 전달받을 page 번호를 바탕으로 ResponseAgendaDTO list를 반환
    @Override
    public Page<ResponseBoardDTO> findByBoardPage(int page) {
        return dao.findByBoardPage(page);
    }

    // 작성이 완료된 안건을 DB에 저장
    @Override
    public String insert(RequestAgendaDTO dto) {
        return dao.insert(Agenda.from(dto));
    }

    // 비동기 통신으로 전달받을 boardId 번호를 바탕으로 ResponseAgendaDTO 반환
    @Override
    public ResponseAgendaDTO findByBoardId(Long boardId) {
        return ResponseAgendaDTO.from(dao.findByBoardId(boardId));
    }

    @Override
    public void recommendInsert(RequestRecommendDTO dto) {
        Agenda byBoardId = dao.findByBoardId(dto.getId());
        AgendaRecommend from = AgendaRecommend.from(dto);
        from.changeAgenda(byBoardId);
    }
}
