
class Teacher extends Student{
    constructor(id,name,email,mobile_number,salary,subject){
        super(id,name,email,mobile_number);
        this.salary = salary;
        this.subject = subject;
    }
}


let teacher1 = new Teacher('96432','Sadi@orange.com','Sadi','0777788888','800', '[English, Arabic, Math, science]' );
console.log(teacher1);