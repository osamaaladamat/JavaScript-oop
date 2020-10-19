class Student {
    constructor(id,name,email,mobile_number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile_number = mobile_number;}
    }


let Student1 = new Student('123443','sara@orange.com','Sara','0777777777');
console.log(student1);
class Teacher extends Student{
    constructor(id,name,email,mobile_number,salary,subject){
        super(id,name,email,mobile_number);
        this.salary = salary;
        this.subject = subject;
    }
}


let teacher1 = new Teacher('96432','Sadi@orange.com','Sadi','0777788888','800', ['English', 'Arabic', 'Math', 'science'] );
