import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Heading } from "@chakra-ui/react";

import DisplayProductComponent from "./Components/DisplayProducts.Component";
import { CartProvider } from "./contexts/cartContext";
import Cart from "./Components/Cart.Component";
import ShopComponent from "./presentation/Shop.Component";
import usePhotos from "./presentation/hooks/usePhotos";
import ShopProvider from "./presentation/contexts/shopContext";
import CartComponent from './presentation/cartComponent';
import NavbarComponent from "./presentation/Navbar.Component";

// Main App component wrapped with CartProvider to provide cart context
function App() {
  const { photos, error } = usePhotos();

  return (
    // <CartProvider>
    //   <div className="App">
    //     <DisplayProductComponent />
    //     <Cart />
    //   </div>
    // </CartProvider>

    <>
      <ShopProvider>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            md: `"nav nav" " main aside "`,
          }}
          templateColumns={{
            base: "1fr",
            md: "1fr 400px",
          }}
        >
          <GridItem area="nav" bg="darkgrey">
            <NavbarComponent/>
          </GridItem>
          <GridItem area="main" bg="darkgray" marginRight={5}>
            <ShopComponent photos={photos} />
          </GridItem>
          <GridItem area="aside" bg="grey">
            <Heading color="">Shoping Cart</Heading>
            <CartComponent/>
          </GridItem>
        </Grid>
      </ShopProvider>
    </>
  );
}

export default App;
