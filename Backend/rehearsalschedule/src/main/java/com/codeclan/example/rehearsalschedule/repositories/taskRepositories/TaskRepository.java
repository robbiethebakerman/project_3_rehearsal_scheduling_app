package com.codeclan.example.rehearsalschedule.repositories.taskRepositories;

import com.codeclan.example.rehearsalschedule.models.Task;
import com.codeclan.example.rehearsalschedule.projections.EmbedForTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedForTask.class)
public interface TaskRepository extends JpaRepository<Task, Long>, TaskRepositoryCustom {
}
