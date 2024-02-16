import './Employee.css';

const Employee = ( props ) => {
    return (
        <div>
            <p>{props.role ? props.role : "No Role"}</p>
            <h4>First Name:{ props.firstName }</h4>
            <h4>Last Name:{ props.lastName }</h4>
            <h4>Age:{ props.age }</h4>
            <h4>Address:{ props.address }</h4>
            <br/>
        </div>
    );
}
export default Employee;
