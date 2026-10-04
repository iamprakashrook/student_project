package com.example.portal.service;

import com.example.portal.model.Department;
import com.example.portal.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {

    private final DepartmentRepository departmentRepository;

    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public Optional<Department> getDepartmentBySlug(String slug) {
        return departmentRepository.findBySlug(slug);
    }

    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }
}