import './index.css';
import Employee from '../src/components/Employee.jsx';
import { useState } from "react";




function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App bg-blue-700">
    { showEmployees ? (
    <>
    <input
      type="text" className="align-center border-spacing-3 text-center"
      onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}
    />
      <h1 className="text-center font-extralight text-white underline">This Is The Employee Listing</h1>
      <Employee
        role={role}
        firstName="William"
        lastName="Castro"
        age={49}
        address="160 Woodward Street, suite 1"
      />
      <Employee
      role=""
      firstName="Benny"
      lastName="Blanko"
      age={33}
      address="188 West Fordham Road"
      />
      <Employee
        role="Administrator"
        firstName="David"
        lastName="Hillman"
        age={44}
        address="1909 Western Virginia Road South"
      />
      <Employee
        role="Developer"
        firstName="Marko"
        lastName="Swift"
        age={29}
        address="102 Lumbardo Road East"
      />
      </>
      ):(
      <h4>You Do Not Have Access To View The Employees</h4>
    )}
    </div>
  );
}
export default App;
