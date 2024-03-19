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
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

var statusTwo = document.querySelector('#book2 .status');
var statusTwoValue = statusTwo.textContent.trim();
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

var statusThree = document.querySelector('#book3 .status');
var statusThreeValue = statusThree.textContent.trim();
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
statusOne.style.color = STATUS_MAP[statusOneValue].color;
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

statusTwo.style.color = STATUS_MAP[statusTwoValue].color;
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
statusThree.style.color = STATUS_MAP[statusThreeValue].color;
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
