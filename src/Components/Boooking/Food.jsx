import React, { useState, useRef } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import snacks1 from "../../Assets/snacks1.jpg";
import snacks2 from "../../Assets/snacks2.jpg";
import snacks3 from "../../Assets/snacks3.jpg";
import snacks4 from "../../Assets/snacks4.jpg";
import snacks5 from "../../Assets/snacks5.jpg";
import snacks6 from "../../Assets/snacks6.jpg";
import bev1 from "../../Assets/bev1.jpg";
import bev2 from "../../Assets/bev2.jpg";
import bev3 from "../../Assets/bev3.jpg";
import bev4 from "../../Assets/bev4.jpg";
import bev5 from "../../Assets/bev5.jpg";
import bev6 from "../../Assets/bev6.jpg";
import des1 from "../../Assets/des1.jpg";
import des2 from "../../Assets/des2.jpg";
import des3 from "../../Assets/des3.jpg";
import des4 from "../../Assets/des4.jpg";
import des5 from "../../Assets/des5.jpg";
import des6 from "../../Assets/des6.jpg";

const useStyles = makeStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '2px solid transparent',
      transition: 'border 0.3s ease-in-out',
      marginBottom: '20px',
      width: '230px', // Adjust card width
      height: '350px', // Adjust card height
    },
    cardContent: {
      flexGrow: 1,
      textAlign: 'center',
    },
    cardMedia: {
      height: 170,
      width: 230,
    },
    price: {
      fontWeight: 'bold',
    },
    sliderContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px auto', // Adjust margins to center the slider
      maxWidth: '1000px', // Adjust maximum width of slider container
      overflowX: 'hidden',
    },
    sliderItem: {
      padding: '0 10px', // Adjust padding to center the cards
    },
  });
