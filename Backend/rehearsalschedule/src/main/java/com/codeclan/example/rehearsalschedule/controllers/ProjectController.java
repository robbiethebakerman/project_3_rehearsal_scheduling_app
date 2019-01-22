package com.codeclan.example.rehearsalschedule.controllers;

import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import com.codeclan.example.rehearsalschedule.repositories.projectRepositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/projects")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;


    @GetMapping(value="/calendar/project/{id}/rehearsals")
    public List<Rehearsal> allRehearsalsForProject(@PathVariable Long id){
        return projectRepository.allRehearsalsForProject(id);
    }

}
