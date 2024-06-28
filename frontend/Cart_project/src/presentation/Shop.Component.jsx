import React from "react";
import usePhotos from "./hooks/usePhotos";
// import './Shop.Component.css'
import { Box, Card, Image, SimpleGrid } from "@chakra-ui/react";
import { useShop } from "./contexts/shopContext";

const ShopComponent = ({ photos }) => {
    const {dispatch}= useShop()
    return (
        <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing={7}>
            {photos.map((photo) => (
                <Box height="500px" marginBottom={10} key={photo.id} className="card">
                    <Image src={photo.imageUrl} objectFit="cover" height="250px"/>
                        <div className="card-body">
                            <h5 className="card-title">Event Title: {photo.title}</h5>
                            <p className="card-text">Location: {photo.location}</p>
                            <p>Date: {photo.date}</p>
                            <p>Price: Ksh {photo.price}</p>
                            <button className="btn btn-primary" onClick={() => dispatch({type: "ADD_TO_CART", item: photo})}>Get Ticket</button>
                        </div>
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default ShopComponent;
