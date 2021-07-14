import './App.css';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
//Typography = h1, h2...etc
import {PhotoCamera} from '@material-ui/icons'
import useStyles from './styles'

const cards = [1,2,3,4,5,6,7,8,9]

function App() {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      {/*CssBaseline = default styling*/}
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant = "h6">
              photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              {/*gutterBottom: marginBottom*/}
                Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello Everyone This is material ui usage Photo Album template. 
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary actions
                    </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
          <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
                {
                  cards.map((card)=>(
                    <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia 
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="image title"
                    />
                    {/* CardMedia=>image */}
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You could use this section to describe
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* Button Part of Cards */}
                      <Button size="small" color="primary">
                        view
                      </Button>

                       <Button size="small" color="primary">
                        edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                  ))
                }
                
              </Grid>
          </Container>
      </main>
      <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
                footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
                Something here to give the footer 
          </Typography>
      </footer>
    </>
  );
}

export default App;
