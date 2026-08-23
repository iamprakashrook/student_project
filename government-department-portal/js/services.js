const services = [
    {
        name: "Income Certificate",
        department: "Revenue Department"
    },
    {
        name: "Residence Certificate",
        department: "Revenue Department"
    },
    {
        name: "Scholarship Application",
        department: "Education Department"
    },
    {
        name: "Farmer Registration",
        department: "Agriculture Department"
    },
    {
        name: "Driving License",
        department: "Transport Department"
    },
    {
        name: "Vehicle Registration",
        department: "Transport Department"
    },
    {
        name: "Health Scheme",
        department: "Health Department"
    }
];


function findService(query) {

    const value = query.toLowerCase().trim();

    return services.filter(service =>

        service.name
            .toLowerCase()
            .includes(value) ||

        service.department
            .toLowerCase()
            .includes(value)

    );

}
