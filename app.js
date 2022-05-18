const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name:'managerName',
        message: 'Who is the manager of your team?'
    },

    {
        type: 'input',
        name:'managerId',
        message: 'What is the managers ID number?'
    },

    {
        type: 'input',
        name:'managerEmail',
        message: 'What is the managers email?'
    },

    {
        type: 'input',
        name:'managerOfficeNumber',
        message: 'What is the managers office number?'
    },
    {
        type: 'checkbox',
        name:'employeeRole',
        message: 'What is the role of this employee?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name:'engineerName',
        message: 'Who is the manager of your team?'
    },

    {
        type: 'input',
        name:'engineerId',
        message: 'What is the managers ID number?'
    },
    {
        type:'input',
        name: 'engineerEmail',
        message: 'What is the engineers email address?'
    },
    {
        type: 'input',
        name:'engineerGithub',
        message: 'What is the Engineers github username?'
    },
    {
        type: 'input',
        name:'internName',
        message: 'Who is the manager of your team?'
    },

    {
        type: 'input',
        name:'internId',
        message: 'What is the interns ID number?'
    },

    {
        type: 'input',
        name:'internEmail',
        message: 'What is the interns email address?'
    },

    {
        type: 'input',
        name:'internSchool',
        message: 'Where did the intern go to school?'
    },
];




