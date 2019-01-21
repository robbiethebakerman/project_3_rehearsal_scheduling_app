package com.codeclan.example.rehearsalschedule.projections;

import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import com.codeclan.example.rehearsalschedule.models.Task;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name="embedForTask", types=Task.class)
public interface EmbedForTask {
    Long getId();
    Date getStartTime();
    Date getEndTime();
    String getName();
    List<Member> getMembers();
    Rehearsal getRehearsal();
}
