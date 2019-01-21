package com.codeclan.example.rehearsalschedule.repositories.memberRepositories;

import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.models.Task;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class MemberRepositoryImpl implements MemberRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Member> allMembers(){
        List<Member> members = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Member.class);
            members = cr.list();
        } catch (HibernateException e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return members;
    }

    @Transactional
    public List<Task> getAllTasksForMember(Long id){
        List<Task> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Task.class);
            cr.createAlias("tasks", "task");
            cr.add(Restrictions.eq("member_id", id));
            results = cr.list();
        } catch (HibernateException e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return results;
    }

}
