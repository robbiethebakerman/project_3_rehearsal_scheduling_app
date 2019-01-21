package projections;

import models.Member;
import models.Team;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedTeams", types = Team.class)
public interface EmbedTeams {
    Long getId();
    String getName();
    Member getMembers();
}
