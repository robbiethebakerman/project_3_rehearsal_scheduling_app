package com.codeclan.example.rehearsalschedule.repositories.projectRepositories;

import com.codeclan.example.rehearsalschedule.models.*;
import com.codeclan.example.rehearsalschedule.projections.EmbedForProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedForProject.class)
public interface ProjectRepository extends JpaRepository<Project, Long>, ProjectRepositoryCustom{
    List<Rehearsal> allRehearsalsForProject(Long id);
    List<Team> allTeamsForProject(Long id);
    List<Task> allTasksForProject(Long id);
    List<Member> allMembersForProject(Long id);
}
