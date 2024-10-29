export const getAllEmployees = () => { 
    return fetch(`http://localhost:8088/employees?_expand=user`).then((res) => res.json())
}

export const getEmployeeByUserId = (userId) => {
    return fetch(`http://localhost:8088/employees?userId=${userId}&_embed=employeeTickets&_expand=user`).then((res) => res.json())
    }

export const updateEmployee = (employee) => {
    return fetch(`http://localHost:8088/employees/${employee.id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(employee),
    })

}