var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


/*  WRITE YOUR CODE BELOW */


// Part1. Hint: Use the listItems object to iterate through the elements of the list

var msg = 0

for (var  i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent == "fresh figs" || listItems[i].textContent == "honey" || listItems[i].textContent == "kale")
        listItems[i].className = 'cool';
}





// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list

for (var i = 0; i < totalItems; i++) {
    msg = i + 1;
}

newHeading.innerHTML = "Number of items: " + msg;
heading.innerHTML = newHeading;


