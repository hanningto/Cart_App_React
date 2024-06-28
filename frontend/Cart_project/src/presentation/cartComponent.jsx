import React from 'react'
import { useShop } from './contexts/shopContext'
import { Button, Card, CardBody, HStack, Heading, Image, SimpleGrid } from '@chakra-ui/react'

function CartComponent() {
    const { cartItems, dispatch} =useShop()
    console.log(cartItems)
    
  return (
    <SimpleGrid >
      {cartItems.map((item) => (
        <Card marginTop={7} marginBottom={7}>
            <HStack>
            <Image src={item.imageUrl} width="70px" height="70px" objectFit="cover" overflow="hidden" borderRadius="60px"/>
            <CardBody>
                <Heading fontSize={12}>
                    {item.title}
                </Heading>
                <Button className='btn btn-outline-primary' onClick={() => dispatch({type: "ADD_TO_CART", item})}>+</Button>
                <Button className='btn btn-outline-primary'>{item.quantity}</Button>
                <Button className='btn btn-outline-primary' onClick={() => dispatch({type: "DECREMENT_QUANTITY", item})}>-</Button>
                <Button className='btn btn-outline-primary' marginTop="6px">Price: Ksh {item.quantity * item.price}</Button>


            </CardBody>
            <Button className='btn btn-outline-danger'  onClick={() => dispatch({type: "REMOVE_FROM_CART", item})}> Delete</Button>

            </HStack>
        </Card>
      ))}
    </SimpleGrid>
  )
}

export default CartComponent
