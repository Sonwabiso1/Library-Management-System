const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line  

var statusOne = document.querySelector('#book1 .status');
var statusOneValue = statusOne.textContent.trim();
var reserveOne = document.querySelector('#book1 .reserve');
var checkoutOne = document.querySelector('#book1 .checkout')
var checkinOne = document.querySelector('#book1 .checkin')

var statusTwo = document.querySelector('#book2 .status');
var statusTwoValue = statusTwo.textContent.trim();
var reserveTwo = document.querySelector('#book2 .reserve');
var checkoutTwo = document.querySelector('#book2 .checkout');
var checkinTwo = document.querySelector('#book2 .checkin');

var statusThree = document.querySelector('#book3 .status');
var statusThreeValue = statusThree.textContent.trim();
var reserveThree = document.querySelector('#book3 .reserve');
var checkoutThree = document.querySelector('#book3 .checkout');
var checkinThree = document.querySelector('#book3 .checkin');

checkinOne.style.color = 'black';
statusOne.style.color = STATUS_MAP[statusOneValue].color;
reserveOne.disabled = !STATUS_MAP[statusOneValue].canReserve;
checkoutOne.disabled = !STATUS_MAP[statusOneValue].canCheckout;
checkinOne.disabled = !STATUS_MAP[statusOneValue].canCheckIn;

checkinTwo.style.color = 'black';
statusTwo.style.color = STATUS_MAP[statusTwoValue].color;
reserveTwo.disabled = !STATUS_MAP[statusTwoValue].canReserve;
checkoutTwo.disabled = !STATUS_MAP[statusTwoValue].canCheckout;
checkinTwo.disabled = !STATUS_MAP[statusTwoValue].canCheckIn;

checkinThree.style.color = 'black';
statusThree.style.color = STATUS_MAP[statusThreeValue].color;
reserveThree.disabled = !STATUS_MAP[statusTwoValue].canReserve;
checkoutThree.disabled = !STATUS_MAP[statusThreeValue].canCheckout;
checkinThree.disabled = !STATUS_MAP[statusThreeValue].canCheckIn;
