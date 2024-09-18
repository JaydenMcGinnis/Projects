// Revealing module
const Formatter = (function () {
  // Private function/method
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  // returns an object of whatever you want to give access to
  return {
    makeUppercase: makeUppercase,
  };
})();
// The () invokes the function immediately (IIFE)

console.log(Formatter.makeUppercase("hello"));

// Object literal
const Format = {
  log: (message) => console.log(`[${Date.now()}] Logger: ${message}`),
};

Format.log("hello");
