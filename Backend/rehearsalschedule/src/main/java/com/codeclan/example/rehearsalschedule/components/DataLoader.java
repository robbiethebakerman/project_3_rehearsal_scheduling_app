package com.codeclan.example.rehearsalschedule.components;


        import com.codeclan.example.rehearsalschedule.models.*;
        import com.codeclan.example.rehearsalschedule.repositories.TeamRepositories.TeamRepository;
        import com.codeclan.example.rehearsalschedule.repositories.memberRepositories.MemberRepository;
        import com.codeclan.example.rehearsalschedule.repositories.projectRepositories.ProjectRepository;
        import com.codeclan.example.rehearsalschedule.repositories.rehearsalRepositories.RehearsalRepository;
        import com.codeclan.example.rehearsalschedule.repositories.taskRepositories.TaskRepository;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.boot.ApplicationRunner;
        import org.springframework.stereotype.Component;

        import java.text.DateFormat;
        import java.text.SimpleDateFormat;
        import java.time.LocalDate;
        import java.time.LocalDateTime;
        import java.time.format.DateTimeFormatter;
        import java.util.Date;
        import java.util.Locale;

        import org.springframework.boot.ApplicationArguments;



@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    TaskRepository taskRepository;

    @Autowired
    RehearsalRepository rehearsalRepository;

    @Autowired
    TeamRepository teamRepository;

    public DataLoader(){}


    public void run(ApplicationArguments args){
// Below may be the the correct way as of Java 8 to create datetimes, as Date seems to be mostly deprecated
// and may cause issues. Unfortunately the below uses LocalDateTime type rather than Date.
// It may be necessary to change our date usages to the below way though, if it ends up not recording the
// date properly from forms

//        String str = "1986-04-08 12:30";
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
//        LocalDateTime dateTime = LocalDateTime.parse(str, formatter);

//        Note that the date can also be formatted back into a string as thus:

//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
//        LocalDateTime dateTime = LocalDateTime.of(1986, Month.APRIL, 8, 12, 30);
//        String formattedDateTime = dateTime.format(formatter); // "1986-04-08 12:30"

        Date date1 = new Date(2019, 1, 15, 12, 00);
        Date date2 = new Date(2019, 1, 15, 13, 00);
        Date date3 = new Date(2019, 1, 17, 11, 00);
        Date date4 = new Date(2019, 1, 17, 17, 30);
        Date date5 = new Date(2019, 1, 20, 12, 00);
        Date date6 = new Date(2019, 1, 20, 15, 00);
        Date date7 = new Date(2019, 1, 22, 10, 30);
        Date date8 =  new Date(2019, 1, 22, 16, 30);
        Date date9 =  new Date(2019, 2, 15, 12, 00);
        Date date10 = new Date(2019, 2, 15, 13, 00);
        Date date11 =  new Date(2019, 1, 17, 11, 30);
        Date date12 =  new Date(2019, 1, 17, 13, 30);
        Date date13 = new Date(2019, 1, 1, 11, 00);
        Date date14 = new Date(2019, 1, 28, 17, 30);

        Project project = new Project("Christmas Panto", date13, date14);
        projectRepository.save(project);

        Team team1 = new Team("Band", project);
        teamRepository.save(team1);

        Team team2 = new Team("Cast", project);
        teamRepository.save(team2);

        Team team3 = new Team("Lighting", project);
        teamRepository.save(team3);

        Member member1 = new Member("Mandy", "mandy@gmail.com", team1);
        memberRepository.save(member1);

        Member member2 = new Member("Steven", "steven@gmail.com", team2);
        memberRepository.save(member2);

        Member member3 = new Member("Michael", "michael@gmail.com", team3);
        memberRepository.save(member3);

        Member member4 = new Member("Robbie", "robbie@gmail.com", team1);
        memberRepository.save(member4);

        Member member5 = new Member("Alex", "alex@gmail.com", team2);
        memberRepository.save(member5);

        Rehearsal rehearsal1 = new Rehearsal("Initial line reading", date1, date2, project);
        rehearsalRepository.save(rehearsal1);

        Rehearsal rehearsal2 = new Rehearsal("Non-dress rehearsal", date3, date4, project);
        rehearsalRepository.save(rehearsal2);

        Rehearsal rehearsal3 = new Rehearsal("Dress Rehearsal", date5, date6, project);
        rehearsalRepository.save(rehearsal3);

        Rehearsal rehearsal4 = new Rehearsal("Final Dress Rehearsal", date7, date8, project);
        rehearsalRepository.save(rehearsal4);

        Task task1 = new Task(date9, date10, "Tuning Session", rehearsal1);
        taskRepository.save(task1);

        Task task2 = new Task(date11, date12, "All Hands Meeting", rehearsal2);
        taskRepository.save(task2);

        task1.addMembers(member1);
        task1.addMembers(member2);
        task1.addMembers(member3);
        taskRepository.save(task1);


    }



}