package com.codeclan.example.rehearsalschedule.projections;

import com.codeclan.example.rehearsalschedule.RehearsalscheduleApplication;
import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.models.Project;
import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name="embedForProject", types = Project.class)
public interface EmbedForProject {
    Long getId();

    String getName();

    List<Member> getMembers();

    List<Rehearsal> getRehearsals();

    Date getStartDate();

    Date getEndDate();
}

