
// Freelancer array -- name, occupation, starting price
const freelancers = [
    {name: "Valeria", occupation: "Private Chef", price: 100},
    {name: "Poppy", occupation: "Celebrity Nanny", price: 80},
    {name: "Luca", occupation: "Fashion Designer", price: 250},
    {name: "Clark", occupation: "Artist", price: 90},
    {name: "Katie", occupation: "Musician", price: 90},
    {name: "John", occupation: "Teacher", price: 130},
    {name: "Sam", occupation: "Life Coach", price: 200},
    {name: "Matthew", occupation: "Personal Trainer", price: 300},
    {name: "Carson", occupation: "Painter", price: 500},
    {name: "Jules", occupation: "App Developer", price: 180},
]
// New listing appears every few seconds & average price is updated
// Add freelancer function
function addFreelancer(freelancers) {
        // selects the element we want to target to create new row with DOM
        const table = document.querySelector("table")
        // removes the first element in freelancers array and then returns the removed element
        const newFreelancers = freelancers.slice();
        const currentFreelancers = newFreelancers.pop();
        // creates a new listing in the table 
        const newListing = document.createElement("tr")
        newListing.innerHTML = `<td>${currentFreelancers.name}</td> <td>${currentFreelancers.occupation}</td> <td>${currentFreelancers.price}</td>`
        table.append(newListing);
        // Updates the average starting price when new listing is created
        totalAveragePrice();

}
// New listing appears every 3 seconds
const freelancerInterval = setInterval(() => addFreelancer(freelancers), 1000)

// TODO: message displays average starting price of all freelancers
function totalAveragePrice() {
    let total = 0;
    for (let i = 0; i < freelancers.length; i++){
        const currentFreelancer = freelancers[i];
        const totalPrice = parseInt(currentFreelancer.price.substring(2));
        total += totalPrice;
    }
    const average = total / freelancers.length;
    console.log("Average Price:", average)
}







