export class Customer {

    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
    public getAge(){
        console.log(this.age);
    }
}

let customer = new Customer('John', 'Smith', 21);

customer.greeter();
customer.getAge();