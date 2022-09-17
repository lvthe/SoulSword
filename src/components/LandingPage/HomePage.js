import React from 'react';
import headerRight from '../../assets/header-right.png';
import { makeStyles, Button, Typography } from '@material-ui/core';
import image from '../../assets/background_home.png';
import wellcome from '../../assets/WELCOMETO.png';
import soulword from '../../assets/SOULSWORD.png';
import imgButton  from '../../assets/home_button .png';
const useStyles = makeStyles((theme) => ({
  background: {
    //minHeight: '80vh',
    color: 'white',
    //textShadow: '3px 4px black',
    // paddingLeft: 100,
    [theme.breakpoints.down('md')]: {
      // minHeight: 350,
      //marginTop: 0,
      //paddingLeft: 10,
      // height:"120%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    height:"120%",
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // width: '100vw',
    // height: '110vh',
 
  },
  heading: {
    textAlign: 'left',
    fontSize: 44,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    // fontFamily: 'Balsamiq Sans',
    fontFamily: 'Exo 2',
    lineHeight: '60px',
    // marginTop: 30,
    paddingTop: 150,
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '44px',
      paddingTop: 80,
    },
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  image: {
    width: '40%',
    margin: "auto",
    marginTop: '18vh',
    // marginLeft: '60vh',

    // [theme.breakpoints.down('md')]: {
    //   width: 350,
    //   height: 'auto',
    //   marginTop: 5,
    //   marginBottom: 10,
    // },
  },

  wellcome: {
    width: '20%',
    marginTop: '2vh',
    //marginLeft: '80vh',
  },
  soulword: {
    width: '35%',
    marginTop: '2vh',
    //margin: auto,
    //marginTop: '5vh',
    //marginLeft: '65vh',
  },

  imgButton:{
    marginTop: '10vh',
    width: '20%',
  },
  subheading: {
    textAlign: 'center',
    fontSize: 800,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    marginTop: 20,
    color: '#F0B90B',
    [theme.breakpoints.down('md')]: {
      marginTop: 20,
      fontSize: 18,
    },
  },
  para: {
    lineHeight: '30px',
    [theme.breakpoints.down('md')]: {
      marginTop: 15,
      fontSize: 14,
    },
  },
  buttonGame: {
    borderRadius: '30px',
    // background: `linear-gradient(to right,#6a1b9a, #8e24aa)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,
    marginTop: 15,
    color: '#ffffff',
    padding: '18px 20px 18px 20px',
    fontWeight: 600,
    fontSize: '1.2vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      padding: '12px 15px 12px 15px',
      fontWeight: 500,
    },
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  text_h1:{
    fontFamily: "Trajan-Pro",
    lineHeight: "1.22em",
    textAlign:"center",
    color:"#FFA800",
    
    backgroundImage: `url(${imgButton})`,
    bzackgroundPosition: 'center',
    // backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  margin: {
    fontFamily: "Trajan-Pro",
    lineHeight: "1.22em",
    textAlign:"center",
    color:"#FFA800",
    fontSize:"25px",
    margin: theme.spacing(5),
    backgroundImage: `url(${imgButton})`,
    bzackgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    // width:400,
    // height:100
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.itemsContainer}>
        <img className={classes.image} src={headerRight} />
      </div>

      <div className={classes.itemsContainer}>
        <img className={classes.wellcome} src={wellcome} />
      </div>
      <div className={classes.itemsContainer}>
        <img className={classes.soulword} src={soulword} />
      </div>
      <div className={classes.itemsContainer}>
        {/* <h1 className={classes.text_h1}>PLAY NOW</h1>
        <img className={classes.imgButton} src={imgButton} /> */}
        <Button variant="contained" color="primary" className={classes.margin}>
          PLAY NOW
        </Button>

      </div>
    </div>
  );
};

export default HomePage;
