const departments = [
    {
        name: "Education Department",
        icon: "🎓",
        description:
            "Education services, scholarships, examinations and institutional information.",
        services: 14,
        schemes: 8,
        link: "departments/education.html"
    },

    {
        name: "Health & Family Welfare",
        icon: "🏥",
        description:
            "Healthcare services, public health programs and medical information.",
        services: 12,
        schemes: 7,
        link: "departments/health.html"
    },

    {
        name: "Revenue Department",
        icon: "📜",
        description:
            "Land records, certificates, revenue services and citizen documentation.",
        services: 16,
        schemes: 5,
        link: "departments/revenue.html"
    },

    {
        name: "Agriculture Department",
        icon: "🌾",
        description:
            "Farmer services, agricultural schemes, subsidies and crop information.",
        services: 11,
        schemes: 9,
        link: "departments/agriculture.html"
    },

    {
        name: "Transport Department",
        icon: "🚗",
        description:
            "Driving licenses, vehicle registration and transport-related services.",
        services: 10,
        schemes: 3,
        link: "departments/transport.html"
    },

    {
        name: "Rural Development",
        icon: "🏡",
        description:
            "Rural development programs, employment schemes and local development.",
        services: 8,
        schemes: 6,
        link: "departments/rural-development.html"
    },

    {
        name: "Urban Development",
        icon: "🏙️",
        description:
            "Urban infrastructure, municipal services and city development programs.",
        services: 9,
        schemes: 4,
        link: "departments/urban-development.html"
    },

    {
        name: "Social Welfare",
        icon: "🤝",
        description:
            "Social assistance, welfare schemes and citizen support programs.",
        services: 13,
        schemes: 10,
        link: "departments/social-welfare.html"
    },

    {
        name: "Labour & Employment",
        icon: "👷",
        description:
            "Employment services, labour welfare and worker-related programs.",
        services: 7,
        schemes: 6,
        link: "departments/labour.html"
    }
];


function renderDepartments(list = departments) {

    const grid = document.getElementById("departmentGrid");

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div class="empty-state">
                <h3>No departments found</h3>
                <p>Try a different search term.</p>
            </div>
        `;

        return;
    }

    list.forEach(department => {

        const card = document.createElement("article");

        card.className = "department-card";

        card.innerHTML = `

            <div class="department-card-top">

                <div class="department-icon">
                    ${department.icon}
                </div>

                <span class="department-arrow">
                    →
                </span>

            </div>

            <h3>${department.name}</h3>

            <p>
                ${department.description}
            </p>

            <div class="department-meta">

                <span>
                    🛠 ${department.services} Services
                </span>

                <span>
                    📋 ${department.schemes} Schemes
                </span>

            </div>

            <a
                class="department-link"
                href="${department.link}"
            >
                Visit Department →
            </a>

        `;

        grid.appendChild(card);

    });
}


document.addEventListener("DOMContentLoaded", () => {

    renderDepartments();

});
