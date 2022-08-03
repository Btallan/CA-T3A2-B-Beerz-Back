// MATERIAL UI IMPORTS
import {Grid, Box, Container, Typography} from '@mui/material'



const WhoAreWe = () => {
    return(
        <Box>
            <Container sx={{ padding: '30px'}}>
                <Grid container>
                    <Grid item>
                        <img alt="Hops being poured" className="blogIMG" src='https://images.unsplash.com/photo-1644940642314-a310d49a4750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
                    </Grid>
                    <Grid item xs className='blogText'>
                        <Typography variant='h4' className='centerText'>Who We Are!</Typography>
                        <Typography variant='body1'>                    
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ultrices sapien. Morbi cursus tortor eu dapibus mollis. 
                            Ut tempor urna a ante placerat, fermentum porta lorem aliquam. Vestibulum diam risus, vulputate non risus in, tristique eleifend turpis. 
                            Quisque varius ac lorem ac ornare. Nam iaculis, sem vitae euismod ultricies, metus nulla hendrerit felis, nec mollis tellus mi vitae mauris. 
                            Ut tempor urna a ante placerat, fermentum porta lorem aliquam. Vestibulum diam risus, vulputate non risus in, tristique eleifend turpis. 
                            Quisque varius ac lorem ac ornare. Nam iaculis, sem vitae euismod ultricies, metus nulla hendrerit felis, nec mollis tellus mi vitae mauris. 
                        </Typography> 
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default WhoAreWe;