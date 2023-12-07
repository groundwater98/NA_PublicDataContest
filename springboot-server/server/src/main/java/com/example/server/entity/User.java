package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
public class User {

    @Id @GeneratedValue
    private Long userId;
    private String userCase;
}

