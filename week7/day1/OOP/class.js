class Human {
    constructor(name, age){
        // Attributes
        this.name = name
        this.age = age
    }
    // methods
    sayHi(){
        console.log(`Hi my name is ${this.name}`);
    }
    birthday(){
        this.age = this.age+1
        console.log(`Happy Birthday ${this.name} You turned ${this.age} today`);
    }
}

class Student extends Human{
    constructor(name, age, currentStack){
        super(name, age)
        this.currentStack = currentStack
    }
    printStack(){
        console.log(`${this.name} is currently taking ${this.currentStack}`);
    }
}
const caden = new Human('Caden', 25)
const christina = new Human('Christina', 23)
const ryan = new Student('Ryan', 24, 'MERN')
ryan.printStack()
ryan.birthday()
// caden.birthday()


// console.log(christina);
// console.log(caden.age);