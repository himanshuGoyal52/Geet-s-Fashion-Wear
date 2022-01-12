export const getCartItems = () =>{
    const cartItems = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) :
    [];
    return cartItems;
};
export const setCartItems = (cartItems) =>{
    localStorage.setItem('cartItems' , JSON.stringify(cartItems));
};
export const setUserInfo = ({
    _id = '',
    name = '',
    email = '',
    password = '',
    token = '',
    isAdmin = '',

})=>{
    localStorage.setItem('userInfo',
    JSON.stringify({
        _id,
        name,
        email,
        password,
        token,
        isAdmin,
    })
    );
};
export const clearUser = () =>{
    localStorage.removeItem('userInfo');
};
export const getUserInfo = () => {
    return localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo'))
    :{name:'', email : '',password : ''}
}
/*==========================================================*/
export const getShipping = () =>{
    const shipping = localStorage.getItem('shipping') ? 
    JSON.parse(localStorage.getItem('shipping')) :
    {
        address:'',
        city:'',
        postalCode:'',
        country:'',
        phone : '',
    };
    return shipping;
}
export const setShipping = ({
    address = '',
    city = '',
    postalCode = '',
    country = '',
    phone = '',
}) => {
    localStorage.setItem('shipping' , JSON.stringify({address,city,postalCode,country,phone}));
};
/*================================================================*/ 
export const getPayment = () =>{
    const payment = localStorage.getItem('payment') ? 
    JSON.parse(localStorage.getItem('payment')) :
    {
        paymentMethod : 'Online',
    };
    return payment;
}
export const setPayment = ({ paymentMethod = 'COD' }) => {
    localStorage.setItem('payment' , JSON.stringify({paymentMethod}));
};
export const cleanCart = () =>{
    localStorage.removeItem('cartItems');
};
