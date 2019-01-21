package com.codeclan.example.rehearsalschedule.repositories.TeamRepositories;

import com.codeclan.example.rehearsalschedule.models.Team;
import com.codeclan.example.rehearsalschedule.projections.EmbedForTeam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedForTeam.class)
public interface TeamRepository extends JpaRepository<Team, Long>, TeamRepositoryCustom{
}
