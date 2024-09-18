function sayHi(name) {
  return function yell(surname) {
    return name.toUpperCase() + " " + surname.toUpperCase();
  };
}

// Assigning speak to the return value of sayHi()
// It returns the function yell()
const speak = sayHi("jayden");

console.log(speak);

// Speak is like using yell() but has the local variable of name
console.log(speak("mcginnis"));
