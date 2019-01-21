package models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="teams")
public class Team {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="name")
    private String name;
    @OneToMany(mappedBy = "team")
    private List<Member> members;

    public Team(String name{
        this.id = id;
        this.name = name;
        this.members = new ArrayList<>();
    })

    public Team(){

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
