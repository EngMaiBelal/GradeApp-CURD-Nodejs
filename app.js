
const fs= require('fs')

const yargs= require('yargs')

const Students= require('./Students')
const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));

//////////////////////////////////////////////////////////////////////////

// Add Student

yargs.command({
    command:'add',
    describe:'add student',
    builder: {
        firstName:{
            describe: 'Name of Student added',
            demandOption:true, //must
            type:'string'
        },
        id:{
            describe: 'Id of Student added',
            demandOption:true,
            type:'number'
        },
        grade:{
            describe: 'Grade of Student added',
            demandOption:true,
            type:'number'
        },
        comment:{
            describe: 'comment of Student added',
            demandOption:false,
            type:'string'
        }
    },
    handler: function(argv){
        Students.addStudent(argv.firstName,argv.id,argv.grade,argv.comment)
       
    }
})

///////////////////////////////////////////////////////////

// Delete Student

yargs.command({
    command:'delete',
    describe:'delete student',
    builder:{
        id:{
            describe: 'Student deleted',
            demandOption:true,
            type: 'number'
        },
    },
    handler: function(argv){
       Students.removeStudent(argv.id)
    }
})

///////////////////////////////////////////////

// read Student

 yargs.command({
    command:'read',
    describe:'read Student',
    builder: {
        id:{
            describe: 'Student read',
            demandOption:true, //must
            type:'number'
        }
    },
    handler: function(argv){
        Students.readStudent(argv.id)
    }
})


///////////////////////////////////////////

// List Student

yargs.command({
    command:'list',
    describe:'list student',
    builder: {
        id:{
            describe: 'Id of student',
            demandOption: false, //must
            type:'number'
        }
    },
    handler: function(argv){
        Students.listStudent(argv.id)
    }
}) 

//to show yargs action in cmd
yargs.parse()











