package com.example.server.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

    @Id @GeneratedValue
    private Long userId;
    @Enumerated(EnumType.STRING)
    @Column(name = "user_case")
    private UserCase userCase;
    @OneToMany(mappedBy = "user")
    private List<LikeAgenda> likeAgendaList = new ArrayList<>();
}

