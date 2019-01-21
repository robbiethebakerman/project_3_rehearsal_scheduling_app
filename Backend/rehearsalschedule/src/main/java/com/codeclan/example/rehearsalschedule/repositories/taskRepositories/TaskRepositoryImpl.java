package com.codeclan.example.rehearsalschedule.repositories.taskRepositories;

import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.models.Task;
import org.hibernate.Criteria;
import org.hibernate.Hibernate;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class TaskRepositoryImpl implements TaskRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Task> allTasks(){
        List<Task> tasks = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Task.class);
            tasks = cr.list();
        } catch (HibernateException e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return tasks;
    }

    @Transactional
    public List<Member> getAllMembersForTask(Long id){
        List<Member> results = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Member.class);
            cr.createAlias("members", "member");
            cr.add(Restrictions.eq("task_id", id));
            results = cr.list();
        } catch (HibernateException e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return results;
    }
}
