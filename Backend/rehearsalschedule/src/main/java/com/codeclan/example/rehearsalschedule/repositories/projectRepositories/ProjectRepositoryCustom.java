package com.codeclan.example.rehearsalschedule.repositories.projectRepositories;

import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import com.codeclan.example.rehearsalschedule.models.Task;
import com.codeclan.example.rehearsalschedule.models.Team;

import java.util.List;

public interface ProjectRepositoryCustom {

    List<Rehearsal> allRehearsalsForProject(Long id);
    List<Team> allTeamsForProject(Long id);
    List<Task> allTasksForProject(Long id);
    List<Member> allMembersForProject(Long id);
}
