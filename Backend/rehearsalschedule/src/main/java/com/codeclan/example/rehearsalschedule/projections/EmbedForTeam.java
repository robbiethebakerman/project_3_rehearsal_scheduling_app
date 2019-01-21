package com.codeclan.example.rehearsalschedule.projections;

import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.models.Team;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedForTeams", types = Team.class)
public interface EmbedForTeam {
    Long getId();
    String getName();
    List<Member> getMembers();
}
