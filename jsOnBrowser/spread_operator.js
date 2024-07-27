let top3 = [
    "Chicago", 
    "LA", 
    "New York"
];
//the three dots indidcate spread operator which will allow us to iterate
//through the array without typing them out individually
function showItinerary(place1, place2, place3) {
    console.log("The first city we will stop at is, " + place1);
    console.log("Next will be, " + place2);
    console.log("Then finally, " + place3 + " is the last stop.");
}
showItinerary(...top3);

//receive error /bin/sh: note: command not found