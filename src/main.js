import { data } from "./data.js";
import { renderEmployeeCard } from "./component/employeeDiv.js";

const rootDiv = document.getElementById("root");
data.then((employees) => {
  employees.forEach((employee) => {
    rootDiv.appendChild(renderEmployeeCard(employee));
  });
});
