package com.springbootreact.springbootreact.services;

import java.util.List;
import java.util.Optional;

import com.springbootreact.springbootreact.dao.CourseRepository;
import com.springbootreact.springbootreact.entities.Course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }

    @Override
    public Optional<Course> getCourseById(long id) {
        return courseRepository.findById(id);
    }

    @Override
    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course updateCourse(long id, Course course) {
        course.setId(id);
        return courseRepository.save(course);

    }

    @Override
    public void deleteCourse(long id) {
        courseRepository.deleteById(id);
    }

}
