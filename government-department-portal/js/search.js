function searchDepartments(value) {

    const searchValue = value
        .toLowerCase()
        .trim();

    const filtered = departments.filter(department => {

        return (
            department.name.toLowerCase().includes(searchValue) ||
            department.description.toLowerCase().includes(searchValue)
        );

    });

    renderDepartments(filtered);

}


document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("globalSearch");

    if (!input) return;

    input.addEventListener("input", event => {

        searchDepartments(event.target.value);

    });

});


function searchServices() {

    const input = document.getElementById("serviceSearch");

    if (!input) return;

    const value = input.value.trim();

    if (!value) {

        alert("Please enter a service name.");

        return;
    }

    document
        .getElementById("services")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}
