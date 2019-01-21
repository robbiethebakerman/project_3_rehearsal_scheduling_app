package com.codeclan.example.rehearsalschedule.repositories.TeamRepositories;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class TeamRepositoryImpl implements TeamRepositoryCustom{

    @Autowired
    EntityManager entityManager;
}
