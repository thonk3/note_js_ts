// just a silly challenge to recap es6 module

// assuming the data is 
// const orders = [ {item, order}, ... ]
const orders = [
    { 
        item: { name: "no", price: 123, },
        user: { id: "123", name: "yes", }
    }
]

const processOrder = (orders) =>
    orders.map(o => {
        // changing dupe props name
        const { name: uName, ...user} = o.user;
        o.user = { ...user, userName: uName };
        const {name: iName, ...item} = o.item;
        o.item = { ...item, itemName: iName };
        
        // combining item + user in each order
        return Object.fromEntries([ 
            ...Object.entries(o.item), 
            ...Object.entries(o.user)
        ])
    })


console.log(processOrder(orders));