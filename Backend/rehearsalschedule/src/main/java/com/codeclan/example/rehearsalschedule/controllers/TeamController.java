package com.codeclan.example.rehearsalschedule.controllers;


import com.codeclan.example.rehearsalschedule.repositories.TeamRepositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/teams")
public class TeamController {

    @Autowired
    TeamRepository teamRepository;
}
