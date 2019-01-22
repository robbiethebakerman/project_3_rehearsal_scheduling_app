package com.codeclan.example.rehearsalschedule.repositories.projectRepositories;

import com.codeclan.example.rehearsalschedule.models.Rehearsal;
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

}
