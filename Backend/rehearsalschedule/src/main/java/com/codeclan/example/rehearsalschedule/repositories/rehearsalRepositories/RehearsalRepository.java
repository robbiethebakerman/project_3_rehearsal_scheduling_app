package com.codeclan.example.rehearsalschedule.repositories.rehearsalRepositories;

import com.codeclan.example.rehearsalschedule.controllers.RehearsalController;
import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import com.codeclan.example.rehearsalschedule.projections.EmbedForRehearsal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedForRehearsal.class)
public interface RehearsalRepository extends JpaRepository<Rehearsal, Long>, RehearsalRepositoryCustom {

}
