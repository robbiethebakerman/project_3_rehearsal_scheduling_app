package com.codeclan.example.rehearsalschedule.projections;

import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.models.Team;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedForTeams", types = Team.class)
public interface EmbedForTeam {
    Long getId();
    String getName();
    Member getMembers();
}
