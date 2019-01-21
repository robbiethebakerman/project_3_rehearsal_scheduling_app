package com.codeclan.example.rehearsalschedule.controllers;

import com.codeclan.example.rehearsalschedule.repositories.taskRepositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/tasks")
public class TaskController {

    @Autowired
    TaskRepository taskRepository;


}
