import { data } from "./data.js";
import { renderEmployeeCard } from "./component/employeeDiv.js";
// window.onload = ()=>{
// const rootDiv = document.getElementById("root");
// data.then((employees) =>{
//     employees.forEach((employee)=>{
//         rootDiv.appendChild(renderEmployeeCard(employees));
//     });
// })
// };
const rootDiv = document.getElementById("root");
data.then((employees) => {
  employees.forEach((employee) => {
    rootDiv.appendChild(renderEmployeeCard(employee));
    // console.log(employee);
  });
});
