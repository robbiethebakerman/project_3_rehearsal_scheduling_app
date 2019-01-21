package com.codeclan.example.rehearsalschedule.projections;


import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.models.Task;
import com.codeclan.example.rehearsalschedule.models.Team;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedForMembers", types = Member.class)
public interface EmbedForMembers {
    Long getId();
    String getName();
    Team getTeam();
    List<Task> getTasks();

}
