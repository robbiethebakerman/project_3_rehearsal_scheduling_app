package com.codeclan.example.rehearsalschedule.projections;

import com.codeclan.example.rehearsalschedule.models.Project;
import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import com.codeclan.example.rehearsalschedule.models.Task;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name="embedForRehearsal", types=Rehearsal.class)
public interface EmbedForRehearsal {
    Long getId();
    String getName();
    Date getStartTime();
    Date getEndTime();
    List<Task> getTasks();
    Project getProject();
}
