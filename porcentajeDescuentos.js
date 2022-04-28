// // // Add an eventListener to prevent refresh of my page
const formAll = document.querySelectorAll("form");
formAll.forEach(el => {
    el.addEventListener('submit', function(e) {
        e.preventDefault();
    });
})
const priceInput = document.getElementById('price');
const discountInput = document.getElementById('discount');
const couponInput = document.getElementById('coupon');
const resultOutput = document.getElementById('result');
const couponList = [
    {
        name:'PERU15',
        discount: 15
    },
    {
        name:'PERU30',
        discount: 30
    },
    {
        name:'PERU45',
        discount: 45
    },
]


// Function to discount price
const discountPrice = (price,discount) => parseInt(price) - parseInt(price)*parseInt(discount)/100
// Function to calculate new price
const calculateDiscount = () => {
    // Variables
    priceInputValue = priceInput.value;
    discountInputValue = discountInput.value;
    couponInputValue = couponInput.value;
    discountPriceValue = discountPrice(priceInputValue,discountInputValue);
    // Validate coupon
    const isCoupon = couponList.find( ({ name }) => name === couponInputValue );
    const discount = isCoupon?discountPriceValue*parseInt(100-isCoupon.discount)/100:discountPriceValue + ', it is not valid coupon';
    // Final result
    resultOutput.innerHTML = 'Product price is: $' + priceInputValue + ', discount is: $' + discountInputValue + ' and product price with discount is: $' + discount;
    
}

