"use strict"

function renderCoffee(coffee) {
    var container = document.createElement("div");

    var child1 = document.createElement("div");
    child1.innerText = coffee.id;
    container.appendChild(child1)

    var child2 = document.createElement("div");
    child2.innerText = coffee.name;
    container.appendChild(child2)

    var child3 = document.createElement("div");
    child3.innerText = coffee.roast;
    container.appendChild(child3);

    return container;

    // var html = class = "coffee";
    // html +=
    // html +=  coffee.name;
    // html +=  coffee.roast;
    //
    // return html;

}

function renderCoffees(coffees) {
    var list = [];
    for(var i = coffees.length - 1; i >= 0; i--) {
        list.push(renderCoffee(coffees[i]));
    }
    return list;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
