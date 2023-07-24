import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import data from '../../data.json'
function Products() {
  return (
      <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {data.products.map(res=>{
               return (
                   <Card
                       sx={{width:"250px", height: '100%', display: 'flex', flexDirection: 'column',margin:"16px" }}
                   >
                       <CardMedia
                           component="div"
                           sx={{
                               pt: '100%',
                           }}
                           image={res.image}
                       />
                       <CardContent sx={{ flexGrow: 1 }}>
                           <Typography gutterBottom variant="h5" component="h2">
                               {res.title}
                           </Typography>
                           <Typography>
                               {res.description}
                           </Typography>
                       </CardContent>
                       <CardActions>
                           <Button size="small">Buy</Button>
                           <Button size="small">Edit</Button>
                       </CardActions>
                   </Card>
               )
            })}
             
          </Grid>
      </Container>
  )
}

export default Products