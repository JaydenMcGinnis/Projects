// Classes and their role
// Class declaration
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

/* 
function declaration as a constructor function
function User(name, surname){
  this.name = name,
  this.surname = surname,
}
*/

// Class expression
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

/* 
function expression as a constructor function
const Rectangle = function(name, surname) {
  this.name = name,
  this.surname = surname,
}
*/

// Named Class expression
const Rectangle = class Rectangle2 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
};

/**
Named function expression
const Rectangle = function RectangleConstructor(name, surname) {
  this.name = name;
  this.surname = surname;
};
 */
