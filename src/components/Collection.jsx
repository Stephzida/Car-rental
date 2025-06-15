import React from 'react'
import { Container } from 'react-bootstrap'
import CollectionGrid from './CollectionGrid'
import Button from './Button'


const Collection = () => {
  return (
    <div style={{display:'flex' , flexDirection:'column' , gap:5 , padding:20 , textAlign:"center"} }>
        <Container className='collection' style={{display:'flex' , flexDirection:'column' , gap:50 }}>
           <div>
             <h3>Our Impressive Collection of Cars</h3>
            <p>Ranging from elegant sedans to powerful sports cars, <br /> all carefully selected to provide our customers with the ultimate driving experience. </p>
           </div>
        </Container>
        <Container>
          <CollectionGrid/>
          <Button message={'See all Cars'} active={"true"}/>
        </Container>
    </div>
  )
}

export default Collection