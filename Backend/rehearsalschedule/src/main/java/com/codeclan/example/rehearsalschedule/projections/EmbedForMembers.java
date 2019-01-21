package projections;


import com.codeclan.example.rehearsalschedule.models.Task;
import models.Member;
import models.Team;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedForMembers", types = Member.class)
public interface EmbedForMembers {
    Long getId();
    String getName();
    Team getTeam();
    List<Task> getTasks();

}
