package com.codeclan.example.rehearsalschedule.repositories.taskRepositories;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class TaskRepositoryImpl implements TaskRepositoryCustom {

    @Autowired
    EntityManager entityManager;
}
