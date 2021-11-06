
// ADD NEW ITEM TO END OF LIST
var node = document.createElement('li');
node.appendChild(document.createTextNode('cream'));
document.querySelector('ul').appendChild(node); 

// ADD NEW ITEM START OF LIST

var node2 = document.createElement('li');
node2.textContent = "kale";
var parent = document.querySelector('ul');
parent.insertBefore(node2, parent.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS

var listItems = document.querySelectorAll('li');
for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.add('cool');
}

//ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var itemsInList = document.querySelectorAll('li')
var numItems = itemsInList.length + '';
var headerValue = document.getElementsByTagName('h2');
headerValue.textContent = headerValue + numItems;

