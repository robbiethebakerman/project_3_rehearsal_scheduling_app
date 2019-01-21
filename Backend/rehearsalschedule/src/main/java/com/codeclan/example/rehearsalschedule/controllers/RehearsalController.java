package com.codeclan.example.rehearsalschedule.controllers;

import com.codeclan.example.rehearsalschedule.repositories.rehearsalRepositories.RehearsalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/rehearsals")
public class RehearsalController {

    @Autowired
    RehearsalRepository rehearsalRepository;

}
