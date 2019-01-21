package models;

import javafx.concurrent.Task;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="members")
public class Member {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name="team")
    private Team team;
    @ManyToOne
    @JoinColumn(name = "team_id", nullable = false)
    private List<Task> tasks;
    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private List<Project> projects;

    public Member(String name, Team team){
        this.id = id;
        this.name = name;
        this.team = team;
        this.tasks = new ArrayList<>();
        this.projects = new ArrayList<>();
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
}
