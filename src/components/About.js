// MATERIAL UI IMPORTS
import {Grid, Box, Container, Typography} from '@mui/material'

const About = () => {
    return (
        <>
            <div className='spacer'></div>
            <Container>
                <Box>
                    <Grid container>
                        <Grid item>
                            <img alt='Pouring Beer' className="blogIMG"  src='https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'></img>
                        </Grid>
                        <Grid item xs className='blogText'>
                            <Typography variant='h4' className='centerText blogTitle'>About Beerz</Typography>
                            <hr></hr>
                            <Typography variant='body1'>Beerz is dedicated to the art of beer making, the joy of drinking beer, and to the exhilaration of the high that one experiences when in the beautiful pursuit of good beer.</Typography>
                            <br></br>
                            <Typography variant='body1'>The effect of an exceptional beer, the brand-new glass, and the cold of Antarctica. All excellent on their own but together they're simply irresistible.</Typography>
                            <br></br>
                            <Typography variant='body1'>Our goal is to help you appreciate the palate of well-crafted beer. We understand that many people enjoy IPAS and ESB, hence our brewery has a variety of styles for every occasion.</Typography>
                            <br></br>
                            <Typography variant='body1'>We are committed to making the very best beers for you to enjoy! With a wide variety of styles for every occasion, we have something for everyone.</Typography>
                            <br></br>
                            <Typography variant='body1'>The quality of our beers has been recognized by some customers, while others have discovered new tastes in our line. We invite you to discover your tastes!</Typography>

                        </Grid>
                    </Grid>
                </Box>
            </Container>          
            
            <br></br>
            <br></br>
            <Container>
                <Box>
                    <Grid container>
                        <Grid item xs className='blogText'>
                            <Typography variant='h5' className='centerText blogTitle'>Tours and Tastings</Typography>
                            <hr></hr>
                            <Typography variant='body1'>Are your curious to know how that special brew is made? Or just what our secret is?</Typography>
                            <br></br>
                            <Typography variant='body1'>Come on by, and join us for a tour and tasting, where you can become a master brewer.</Typography>
                            <br></br>
                            <Typography variant='body1'>Checkout our website, to see when they\’re being hosted. They\’re free of charge and you get a brew!</Typography>
                            <br></br>
                            <Typography variant='body1'>Or come in and have a seat. We have an assortment of beers— from beverages that really quench your thirst, to experimental flavours that drive you to drink more. We have a beer for every occasion, every season and every mood!</Typography>
                            <br></br>
                            <Typography variant='body1'>Join us for live music, enjoy a drink by the fire pit, or hang out for special events!</Typography>
                        </Grid>
                        <Grid item>
                            <img alt='Pouring Beer' className="blogIMG"  src='https://images.unsplash.com/photo-1532635255-888592aa2f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'></img>
                        </Grid>
                    </Grid>
                </Box>
            </Container>


            <br></br>
            <br></br>

            <Container>
                        <Typography variant='h5' className='centerText blogTitle'>Beerz at Home</Typography>
                        <hr></hr>
                <Grid container>
                    <Grid item className='blogText'>
                        <img alt='Pouring Beer' className="blogIMG"  src='https://images.unsplash.com/photo-1576402918429-1981f3b88b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80'></img>
                    </Grid>
                    <Grid item sm sx={{padding: '20px'}}>
                        <Typography variant='body1'>The Beerz is home to many great beers. What better way to enjoy them than at home, right? You can order online and have them delivered to your doorstep!</Typography>
                    </Grid>
                </Grid>
            </Container>

            <br></br>
            <br></br>
            <Container>
                <Typography variant='h4' className='centerText blogTitle'>We invite you to become a part of our story. As you drink one of our handcrafted beers, be sure to ask "What's New?"</Typography>
            </Container>

            <div className='footerSpacer'></div>
        </>
    )
}

export default About;