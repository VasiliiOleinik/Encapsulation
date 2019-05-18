"use strict";

// function User(name, age) {
//   this.name = name;
//   // this.age = age;
//   let userAge = age;

//   this.say = function() {
//     console.log(`Имя пользователя ${this.name}, возраст: ${userAge}`);
//   };

//   // Геттеры и сеттеры = методы обьекта, которые позволяют получать
//   //или изменять данные, чтобы не было возможности этого делать напрямую

//   // геттер
//   this.getAge = function() {
//     return userAge;
//   };
//   // сеттер
//   this.setAge = function(age) {
//     if (typeof age === "number" && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log("Недопустимое значение");
//     }
//   };
// }

// let john = new User("John", 25);

// console.log(john.name);
// console.log(john.userAge);
// console.log(john.getAge());

// john.setAge(30);
// console.log(john.getAge());

// john.say();





////////////////// MODULE v1
let number = 1;

(function () {
    let number = 2;
    console.log(number);

    return console.log(number + 3);
}());

console.log(number);

////////// MODULE v2
let user = (function () {
    let privat = function () {
        console.log('i am privat');
    }

    return {
        sayHello: function () {
            console.log('Hello');
        }
    };
}());

console.log(user);
console.log(user.sayHello());


////////// MODULE v3
let user2 = (function () {
    let privat = function () {
        console.log('i am privat');
    }

    let sayHello = function () {
        console.log('Hello');
    }

    return {
        sayHello: sayHello
    };
}());

console.log(user2);
console.log(user2.sayHello());