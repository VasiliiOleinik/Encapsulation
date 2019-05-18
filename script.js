"use strict";

function User(name, age) {
  this.name = name;
  // this.age = age;
  let userAge = age;

  this.say = function() {
    console.log(`Имя пользователя ${this.name}, возраст: ${userAge}`);
  };

  // Геттеры и сеттеры = методы обьекта, которые позволяют получать
  //или изменять данные, чтобы не было возможности этого делать напрямую

  // геттер
  this.getAge = function() {
    return userAge;
  };
  // сеттер
  this.setAge = function(age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      userAge = age;
    } else {
      console.log("Недопустимое значение");
    }
  };
}

let john = new User("John", 25);

console.log(john.name);
console.log(john.userAge);
console.log(john.getAge());

john.setAge(30);
console.log(john.getAge());

john.say();
