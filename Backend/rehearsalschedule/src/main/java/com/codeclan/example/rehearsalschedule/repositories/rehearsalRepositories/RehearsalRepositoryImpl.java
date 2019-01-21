package com.codeclan.example.rehearsalschedule.repositories.rehearsalRepositories;

import com.codeclan.example.rehearsalschedule.models.Rehearsal;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class RehearsalRepositoryImpl implements RehearsalRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Rehearsal> allRehearsals(){
        List<Rehearsal> rehearsals = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Rehearsal.class);
            rehearsals = cr.list();
        } catch (HibernateException e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return rehearsals;
    }

}
