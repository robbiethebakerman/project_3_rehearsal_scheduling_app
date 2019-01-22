package com.codeclan.example.rehearsalschedule.repositories.projectRepositories;

import com.codeclan.example.rehearsalschedule.models.Project;
import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import com.codeclan.example.rehearsalschedule.projections.EmbedForProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedForProject.class)
public interface ProjectRepository extends JpaRepository<Project, Long>, ProjectRepositoryCustom{
    List<Rehearsal> allRehearsalsForProject(Long id);
}
