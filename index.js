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
// TODO: new listing appears every few seconds & average price is updated
// Add freelancer function
function addFreelancer(freelancers) {
    if (freelancers.length){
        // selects the element we want to target to create new row with DOM
        const table = document.querySelector("table")
        // removes the first element in freelancers array and then returns the removed element
        const newFreelancers = freelancers.shift();
        // creates a new listing in the table 
        const newListing = document.createElement("tr")
        newListing.textContent = `${freelancers.name} ${freelancers.occupation} ${freelancers.price}`
    }

}

// New listing appears every 3 seconds
const freelancerInterval = setInterval(addFreelancer, 3000)




// TODO: message displays average starting price of all freelancers



