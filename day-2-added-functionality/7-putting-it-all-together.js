/*
In this example, we'll put together a final price analysis
based on whether or not the brand matches a specific
sale details:
- Express t-shirts, buy one get one half off
- All Calvin Klein products 10% off
- Free shipping on five items or more
 ------------
 */

// an array of items we can assume was passed in from a shopping cart
const cartItems = [
    { productName: 'pants', brand: 'Calvin Klein Jeans', price: 40 },
    { productName: 'cologne', brand: 'Calvin Klein', price: 60 },
    { productName: 't-shirt', brand: 'Express', price: 20 },
    { productName: 't-shirt', brand: 'Express', price: 20 },
    { productName: 't-shirt', brand: 'Vans', price: 15 }
];

// set up a price analyzer
const priceAnalyzer = setPriceCalculator(.0925);

// determine if any sales should be applied
const expressAnalyzedItems = setExpressSale(cartItems);
const fullyAnalyzedItems = setCalvinKleinSale(expressAnalyzedItems);

// create price array
let pricesArray = [];
fullyAnalyzedItems.forEach(item => pricesArray.push(item.price));

// save the final price as a calculated float
const rawTotal = priceAnalyzer.calculateTotal(priceAnalyzer.length, ...pricesArray);
const total = Math.round(rawTotal * 100) / 100;

// since we're demoing a script, we'll log out the result instead of returning it
console.log(`$${total}`);

// if you want to see how we progressed through the calculations, you can uncomment
// these other console logs
//console.log(JSON.stringify(priceAnalyzer));
//console.log(JSON.stringify(expressAnalyzedItems));
//console.log(JSON.stringify(expressAnalyzedItems));




// constructs a price analyzer based on a tax rate and shipping fee
function setPriceCalculator(taxRate = .09, shippingFee = 5) {
    return {
        taxRate,
        shippingFee,
        calculateTotal(count, ...prices) {
            let sum = 0;
            prices.forEach(price => sum += price);
            if(count <= 4) {
                sum = sum + shippingFee;
            }
            return sum + (sum * this.taxRate);
        }
    }
}

// determines if any products are Express t-shirts, and if
// so, find another one and mark it half-off
function setExpressSale(items) {
    const cart = [...items];

    const firstIndex = cart.findIndex(
        x => x.brand === 'Express' && x.productName === 't-shirt'
    );

    if(firstIndex) {
        const secondIndex = cart.findIndex(
            (x, ind) =>
                ind !== firstIndex &&
                x.brand === 'Express' &&
                x.productName === 't-shirt'
        );

        if(secondIndex) {
            cart[secondIndex].price = cart[secondIndex].price * .5;
        }
    }

    return items;
}

// finds any Calvin Klein produces and set their prices at 10% off
function setCalvinKleinSale(items) {
    const cart = [...items];

    cart.forEach(cartItem => {
        if(cartItem.brand.includes('Calvin Klein')) {
            cartItem.price = cartItem.price * .9;
        }
    });

    return cart;
}