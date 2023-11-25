package com.example.server.entity;

import jakarta.persistence.*;
import org.hibernate.usertype.UserType;

@Entity
public class User {

    @Id @GeneratedValue
    private Long userId;
    @Enumerated(EnumType.ORDINAL)
    private UserPermissions userCase;

}

enum UserPermissions {
    USer, Admin
}
