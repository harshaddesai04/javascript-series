//primitive ->stack
//non-primitive->heap
//example of stack
let myinstaid ="harshad_desai_04"
let mynewid = myinstaid
mynewid = "harshad10"
console.log(myinstaid)
console.log(mynewid)

//example of heap
let myobj1 = {
    myemail:"harshaddesai0404@gmail.com",
    prn:10
    
}
let myobj2 = myobj1
myobj2.myemail = "harshad@10"
console.log(myobj1);
console.log(myobj2);