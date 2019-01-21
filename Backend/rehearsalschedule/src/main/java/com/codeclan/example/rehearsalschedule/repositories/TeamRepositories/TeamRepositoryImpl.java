package com.codeclan.example.rehearsalschedule.repositories.TeamRepositories;

import com.codeclan.example.rehearsalschedule.models.Team;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class TeamRepositoryImpl implements TeamRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Team> allTeams(){
        List<Team> teams = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Team.class);
            teams = cr.list();
        } catch (HibernateException e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return teams;
    }
}
