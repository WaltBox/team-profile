const generateManager = function (manager) {
  return `
  <div class= "row">
  <div class ="col s12 m6">
  <div class ="card blue-grey darken-1">
  <div class ="card-content white-text"> 
  <span class ="card-title"> Manager: ${manager.name} </span>
  <p> ID number: ${manager.id} </p>
  <p> Office Number: ${manager.officeNumber} 
  </div>
  <div class = "card-action">
  <a href="mailto:${manager.email}">${manager.email}</a>
   </div>
   </div>
   </div>
   </div>
  `
}

const generateEngineer = function (engineer) {
 return `
 <div class= "row">
  <div class ="col s12 m6">
  <div class ="card blue-grey darken-1">
  <div class ="card-content white-text"> 
  <span class ="card-title"> Engineer: ${engineer.name} </span>
  <p> ID: ${engineer.id} </p>
  </div>
  <div class = "card-action">
  <a href="mailto:${engineer.email}">${engineer.email}</a>
   <a href ="${engineer.github}"> Github</a>
   </div>
   </div>
   </div>
   </div>
 `
}

const generateIntern = function (intern) {
 return `
 <div class= "row">
  <div class ="col s12 m6">
  <div class ="card blue-grey darken-1">
  <div class ="card-content white-text"> 
  <span class ="card-title"> Engineer: ${intern.name} </span>
  <p> ID: ${intern.id} </p>
  <p> School:${intern.school}
  </div>
  <div class = "card-action">
   <a href="mailto:${intern.email}">${intern.email}</a>
  
   </div>
   </div>
   </div>
   </div>
   `
}

const generateHTML = (data) => {
  pageArray = [];

for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

  if (role === 'Manager') {
    const managerCard = generateManager(employee);
    pageArray.push(managerCard);
  }
  if (role === 'Engineer') {
    const engineerCard = generateEngineer(employee);
    pageArray.push(engineerCard);
  }
  if (role === 'Intern') {
    const internCard = generateIntern(employee);
    pageArray.push(internCard);
  }
}

const employeeCards = pageArray.join('')

const generateTeam= generateTeamPage(employeeCards);
return generateTeam;
}
const generateTeamPage = function(employeeCards) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <nav>
    <div class="nav-wrapper">
    <a href="#" class="brand-logo center"> Our team </a>
    </div>
    </nav>
    <div class ="container">
    ${employeeCards}
    </div>

</body>
</html>

`;
}

module.exports = generateHTML;


