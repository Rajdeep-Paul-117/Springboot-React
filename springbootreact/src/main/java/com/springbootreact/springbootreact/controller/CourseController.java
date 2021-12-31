package com.springbootreact.springbootreact.controller;

import java.util.List;
import java.util.Optional;

import com.springbootreact.springbootreact.entities.Course;
import com.springbootreact.springbootreact.services.CourseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/course")
    public List<Course> getAllCourse() {
        return courseService.getAllCourse();
    }

    @GetMapping("/course/{id}")
    public Optional<Course> getCourseById(@PathVariable("id") long id) {
        return courseService.getCourseById(id);
    }

    @PostMapping("/course")
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    @PutMapping("/course/{id}")
    public Course updateCourse(@PathVariable("id") long id, @RequestBody Course course) {
        return courseService.updateCourse(id, course);
    }

    @DeleteMapping("/course/{id}")
    public void deleteCourse(@PathVariable long id) {
        courseService.deleteCourse(id);
    }
}
