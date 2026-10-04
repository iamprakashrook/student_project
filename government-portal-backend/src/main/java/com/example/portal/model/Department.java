package com.example.portal.model;

import jakarta.persistence.*;

@Entity
@Table(name = "departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String icon;

    private Integer services;

    private Integer schemes;

    private String link;

    private String contactEmail;

    private String phone;

    public Department() {}

    public Department(String name, String slug, String description, String icon,
                      Integer services, Integer schemes, String link,
                      String contactEmail, String phone) {
        this.name = name;
        this.slug = slug;
        this.description = description;
        this.icon = icon;
        this.services = services;
        this.schemes = schemes;
        this.link = link;
        this.contactEmail = contactEmail;
        this.phone = phone;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public Integer getServices() { return services; }
    public void setServices(Integer services) { this.services = services; }

    public Integer getSchemes() { return schemes; }
    public void setSchemes(Integer schemes) { this.schemes = schemes; }

    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }

    public String getContactEmail() { return contactEmail; }
    public void setContactEmail(String contactEmail) { this.contactEmail = contactEmail; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
}