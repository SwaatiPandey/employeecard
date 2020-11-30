export const renderEmployeeCard = (employee) => {
  let employeeCard = document.createElement("div");
  employeeCard.innerHTML = `
   <div class ="employee-image">
         <img src="${employee.imageUrl}" alt=""/>
   </div>
  <p id = "emp${employee.id}">${employee.firstName} ${employee.lastName}</p>
  <p> ${employee.company}</p>
`;
  employeeCard.className = "employee-card";
  //   console.log(employeeCard);

  return employeeCard;
};

// employeeCard.innerHTML = `
// <div class="employee-image">
// <img src="${employee.imageUrl}" alt="" />
// <!-- Or background img to employee image div -->
// </div>
// <p id="emp${employee.id}">${employee.firstName} ${employee.lastName}</p>
// <p>${employee.company}</p>
// `;
