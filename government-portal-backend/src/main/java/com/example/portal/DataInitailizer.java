package com.example.portal;

import com.example.portal.model.Department;
import com.example.portal.repository.DepartmentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final DepartmentRepository departmentRepository;

    public DataInitializer(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    public void run(String... args) {
        if (departmentRepository.count() == 0) {
            departmentRepository.save(new Department(
                    "Education Department",
                    "education",
                    "Education services, scholarships, examinations and institutional information.",
                    "🎓",
                    14,
                    8,
                    "departments/education.html",
                    "education@gov.in",
                    "1800-123-456"
            ));

            departmentRepository.save(new Department(
                    "Health & Family Welfare",
                    "health",
                    "Healthcare services, public health programs and medical information.",
                    "🏥",
                    12,
                    7,
                    "departments/health.html",
                    "health@gov.in",
                    "1800-234-567"
            ));

            departmentRepository.save(new Department(
                    "Revenue Department",
                    "revenue",
                    "Land records, certificates, revenue services and citizen documentation.",
                    "📜",
                    16,
                    5,
                    "departments/revenue.html",
                    "revenue@gov.in",
                    "1800-345-678"
            ));

            departmentRepository.save(new Department(
                    "Agriculture Department",
                    "agriculture",
                    "Farmer services, agricultural schemes, subsidies and crop information.",
                    "🌾",
                    11,
                    9,
                    "departments/agriculture.html",
                    "agriculture@gov.in",
                    "1800-456-789"
            ));

            departmentRepository.save(new Department(
                    "Transport Department",
                    "transport",
                    "Driving licenses, vehicle registration and transport-related services.",
                    "🚗",
                    10,
                    3,
                    "departments/transport.html",
                    "transport@gov.in",
                    "1800-567-890"
            ));

            departmentRepository.save(new Department(
                    "Rural Development",
                    "rural-development",
                    "Rural development programs, employment schemes and local development.",
                    "🏡",
                    8,
                    6,
                    "departments/rural-development.html",
                    "ruraldevelopment@gov.in",
                    "1800-678-901"
            ));

            departmentRepository.save(new Department(
                    "Urban Development",
                    "urban-development",
                    "Urban infrastructure, municipal services and city development programs.",
                    "🏙️",
                    9,
                    4,
                    "departments/urban-development.html",
                    "urbandevelopment@gov.in",
                    "1800-789-012"
            ));

            departmentRepository.save(new Department(
                    "Social Welfare",
                    "social-welfare",
                    "Social assistance, welfare schemes and citizen support programs.",
                    "🤝",
                    13,
                    10,
                    "departments/social-welfare.html",
                    "socialwelfare@gov.in",
                    "1800-890-123"
            ));

            departmentRepository.save(new Department(
                    "Labour & Employment",
                    "labour",
                    "Employment services, labour welfare and worker-related programs.",
                    "👷",
                    7,
                    6,
                    "departments/labour.html",
                    "labour@gov.in",
                    "1800-901-234"
            ));
        }
    }
}