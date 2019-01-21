package com.codeclan.example.rehearsalschedule.repositories.memberRepositories;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class MemberRepositoryImpl implements MemberRepositoryCustom{

    @Autowired
    EntityManager entityManager;
}
