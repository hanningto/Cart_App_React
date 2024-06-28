import { HStack, Image } from '@chakra-ui/react'
import React from 'react'

import eventLogo from "../assets/events_logo.jpeg"
import { useShop } from './contexts/shopContext'
function NavbarComponent() {
    const {cartItems} =useShop()
  return (
    <HStack padding={3} justifyContent="space-between" borderRadius={5}>
        <Image src={eventLogo} marginTop="2px" boxSize={10} marginBottom={1} borderRadius="20px"/>
        <h3>{cartItems.length} items in cart</h3>
        <h3></h3>
    </HStack>
  )
}

export default NavbarComponent
