package com.codeclan.example.rehearsalschedule.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="rehearsals")
public class Rehearsal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private Date startTime;

    @Column
    private Date endTime;

    @JsonIgnoreProperties("rehearsal")
    @OneToMany(mappedBy = "rehearsal")
    private List<Task> tasks;

    @ManyToOne
    @JoinColumn(name="project_id", nullable=false)
    private Project project;

    public Rehearsal(String name, Date startTime, Date endTime, Project project){
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.tasks = new ArrayList<>();
        this.project = project;
    }

    public Rehearsal(){}

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

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public void addTasks(Task task){
        this.tasks.add(task);
    }
}
