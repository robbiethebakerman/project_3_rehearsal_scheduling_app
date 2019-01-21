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
    private Date startTime;

    @Column
    private Date endTime;

    @JsonIgnoreProperties("rehearsal")
    @OneToMany(mappedBy = "rehearsal")
    private List<Task> tasks;

    public Rehearsal(Date startTime, Date endTime){
        this.startTime = startTime;
        this.endTime = endTime;
        this.tasks = new ArrayList<>();
    }

    public Rehearsal(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public void addTasks(Task task){
        this.tasks.add(task);
    }
}
