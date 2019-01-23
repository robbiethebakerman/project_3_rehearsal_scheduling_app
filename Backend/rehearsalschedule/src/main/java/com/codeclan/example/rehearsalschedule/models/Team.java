package com.codeclan.example.rehearsalschedule.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @OneToMany(mappedBy = "team")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private List<Member> members;

    @ManyToOne
    @JoinColumn(name="project_id", nullable=false)
    private Project project;

    public Team(String name, Project project){
        this.name = name;
        this.members = new ArrayList<>();
        this.project = project;
    }

    public Team(){}

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
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

    public List<Member> getMembers() {
        return members;
    }

    public void setMembers(List<Member> members) {
        this.members = members;
    }
}
