import React, { createContext, useContext, useState ,useEffect} from "react";



/**
 * createContext - Creates new context from the CONTEXT API
 */
const CartContext = createContext({
  cart: [],
  setCart: () => Promise,
  addcart:[],
  setAddCart:()=>Promise,
  handleQuantity: () => null,
});


export const useCart = () => useContext(CartContext);


export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [addCart,setAddCart]=useState([]);
  function handleQuantity(id = 0, type = "") {
    const cartCopy = [...cart];
    const matchedIndex = cartCopy.findIndex((d) => d.id === id);
  
    if (matchedIndex !== -1) {
      const matchedData = { ...cartCopy[matchedIndex] };
  
      // Check if quantity is NaN, set it to 1
      if (isNaN(matchedData.quantity)) {
        matchedData.quantity = 1;
      }
  
      if (type === "decrement" && matchedData.quantity > 1) {
        matchedData.quantity -= 1;
      } else if (type === "increment") {
        matchedData.quantity += 1;
      }
  
      cartCopy[matchedIndex] = matchedData;
      setCart([...cartCopy]); // Update the state with the new array
    } else {
      console.error("No Matching Food Item found in cart");
      alert("No Matching Food Item found in cart");
    }
  }
  
  
    useEffect(() => {
    const data = {
      products: [
        {
          "id": 1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          ]
      },
      {
          "id": 2,
          "title": "iPhone X",
          "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          "price": 899,
          "discountPercentage": 17.94,
          "rating": 4.44,
          "stock": 34,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/2/1.jpg",
              "https://i.dummyjson.com/data/products/2/2.jpg",
              "https://i.dummyjson.com/data/products/2/3.jpg",
              "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
          ]
      },
      {
          "id": 3,
          "title": "Samsung Universe 9",
          "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
          "price": 1249,
          "discountPercentage": 15.46,
          "rating": 4.09,
          "stock": 36,
          "brand": "Samsung",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/3/1.jpg"
          ]
      },
      {
          "id": 4,
          "title": "OPPOF19",
          "description": "OPPO F19 is officially announced on April 2021.",
          "price": 280,
          "discountPercentage": 17.91,
          "rating": 4.3,
          "stock": 123,
          "brand": "OPPO",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/4/1.jpg",
              "https://i.dummyjson.com/data/products/4/2.jpg",
              "https://i.dummyjson.com/data/products/4/3.jpg",
              "https://i.dummyjson.com/data/products/4/4.jpg",
              "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
          ]
      },
      {
          "id": 5,
          "title": "Huawei P30",
          "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          "price": 499,
          "discountPercentage": 10.58,
          "rating": 4.09,
          "stock": 32,
          "brand": "Huawei",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/5/1.jpg",
              "https://i.dummyjson.com/data/products/5/2.jpg",
              "https://i.dummyjson.com/data/products/5/3.jpg"
          ]
      }
      ],
    };
    setCart(data.products);
  }, []);
  
  
  
  
  
  
  

  const value = {
    cart,
    setCart,
    addCart,
    setAddCart,
    handleQuantity,  };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  }
  
