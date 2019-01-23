package com.codeclan.example.rehearsalschedule.controllers;

import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import com.codeclan.example.rehearsalschedule.models.Task;
import com.codeclan.example.rehearsalschedule.models.Team;
import com.codeclan.example.rehearsalschedule.repositories.projectRepositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/api")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;


    @GetMapping(value="/calendar/projects/{id}/rehearsals")
    public List<Rehearsal> allRehearsalsForProject(@PathVariable Long id){
        return projectRepository.allRehearsalsForProject(id);
    }

//    @GetMapping(value="/projects/{id}/teams")
//    public List<Team> allTeamsForProject(@PathVariable Long id){
//        return projectRepository.allTeamsForProject(id);
//    }

    @GetMapping(value="/projects/{id}/tasks")
    public List<Task> allTasksForProject(@PathVariable Long id){
        return projectRepository.allTasksForProject(id);
    }

    @GetMapping(value="/projects/{id}/members")
    public List<Member> allMembersForProject(@PathVariable Long id){
        return projectRepository.allMembersForProject(id);
    }
}
