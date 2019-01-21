package com.codeclan.example.rehearsalschedule.repositories.TeamRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedForTeam.class)
public interface TeamRepository extends JpaRepository<Team, Long> TeamRepositoryCustom{
}
