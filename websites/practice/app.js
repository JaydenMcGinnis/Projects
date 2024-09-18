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

console.log(sayHi("J")("M"));

/**
 * Closures are the ability of a child function,
 * or an inner function, to access variables from
 * a higher level scope even after the functions
 * have been called or closed or closed over.
 */
