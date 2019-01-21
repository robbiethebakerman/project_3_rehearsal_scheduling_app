package models;

import com.codeclan.example.rehearsalschedule.models.Rehearsal;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="projects")
public class Project {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="name")
    private String name;
    @OneToMany(mappedBy = "project")
    private List<models.Member> members;
    @Column(name="rehearsals")
    private List <Rehearsal> rehearsals;
    @Column(name="start_date")
    private Date startDate;
    @Column(name="end_date")
    private Date endDate;

    public Project(String name, Date startDate, Date endDate){
        this.id = id;
        this.name = name;
        this.members = new ArrayList<>();
        this.rehearsals = new ArrayList<>();
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Project(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<models.Member> getMembers() {
        return members;
    }

    public void setMembers(List<models.Member> members) {
        this.members = members;
    }

    public List<Rehearsal> getRehearsals() {
        return rehearsals;
    }

    public void setRehearsals(List<Rehearsal> rehearsals) {
        this.rehearsals = rehearsals;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
