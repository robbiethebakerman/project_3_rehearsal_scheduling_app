package com.codeclan.example.rehearsalschedule.repositories.rehearsalRepositories;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class RehearsalRepositoryImpl implements RehearsalRepositoryCustom{

    @Autowired
    EntityManager entityManager;
}
