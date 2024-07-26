//an error thrown can only be caught (catch) if it is part of a try block.

try {
    throw new ReferenceError();
} catch(err) {
    console.log(err);
    console.log("There was an error")
}
console.group("My program does not stop")