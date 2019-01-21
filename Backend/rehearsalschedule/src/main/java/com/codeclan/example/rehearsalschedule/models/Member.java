package com.codeclan.example.rehearsalschedule.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="members")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;


    @ManyToOne
    @JoinColumn(name="team_id", nullable=false)
    private Team team;


    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name="members_tasks",
            joinColumns ={@JoinColumn(
                    name="member_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = {@JoinColumn(
                    name="task_id",
                    nullable = false,
                    updatable = false)}
    )
    private List<Task> tasks;


    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    public Member(String name, Team team){
        this.name = name;
        this.team = team;
        this.tasks = new ArrayList<>();
        this.project = project;
    }

    public Member(){

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

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
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

    public void addTask(Task task) {
        this.tasks.add(task);
    }
}
