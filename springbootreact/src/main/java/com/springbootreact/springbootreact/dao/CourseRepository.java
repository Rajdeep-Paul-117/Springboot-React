package com.springbootreact.springbootreact.dao;

import com.springbootreact.springbootreact.entities.Course;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
