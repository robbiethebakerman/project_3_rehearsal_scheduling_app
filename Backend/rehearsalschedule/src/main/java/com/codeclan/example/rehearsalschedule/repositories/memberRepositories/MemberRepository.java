package com.codeclan.example.rehearsalschedule.repositories.memberRepositories;

import com.codeclan.example.rehearsalschedule.models.Member;
import com.codeclan.example.rehearsalschedule.projections.EmbedForMembers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedForMembers.class)
public interface MemberRepository extends JpaRepository<Member, Long>, MemberRepositoryCustom{
}
