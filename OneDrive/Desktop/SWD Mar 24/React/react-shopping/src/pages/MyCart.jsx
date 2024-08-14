import Container from '../components/Container';
import React from 'react'
import Breadcumb from '../components/Breadcumb'
import CartSection from '../components/CartSection';

const MyCart = () => {
  return (
    <Container className={"flex-grow"}>
        <Breadcumb currentPageTitle="My Cart"/>
        <CartSection></CartSection>
    </Container>
  )
}

export default MyCart