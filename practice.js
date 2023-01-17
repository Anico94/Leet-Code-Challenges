// # Array to Object
// Convert the following string array into an object:
// ```js
// const state = ["fanOn: false", "computerOn: true", "lightsOn: false"];
// ```

// The output should look like this:
// ```js
// {
//   fanOn: false,
//   computerOn: true,
//   lightsOn: false
// }
// ```

const converArrayToObject = function (arrayOfStrings) {
  const object = {};

  // loop through the array
  for (let i = 0; i < arrayOfStrings.length; i++) {
    const string = arrayOfStrings[i].split(": ");

    var bool = true;

    if (string[1] === "false") {
      bool = false;
    }

    object[string[0]] = bool;
  }

  return object;
};

console.log(
  converArrayToObject(["fanOn: false", "computerOn: true", "lightsOn: false"])
);
