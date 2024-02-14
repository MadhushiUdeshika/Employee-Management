import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {
    
    const[employees, setEmployees] = useState ([
        {id:uuidv4(), name:"John Doe", email:"john.doe@example.com", address:"123 Main St, Anytown, USA", phone:"(123) 456-7890"},
        {id:uuidv4(), name:"Jane Smith", email:"jane.smith@example.com", address:"456 Elm St, Anycity, USA", phone:"(234) 567-8901"},
        {id:uuidv4(), name:"David Johnson", email:"david.johnson@example.com", address:"789 Oak St, Anyvillage, USA", phone:"(345) 678-9012"},
        {id:uuidv4(), name:"Emily Brown", email:"emily.brown@example.com", address:"101 Maple St, Anyhamlet, USA", phone:"(456) 789-0123"},
        {id:uuidv4(), name:"Michael Wilson", email:"michael.wilson@example.com", address:"202 Pine St, Anyborough, USA", phone:"(567) 890-1234"},
        {id:uuidv4(), name:"Sarah Taylor", email:"sarah.taylor@example.com", address:"303 Birch St, Anycity, USA", phone:"(678) 901-2345"},
        {id:uuidv4(), name:"Christopher Martinez", email:"christopher.martinez@example.com", address:"404 Cedar St, Anytown, USA", phone:"(789) 012-3456"},
        {id:uuidv4(), name:"Amanda Anderson", email:"amanda.anderson@example.com", address:"505 Spruce St, Anyvillage, USA", phone:"(890) 123-4567"},
        {id:uuidv4(), name:"James Jones", email:"james.jones@example.com", address:"606 Willow St, Anyhamlet, USA", phone:"(901) 234-5678"},
        {id:uuidv4(), name:"Jennifer Garcia", email:"jennifer.garcia@example.com", address:"707 Fir St, Anyborough, USA", phone:"(012) 345-6789"},
        {id:uuidv4(), name:"Matthew Rodriguez", email:"matthew.rodriguez@example.com", address:"808 Birch St, Anycity, USA", phone:"(123) 456-7890"},
        {id:uuidv4(), name:"Jessica Martinez", email:"jessica.martinez@example.com", address:"909 Cedar St, Anytown, USA", phone:"(234) 567-8901"},
        {id:uuidv4(), name:"Daniel Wilson", email:"daniel.wilson@example.com", address:"1010 Maple St, Anyvillage, USA", phone:"(345) 678-9012"},
        {id:uuidv4(), name:"Ashley Johnson", email:"ashley.johnson@example.com", address:"1111 Oak St, Anyhamlet, USA", phone:"(456) 789-0123"},
        {id:uuidv4(), name:"Christopher Brown", email:"christopher.brown@example.com", address:"1212 Pine St, Anyborough, USA", phone:"(567) 890-1234"},
        {id:uuidv4(), name:"Taylor Davis", email:"taylor.davis@example.com", address:"1313 Birch St, Anycity, USA", phone:"(678) 901-2345"},
        {id:uuidv4(), name:"Emily Miller", email:"emily.miller@example.com", address:"1414 Cedar St, Anytown, USA", phone:"(789) 012-3456"},
        {id:uuidv4(), name:"Matthew Wilson", email:"matthew.wilson@example.com", address:"1515 Spruce St, Anyvillage, USA", phone:"(890) 123-4567"},
        {id:uuidv4(), name:"Lauren Taylor", email:"lauren.taylor@example.com", address:"1616 Willow St, Anyhamlet, USA", phone:"(901) 234-5678"},
        {id:uuidv4(), name:"Jacob White", email:"jacob.white@example.com", address:"1717 Fir St, Anyborough, USA", phone:"(012) 345-6789"},
        ]
    )

    useEffect(() => {
        setEmployees(JSON.parse(localStorage.getItem('employees')))
    },[])

    useEffect(() => {
        localStorage.setItem('employees',JSON.stringify(employees));
    })
    
    const sortedEmployees = employees.sort((a,b) => (a.name < b.name ? -1: 1));

    const addEmployee = (name, email, address, phone) => {
        setEmployees(...employees,{id:uuidv4(), name, email, address, phone})
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee: employee))
    }

    return (
        <EmployeeContext.Provider value = {{employees, addEmployee, deleteEmployee, updateEmployee, sortedEmployees}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;