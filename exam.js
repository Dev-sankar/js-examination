 //01
 let empty={ };
 console.log(empty)


//02
let person ={
    name:"sankar",
    age:20,
    introduceYou:function(){
        console.log("hello my name is" + " "+ this.name +" "+this.age)
    }
}

person.introduceYou()








//03

const CodingSchool = {
    greetStudent: function(student) {
      console.log(`Hello ${student.name}! Welcome to the Coding School`);
    }
  };
  
  // Example usage:
  
  
  CodingSchool.greetStudent({name:"sankar"})





//04

let name={
    name1:"sankar",
    name2:"nilax",
    name3:"piran",
}
console.log(name.name1)







//05




let per={
    name:'sankar',
    age:20,
}


per.email="@sankaroo";
console.log(per)





//6
 var lop={
    one:"book",
    two:"table",
    three:"flowers"
 }
console.log(lop)
delete lop ["two"]
console.log(lop)


//07


var p ={
    name:"hero",
    age:25,
    gander:"male",
    address:"jaffna"
}
//in operater
console.log("name"in p)
//has own property
console.log(p.hasOwnProperty("gander"))




//08

// spread operator


const student = {
    name: "sankar",
    age: 20,
    studentID: "Ukistu18"
  };
  const course = {
    courseName: "Math",
    courseCode: "js"
  };
  const Studentcourse = { ...student, ...course };
  //const studentcourse = Object.assign({}, student, course);
  console.log(Studentcourse);


    //9
  //How do you check if an object  has a specific property say address? If there an address , log(address is there) in console if not (‘address not found)
const person1 ={
    name: "sivasanger",
    age:20,
    city:"Jaffna"
  };
  if ("address" in person1) {
    console.log("Address is there:", person1.address);
  } else {
    console.log("Address not found");
  }
  









//10
//Create an object  book with properties fo title author and year and then convert it into a JSON string
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 2022
  };
  const jsonString = JSON.stringify(book);
  console.log(jsonString);






 
//11
//
const students = [
    {
      name: "rabada",
      age: 21,
      gpa: 1.1
    },
    {
      name: "ABD",
      age: 22,
      gpa: 2.0
    },
    {
      name: "ROHIT",
      age: 24,
      gpa: 3.0
    },
  ];
  console.log(students);
