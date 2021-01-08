// To Can Read or Write fileSync

const fs =require('fs')
const chalk = require('chalk');

//add Student Function 

/**
 * 1) load Students --> Prevent user from entering duplicate name
 */

const addStudent = (firstName,id,grade,comment)=>{
    
    const Students= loadStudents();
    // console.log(Students)
    const duplicateTitles = Students.filter(function(Students){
        // return Students.firstName === firstName
        return Students.id === id

    })

    // Filter true  --> length > 0
    // Filter false --> length = 0

    if(duplicateTitles.length === 0){
        Students.push({
            firstName,
            id,
            grade,
            comment
        })
    
        saveStudents(Students)

        console.log(chalk.green('Saved Successfully'))
        console.log(' Name is', chalk.blue(firstName))
        console.log(' Grade is',chalk.blue(grade))
        console.log(' comment is', chalk.blue(comment))
        
    }else{

        // console.log('Error Duplicate First name')
        
        console.log(chalk.red('Error Duplicate Id'))
    }
};

const loadStudents=()=>{

    // try , catch ----> Students.json not found ---> user still not write any thing

    try{
        const dataBuffer = fs.readFileSync('Students.json').toString()
    return JSON.parse(dataBuffer)
    } catch(e){
        return[]
    }
}


const saveStudents=(Students)=>{
    const saveData = JSON.stringify(Students)
    fs.writeFileSync('Students.json',saveData)
}

/////////////////////////////////////////////////////////////////////

// Remove Students

const removeStudent = (id)=>{
    const Students = loadStudents()
    const StudentsToKeep =Students.filter(function(Students){
        return Students.id !== id
    })

    if (Students.length > StudentsToKeep.length){
        console.log(chalk.green('Student remove success'))
        saveStudents(StudentsToKeep)
    }else{
        console.log(chalk.red('Student not remove'))
    }
}

//////////////////////////////////////////////////////
//Read Students

const readStudent = (id) => {
    const Students = loadStudents()
    const StudentsToRead =Students.filter(function(Students){
        return Students.id === id
    })
    if(StudentsToRead.length > 0){
        console.log(chalk.green('Student Read success'))
        saveStudents(Students)
    }else{
        console.log(chalk.red('Student not Read'))

    }
}

///////////////////////////////////////////////////////

// List Students
// const listStudent = (id) =>{
//     const Students = loadStudents()
//     const listToStudent = Students.filter( function(students) {
//         return students.id === id
        
//     });
//     if (listToStudent.length !== 0){
//         console.log('Student Name is '+ chalk.blue(Student.firstName )+ ' and Id is '+ chalk.yellow(Student.id))

//     }else{
//         console.log('')
//     }
// } 

const listStudent = () =>{
    const Students = loadStudents()
    Students.forEach( Student => {
        console.log('Student Name is '+ chalk.blue(Student.firstName )+ ' and Id is '+ chalk.yellow(Student.id))
        
    });
}



module.exports = {
    addStudent : addStudent,
    removeStudent : removeStudent,
    readStudent : readStudent,
    listStudent : listStudent
}
