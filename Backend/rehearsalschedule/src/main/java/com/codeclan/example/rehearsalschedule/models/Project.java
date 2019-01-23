package com.codeclan.example.rehearsalschedule.models;

import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @JsonIgnoreProperties("project")
    @OneToMany(mappedBy = "project")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private List<Team> teams;

    @JsonIgnoreProperties("project")
    @OneToMany(mappedBy = "project")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
//    @JoinColumn(name="rehearsal_id", nullable=true)
    private List <Rehearsal> rehearsals;

    @Column(name="start_date")
    private Date startDate;

    @Column(name="end_date")
    private Date endDate;

    public Project(String name, Date startDate, Date endDate){
        this.name = name;
        this.teams = new ArrayList<>();
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

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
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
