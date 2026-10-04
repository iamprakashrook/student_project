package com.example.portal.controller;

import com.example.portal.model.Department;
import com.example.portal.service.DepartmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DepartmentController {

    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @GetMapping("/departments")
    public List<Department> getAllDepartments() {
        return departmentService.getAllDepartments();
    }

    @GetMapping("/departments/{slug}")
    public ResponseEntity<Department> getDepartmentBySlug(@PathVariable String slug) {
        Optional<Department> department = departmentService.getDepartmentBySlug(slug);
        return department.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/departments")
    public Department createDepartment(@RequestBody Department department) {
        return departmentService.createDepartment(department);
    }
}