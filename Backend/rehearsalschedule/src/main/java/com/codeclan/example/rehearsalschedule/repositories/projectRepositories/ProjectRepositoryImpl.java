package com.codeclan.example.rehearsalschedule.repositories.projectRepositories;

import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import com.codeclan.example.rehearsalschedule.models.Task;
import com.codeclan.example.rehearsalschedule.models.Team;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class ProjectRepositoryImpl implements ProjectRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Rehearsal> allRehearsalsForProject(Long id){
        List<Rehearsal> rehearsals = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Rehearsal.class);
            cr.createAlias("rehearsals", "rehearsal");
            cr.add(Restrictions.eq("project_id", id));
            rehearsals = cr.list();
        } catch (HibernateException e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return rehearsals;
    }

    @Transactional
    public List<Team> allTeamsForProject(Long id){
        List<Team> teams = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Team.class);
            cr.createAlias("teams", "team");
            cr.add(Restrictions.eq("project_id", id));
            teams = cr.list();
        } catch (HibernateException e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return teams;
    }

    @Transactional
    public List<Task> allTasksForProject(Long id){
        List<Task> tasks = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Task.class);
            cr.createAlias("rehearsal", "rehearsal");
            cr.createAlias("rehearsal.project", "project");
            cr.add(Restrictions.eq("project.id", id));
            tasks = cr.list();
        } catch (HibernateException e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return tasks;
    }

    @Transactional
    public List<Member> allMembersForProject(Long id){
        List<Member> members = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Member.class);
            cr.createAlias("team", "team");
            cr.createAlias("team.project", "project");
//            cr.createAlias("member.name", "name");
            cr.add(Restrictions.eq("project.id", id));
            members = cr.list();
        } catch (HibernateException e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return members;
    }
}
