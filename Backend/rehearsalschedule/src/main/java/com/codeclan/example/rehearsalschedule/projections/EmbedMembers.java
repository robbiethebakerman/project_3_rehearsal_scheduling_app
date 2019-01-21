package projections;


import models.Member;
import models.Team;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedMembers", types = Member.class)
public interface EmbedMembers {
    Long getId();
    String getName();
    Team getTeam();
    List<Task> getTasks();

}
