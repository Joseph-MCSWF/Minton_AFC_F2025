const itemImg   = document.getElementById('itemImg');
const itemName  = document.getElementById('itemName');
const itemDesc  = document.getElementById('itemDesc');
const itemPrice = document.getElementById('itemPrice');

const menuItems = [
    { menuID: 0, itemName: "Pizza",        itemDesc: "Thin crust pizza by the slice",            itemPrice: 3.50, itemImg: "../images/menuOne.png" },
    { menuID: 1, itemName: "Drink",        itemDesc: "Refreshing soda or water",                 itemPrice: 1.50, itemImg: "../images/menuTwo.png" },
    { menuID: 2, itemName: "Krabby Patty", itemDesc: "The classic burger from the Krusty Krab",  itemPrice: 4.99, itemImg: "../images/menuThree.png" },
    { menuID: 3, itemName: "Chicken Fries",itemDesc: "Crispy fried chicken strips",              itemPrice: 3.99, itemImg: "../images/menuFour.png" },
    { menuID: 4, itemName: "Nachos",       itemDesc: "Cheesy nachos with jalapeños",             itemPrice: 2.99, itemImg: "../images/menuFive.png" }
];

const fmtPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

let currentIndex = 0;

function renderMenuItem(index) {
    const item = menuItems[index];
    itemImg.src = item.itemImg;
    itemImg.alt = item.itemName;
    itemName.textContent = item.itemName;
    itemDesc.textContent = item.itemDesc;
    itemPrice.textContent = fmtPrice.format(item.itemPrice);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % menuItems.length;
    renderMenuItem(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    renderMenuItem(currentIndex);
}

document.getElementById('btnPrev').addEventListener('click', prevImage);
document.getElementById('btnNext').addEventListener('click', nextImage);

renderMenuItem(currentIndex);
