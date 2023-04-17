import React, { useState, useEffect } from 'react';
import CardJumbo from './Sections/CardJumbo';
import Products from './Sections/Products';
import Contact from './Sections/Contact';
import Reviews from './Sections/Reviews';
import { useParams } from 'react-router-dom';
import AppBarComponent from './Sections/AppBarComponent';

export const MainPage = ({ isSecure }) => {
  const { userId } = useParams();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [userCart, setUserCart] = useState();

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        // setFirstname(data[userId - 1].firstname);
        // setLastname(data[userId - 1].lastname);
        // setCurrentUser(data[userId - 1].id);
        // setIsLogged(true);
        console.log(data);

        for (let i = 0; i < data.length; i++) {
          if (data[i].id == userId) {
            setCurrentUser(data[i].id);
            setFirstname(data[i].firstname);
            setUserCart(data[i].cart);
            setIsLogged(true);
          }
        }

      });

  }, []);

  let cartTotal = 0;
  const [clicked, setClicked] = useState(false);
  const [cartItemsProduct, setcartItemsProduct] = useState();


  const [cartItems, setcartItems] = useState([]);




  cartItems.map((item) => {
    cartTotal = cartTotal + item.productSum;
  });

  // function setCart(){
  //   fetch('http://localhost:8000/carts')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       for (let i = 0; i < data.length; i++) {
  //         if (data[i].owner == userId) {
  //           setcartItems(data[i].cartItems);
  //         }
  //       }
  //     });
  // }

  // function addOne(cartItemsProduct) {
  //   setClicked(false);
  //   // cartArray = [...cartItems, cartItemsProduct];
  //   // cartItems = cartArray;
  //   let cart = [...cartItems, cartItemsProduct];
  //   let owner = userId;
  //   const cartsBody = {owner, cart};

  //   fetch('http://localhost:8000/carts', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(cartsBody)
  //   })
  //     .then(res => {
  //       console.log(cartsBody + "added to db");
  //       setCart();
  //     });
      
  //   // cartItems.push(cartItemsProduct);
  //   // setcartItems(cartItems => [...cartItems, cartItemsProduct]);

  // }

  // {clicked && addOne(cartItemsProduct)}
  // {setClicked(false)}

  let cartArray = cartItems;

  function setCart(cartItemsProduct){
    cartArray = [...cartArray, cartItemsProduct];
    console.log(cartArray);
    setcartItems(cartArray);
    setClicked(false);
  }

  if(clicked){
    setCart(cartItemsProduct);
  }


  return (

    <>
      <AppBarComponent numOfCartItems={cartItems.length} setcartItems={setcartItems} cartItems={cartItems} cartTotal={cartTotal} isLogged={isLogged} firstname={firstname}></AppBarComponent>
      <CardJumbo isLogged={isLogged} firstname={firstname}></CardJumbo>
      <Products setClicked={setClicked} setcartItemsProduct={setcartItemsProduct} isLogged={isLogged}></Products>
      
      {
        // console.log(cartItems)
      }
      <Reviews></Reviews>
      <Contact></Contact>
    </>
  )
}
