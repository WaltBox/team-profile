const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const pageTemplate = require('./src/pageTemplate');

const fs = require('fs');
const inquirer = require('inquirer');
const teamArr = [];
const engineerQuestion = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Who is the Engineer of your team?'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the managers ID number?'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineers email address?'
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the Engineers github username?'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Who is the Intern on your team?'
    },

    {
        type: 'input',
        name: 'internId',
        message: 'What is the interns ID number?'
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the interns email address?'
    },

    {
        type: 'input',
        name: 'internSchool',
        message: 'Where did the intern go to school?'
    }
]

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Who is the manager of your team?'
    },

    {
        type: 'input',
        name: 'managerId',
        message: 'What is the managers ID number?'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers email?'
    },

    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is the managers office number?'
    },



];

// Function write index.html

function generateTeamPage(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), pageTemplate(data))
}

function addMember (){
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'Would you like to add a new employee?',
            choices: ['Engineer', 'Intern', 'Build Team']
        }
    ])
    .then(answer => {
        switch (userResponses.employeeRole) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            default:
                buildTeam();

        }
    })
}

function createEngineer() {
    inquirer
        .prompt(engineerQuestion)
        .then(answer => {
            console.log(answer)
            const engineer = new Engineer(answer.engineerName,answer.engineerId,answer.engineerEmail,answer.engineerGithub)
            teamArr.push(engineer)
            addMember();
        })
}

function createIntern() {
    inquirer
        .prompt(internQuestions)
        .then(answer => {
            const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool)
            teamArr.push(intern)
            addMember();
        })
}

function buildTeam(){
            generateTeamPage('./dist/index.html', teamArr);

}

function addMember (){
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'Would you like to add a new employee?',
            choices: ['Engineer', 'Intern', 'Build Team']
        }
    ])
    .then(answer => {
        switch (answer.employeeRole) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            default:
                buildTeam();

        }
    })
}

function init() {
    inquirer
        .prompt(questions)
        .then(userResponses => {
            addMember();
           
           // console.log('...DONE BITCH');
        })
        .catch(err => console.error(err));
}


init();




