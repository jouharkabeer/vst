const Customer = [
    {
        customerid: 1254,
        name: 'John',
        phonenumber: 7845615641,
        orderstatus: 'Pending',
        quantity : 20,
        payment : 'Not paid'
    },
    {
        customerid: 4521,
        name: 'Mathew',
        phonenumber: 7845961245,
        orderstatus: 'Declined',
        quantity : 15,
        payment : 'Initiated'
    },
    {
        customerid: 4856,
        name: 'Adhil',
        phonenumber: 8746226240,
        orderstatus: 'Pending',
        quantity : 53,
        payment : 'Not paid'
    },
    {
        customerid: 5842,
        name: 'Nahas',
        phonenumber: 8956471236,
        orderstatus: 'Delivered',
        quantity : 21,
        payment : 'Initiated'
    },
    {
        customerid: 5688,
        name: 'Anver',
        phonenumber: 9874525055,
        orderstatus: 'Delivered',
        quantity : 56,
        payment : 'Received'
    },
    {
        customerid: 2822,
        name: 'Nuthaim',
        phonenumber: 7599642321,
        orderstatus: 'Pending',
        quantity : 76,
        payment : 'Initiated'
    },
    {
        customerid: 4125,
        name: 'Sruthi',
        phonenumber: 6235598525,
        orderstatus: 'Delivered',
        quantity : 36,
        payment : 'Received'
    },
    {
        customerid: 5842,
        name: 'Nahas',
        phonenumber: 8956471236,
        orderstatus: 'Delivered',
        quantity : 21,
        payment : 'Initiated'
    },
    {
        customerid: 5688,
        name: 'Anver',
        phonenumber: 9874525055,
        orderstatus: 'Delivered',
        quantity : 56,
        payment : 'Received'
    },
    {
        customerid: 2822,
        name: 'Nuthaim',
        phonenumber: 7599642321,
        orderstatus: 'Pending',
        quantity : 76,
        payment : 'Initiated'
    },
    {
        customerid: 4125,
        name: 'Sruthi',
        phonenumber: 6235598525,
        orderstatus: 'Delivered',
        quantity : 36,
        payment : 'Received'
    }
 ]

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");




themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
})

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})


