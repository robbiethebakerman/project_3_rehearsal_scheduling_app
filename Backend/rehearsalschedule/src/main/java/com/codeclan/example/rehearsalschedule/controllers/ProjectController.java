package com.codeclan.example.rehearsalschedule.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/projects")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;

}
