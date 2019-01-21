package com.codeclan.example.rehearsalschedule.repositories.memberRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedForMember.class)
public interface MemberRepository extends JpaRepository<Member, Long>, MemberRepositoryCustom{
}
