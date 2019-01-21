package com.codeclan.example.rehearsalschedule.repositories.projectRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedForProject.class)
public interface ProjectRepository extends JpaRepository<Project, Long> ProjectRepositoryCustom{
}
