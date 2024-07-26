//catches the error, displays it to the log; but the program continues to run.

try {
    console.log(a + b);
} catch(err) {
    console.log(err)
    console.log("There was an error")
    console.log("The error was saved in the error log")
}
console.log("My program does not stop")
