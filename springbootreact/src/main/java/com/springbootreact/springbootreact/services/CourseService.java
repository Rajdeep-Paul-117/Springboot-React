package com.springbootreact.springbootreact.services;

import java.util.List;
import java.util.Optional;

import com.springbootreact.springbootreact.entities.Course;

public interface CourseService {
    List<Course> getAllCourse();

    Optional<Course> getCourseById(long id);

    Course addCourse(Course course);

    Course updateCourse(long id, Course course);

    void deleteCourse(long id);
}
