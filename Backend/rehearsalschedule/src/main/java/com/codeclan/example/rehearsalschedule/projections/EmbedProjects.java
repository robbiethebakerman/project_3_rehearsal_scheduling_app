package projections;

import models.Member;
import models.Project;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name="embedProjects", types = Project.class)
public interface EmbedProjects {
    Long getId();
    String getName();
    List<Member> getMembers();
    List<Rehearsal> getRehearsals();
    Date getStartDate();
    Date getEndDate();
}
