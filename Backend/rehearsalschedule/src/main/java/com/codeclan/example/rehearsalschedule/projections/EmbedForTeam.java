package projections;

import models.Member;
import models.Team;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedForTeams", types = Team.class)
public interface EmbedForTeam {
    Long getId();
    String getName();
    Member getMembers();
}