const ProductCards = () => {
    const location = useLocation();
  const navigate = useNavigate();
    const classes = useStyles();
    const [quantities, setQuantities] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const sliderRef = useRef(null);

    const handleIncrement = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };

    const handleDecrement = (productId) => {
        if (quantities[productId] > 0) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] - 1
            }));
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
      }, []);

    const addToCart = (product) => {
        const quantity = quantities[product.id] || 0;
        if (quantity > 0) {
            const newItem = {
                name: product.title,
                quantity,
                pricePerUnit: parseInt(product.price.replace('₹', ''), 10),
                totalPrice: parseInt(product.price.replace('₹', ''), 10) * quantity
            };
            setCartItems([...cartItems, newItem]);
        }
    };

    const totalCartPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);
    const handleProceedToPayment = () => {
        navigate("/Payment", {
          state: {
            totalPrice: totalCartPrice,
            cartItems,
            Price: location.state.Price,
            count: location.state.count,
            text: location.state.text,
            selectedSeats: location.state.selectedSeats,
            image: location.state.image,
            Date:location.state.selectedDate,
            Time:location.state.selectedTime
          }
        });
      };

    const products = [
        { id: 1, category: 'Snacks', title: 'Popcorn', imageUrl: snacks1, description: 'Crunchy popcorns for your movie time enjoyment. Grab yours now!', price: '₹290' },
        { id: 2, category: 'Snacks', title: 'Nachos with dips', imageUrl: snacks2, description: 'Crunchy nachos served with a variety of delicious dips. Enjoy!', price: '₹320' },
        { id: 3, category: 'Snacks', title: 'Garlic Breadsticks', imageUrl: snacks3, description: 'Perfect to satisfy your cravings. Order Now!', price: '₹220' },
        { id: 4, category: 'Snacks', title: 'Pretzels ', imageUrl: snacks4, description: 'Soft pretzels served with warm, gooey cheese.', price: '₹180' },
        { id: 5, category: 'Snacks', title: 'Fries', imageUrl: snacks5, description: 'Golden crispy fries, a classic snack for any occasion. Enjoy!', price: '₹140' },
        { id: 6, category: 'Snacks', title: 'Chicken Wings', imageUrl: snacks6, description: 'Tender and flavorful chicken wings, a must-have!', price: '₹310' },
        { id: 7, category: 'Desserts', title: 'Ice Cream', imageUrl: des1, description: 'Creamy and indulgent ice cream to satisfy your sweet tooth. Delightful!', price: '₹120' },
        { id: 8, category: 'Desserts', title: 'Brownies', imageUrl: des2, description: 'Decadent chocolate brownies, a heavenly treat for dessert lovers. Yum!', price: '₹160' },
        { id: 9, category: 'Desserts', title: 'Cup Cake', imageUrl: des3, description: 'Moist and fluffy cupcakes, perfect for any celebration. Order now!', price: '₹80' },
        { id: 10, category: 'Desserts', title: 'Red velvet Pastry', imageUrl: des4, description: 'Rich and velvety red velvet pastry, an exquisite dessert choice. Delicious!', price: '₹190' },
        { id: 11, category: 'Desserts', title: 'Donuts', imageUrl: des5, description: 'Soft and fluffy donuts, a delightful treat for any time of day. Enjoy!', price: '₹140' },
        { id: 12, category: 'Desserts', title: 'Snickers', imageUrl: des6, description: 'Crunchy peanuts and creamy caramel, a classic Snickers delight. Tasty!', price: '₹60' },
        { id: 13, category: 'Beverages', title: 'Coke', imageUrl: bev1, description: 'Refreshing Coke, the perfect beverage to quench your thirst. Enjoy!', price: '₹120' },
        { id: 14, category: 'Beverages', title: 'Iced Tea', imageUrl: bev2, description: 'Cool and refreshing iced tea, a delightful drink. Sip away!', price: '₹100' },
        { id: 15, category: 'Beverages', title: 'Hot Chocolate', imageUrl: bev3, description: 'Rich and creamy hot chocolate, a comforting beverage. Delicious!', price: '₹150' },
        { id: 16, category: 'Beverages', title: 'Bottled Water', imageUrl: bev4, description: 'Pure and refreshing bottled water, the perfect thirst-quencher. Stay hydrated!', price: '₹70' },
        { id: 17, category: 'Beverages', title: 'Expresso', imageUrl: bev5, description: 'Strong and aromatic espresso, perfect for coffee lovers. Enjoy!', price: '₹90' },
        { id: 18, category: 'Beverages', title: 'Redbull', imageUrl: bev6, description: 'Energizing Redbull, the ultimate boost to keep you going. Get energized!', price: '₹110' },
    ];

    const getProductsByCategory = (category) => {
        return products.filter(product => product.category === category);
    };
  
    return (
      <>
          <Typography variant="h4" style={{ color: 'gray', fontWeight: 'bold', textAlign: 'center' }}>Movie Bites</Typography>
          <div className={classes.sliderContainer} ref={sliderRef}>
              {getProductsByCategory('Snacks').map(product => (
                  <div className={classes.sliderItem} key={product.id}>
                      <Card className={classes.card}>
                          <CardMedia
                              component="img"
                              className={classes.cardMedia}
                              image={product.imageUrl}
                              alt={product.description}
                          />
                          <CardContent className={classes.cardContent}>
                              <Typography gutterBottom variant="h5" component="div">
                                  {product.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                  {product.description}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" className={classes.price}>
                                  Price: {product.price}
                              </Typography>
                              <Box display="flex" alignItems="center">
                                  <Button onClick={() => handleDecrement(product.id)} disabled={quantities[product.id] <= 0}>-</Button>
                                  <Typography variant="body1">{quantities[product.id] || 0}</Typography>
                                  <Button onClick={() => handleIncrement(product.id)}>+</Button>
                                  <Button onClick={() => addToCart(product)}>Add</Button>
                              </Box>
                          </CardContent>
                      </Card>
                  </div>
              ))}
          </div>

          <div className={classes.sliderContainer} ref={sliderRef}>
              {getProductsByCategory('Desserts').map(product => (
                  <div className={classes.sliderItem} key={product.id}>
                      <Card className={classes.card}>
                          <CardMedia
                              component="img"
                              className={classes.cardMedia}
                              image={product.imageUrl}
                              alt={product.description}
                          />
                          <CardContent className={classes.cardContent}>
                              <Typography gutterBottom variant="h5" component="div">
                                  {product.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                  {product.description}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" className={classes.price}>
                                  Price: {product.price}
                              </Typography>
                              <Box display="flex" alignItems="center">
                                  <Button onClick={() => handleDecrement(product.id)} disabled={quantities[product.id] <= 0}>-</Button>
                                  <Typography variant="body1">{quantities[product.id] || 0}</Typography>
                                  <Button onClick={() => handleIncrement(product.id)}>+</Button>
                                  <Button onClick={() => addToCart(product)}>Add</Button>
                              </Box>
                          </CardContent>
                      </Card>
                  </div>
              ))}
          </div>
  

          <div className={classes.sliderContainer} ref={sliderRef}>
              {getProductsByCategory('Beverages').map(product => (
                  <div className={classes.sliderItem} key={product.id}>
                      <Card className={classes.card}>
                          <CardMedia
                              component="img"
                              className={classes.cardMedia}
                              image={product.imageUrl}
                              alt={product.description}
                          />
                          <CardContent className={classes.cardContent}>
                              <Typography gutterBottom variant="h5" component="div">
                                  {product.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                  {product.description}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" className={classes.price}>
                                  Price: {product.price}
                              </Typography>
                              <Box display="flex" alignItems="center">
                                  <Button onClick={() => handleDecrement(product.id)} disabled={quantities[product.id] <= 0}>-</Button>
                                  <Typography variant="body1">{quantities[product.id] || 0}</Typography>
                                  <Button onClick={() => handleIncrement(product.id)}>+</Button>
                                  <Button onClick={() => addToCart(product)}>Add</Button>
                              </Box>
                          </CardContent>
                      </Card>
                  </div>
              ))}
          </div>
  
          <Typography variant="h4" style={{ color: 'gray', fontWeight: 'bold', textAlign: 'center' }}>Cart</Typography>
          <Grid container spacing={1}>
              {cartItems.map((item, index) => (
                  <Grid item xs={12} key={index}>
                      <Typography>{item.quantity}x {item.name}: {item.quantity}x{item.pricePerUnit} = {item.totalPrice}</Typography>
                  </Grid>
              ))}
              <Grid item xs={12}>
                  <Typography>Total Price: {totalCartPrice}</Typography>
              </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" marginTop="20px">
                <Button variant="contained" color="primary" onClick={handleProceedToPayment}>
                    Proceed
                </Button>
            </Box>
      </>
  );
  
  };
  
  export default ProductCards;

