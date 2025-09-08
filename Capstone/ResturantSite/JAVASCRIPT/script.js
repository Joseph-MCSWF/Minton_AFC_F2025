if (document.body.classList.contains('menu')) {
    const itemImg = document.getElementById('itemImg');
    const itemName = document.getElementById('itemName');
    const itemDesc = document.getElementById('itemDesc');
    const itemPrice = document.getElementById('itemPrice');
    document.getElementById('btnPrev').addEventListener('click', prevImage);
    document.getElementById('btnNext').addEventListener('click', nextImage);
    const menuItems = [
        {
            menuID: 0,
            itemName: "Pizza",
            itemDesc: "Thin crust pizza by the slice",
            itemPrice: 3.50,
            itemImg: "../images/menuOne.png"
        },
        {
            menuID: 1,
            itemName: "Drink",
            itemDesc: "Refreshing soda or water",
            itemPrice: 1.50,
            itemImg: "../images/menuTwo.png"
        },
        {
            menuID: 2,
            itemName: "Krabby Patty",
            itemDesc: "The classic burger from the Krusty Krab",
            itemPrice: 4.99,
            itemImg: "../images/menuThree.png"
        },
        {
            menuID: 3,
            itemName: "Chicken Fries",
            itemDesc: "Crispy fried chicken strips",
            itemPrice: 3.99,
            itemImg: "../images/menuFour.png"
        },
        {
            menuID: 4,
            itemName: "Nachos",
            itemDesc: "Cheesy nachos with jalapeños",
            itemPrice: 2.99,
            itemImg: "../images/menuFive.png"
        }
    ];
    const fmtPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
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
    renderMenuItem(currentIndex);
}

if (document.body.classList.contains('hiring')){
    const form = document.getElementById('jobForm');
    const STATES = ['AL', 'FL', 'KY', 'TN', 'NY'];
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,12}$/;
    const phoneFormat = /^\d{3}-\d{3}-\d{4}$/;
    const formTesting = [
        f => f.firstName.value.trim() ? '' : 'First Name is required.',
        f => f.lastName.value.trim() ? '' : 'Last Name is required.',
        f => f.addressOne.value.trim() ? '' : 'Address 1 is required.',
        f => f.city.value.trim() ? '' : 'City is required.',
        f => STATES.includes(f.state.value) ? '' : 'Select a valid state.',
        f => {
            const n = Number(f.age.value);
            return (!Number.isNaN(n) && n >= 21 && n <= 99) ? '' : 'Age must be 21–99.';
        },
        f => phoneFormat.test(f.phone.value) ? '' : 'Phone must be 111-222-3333.',
        f => (f.email.value.trim() && f.email.value.length <= 50) ? '' : 'Email is required and ≤ 50 chars.',
        f => passwordFormat.test(f.password.value) ? '' : 'Password: 8–12 chars incl. upper, lower, digit, symbol.',
        f => f.moreInfo.value.length <= 30 ? '' : 'More Info must be ≤ 30 characters.',
    ];
    form.noValidate = true;
    function formValidation(form) {
        const f = form.elements;
        let alertString = '';

        formTesting.forEach(test => {
            const msg = test(f);
            if (msg) alertString += `- ${msg}\n`;
        });

        if (alertString) {                  // single IF: block + show ALL issues
            alert('Please fix the following:\n\n' + alertString);
            return false;
        }
        return true;
    }
    form.addEventListener('submit', e => {
        if (!formValidation(e.currentTarget)) e.preventDefault();
    });
}



