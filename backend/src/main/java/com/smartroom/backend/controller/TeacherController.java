package com.smartroom.backend.controller;

import com.smartroom.backend.email.EmailSender;
import com.smartroom.backend.entity.Student;
import com.smartroom.backend.entity.StudentDetails;
import com.smartroom.backend.model.StudentModel;
import com.smartroom.backend.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/teacher")
@CrossOrigin
@PreAuthorize("hasRole('TEACHER')")
public class TeacherController {

    private final TeacherService teacherService;

    private final EmailSender emailSender;



    @Autowired
    TeacherController(TeacherService teacherService,EmailSender emailSender) {

        this.teacherService = teacherService;
        this.emailSender = emailSender;
    }


    @PostMapping("/create/student")
    public ResponseEntity<StudentModel> createStudent(@RequestBody @Valid Student student) throws Exception {
        System.out.println("student "+student);
        StudentModel createdStudent = teacherService.createStudent(student);
        return new ResponseEntity<>(createdStudent, HttpStatus.CREATED);
    }

    @PutMapping("/update/student/{studentId}")
    public ResponseEntity<Student> updateStudentData(@PathVariable("studentId") String studentId, @RequestBody StudentDetails studentDetails) throws Exception {
        System.out.println("student details:- " + studentDetails);
        Student updatedStudent = teacherService.updateStudent(studentId, studentDetails);
        return new ResponseEntity<>(updatedStudent, HttpStatus.CREATED);
    }


    @GetMapping("/predict/{studentId}/{subject}")
    public ResponseEntity<String> predictStudentResult(@PathVariable("studentId") String studentId, @PathVariable("subject") String subject) throws Exception {
        String predictedResult = teacherService.predictResult(studentId, subject);

        return new ResponseEntity<>(predictedResult, HttpStatus.OK);
    }

    @PostMapping("send/email/{studentMail}")
    public ResponseEntity<String> sendEmail(@RequestBody String message ,@PathVariable("studentMail") String studentMail){
        if(message.contains("Zoom")){
            emailSender.sendEmail(studentMail,message,"Online Class via Zoom");
        }
        else {emailSender.sendEmail(studentMail,message,"Attention Needed!!");
        }

        return new ResponseEntity<>("Mail Successfully Send" , HttpStatus.OK);
    }

    @DeleteMapping("/delete/{studentId}")
    public ResponseEntity<Void> deleteStudent(@PathVariable("studentId") String studentId){
        teacherService.deleteStudent(studentId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    }



