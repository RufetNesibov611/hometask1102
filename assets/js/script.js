"use strict";


let stu1 ={
    id : 1,
    fullName : "Rufet Nesibov",
    age : 21,
    address :"Nerimanov"
}

let stu2 ={
    id : 2,
    fullName : "Nurlan Musayev",
    age : 21,
    address :"Nerimanov"
}

let stu3 ={
    id : 3,
    fullName : "Shamil Ferruxov",
    age : 22,
    address :"Qazax"
}

let stu4 ={
    id : 4,
    fullName : "Nurlan Eliyev",
    age : 21,
    address :"Ehmedli"
}

let stu5 ={
    id : 5,
    fullName : "Ramin Mahmudov",
    age : 22,
    address :"Genclik"
}


let group ={
    name : "class",
    capacity : 3,
    students :[],
    addStudent: function(stu){
        if(stu == undefined){
          alert("Input can't be empty")
          return;

        }
        if(this.students.length >= this.capacity){
            alert("Group already filled")
            return;
        }
        this.students.push(stu);
    },
    getAllStudents:function(){
        return this.students;
    },

    deleteStudent: function(id){
        return this.students = this.students.filter(student=> student.id!==id)
    }
}

group.addStudent(stu1)
group.addStudent(stu2)
group.addStudent(stu3)
console.log(group.deleteStudent(2));

//  let result = group.getAllStudents();
//  console.log(result);























