package com.codeclan.example.rehearsalschedule.controllers;

import com.codeclan.example.rehearsalschedule.repositories.memberRepositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/members")
public class MemberController {

    @Autowired
    MemberRepository memberRepository;
}
