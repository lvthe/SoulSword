import React from 'react';
import headerRight from '../../assets/header-right.png';
import { makeStyles, Button, Typography } from '@material-ui/core';
import image from '../../assets/background_home.png';
import wellcome from '../../assets/WELCOMETO.png';
import soulword from '../../assets/SOULSWORD.png';
const useStyles = makeStyles((theme) => ({
  background: {
    //minHeight: '80vh',
    color: 'white',
    //textShadow: '3px 4px black',
    // paddingLeft: 100,
    // [theme.breakpoints.down('md')]: {
    //   minHeight: 500,
    //   marginTop: 0,
    //   paddingLeft: 10,
    // },
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    
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
  image: {
    width: '40%',
    //margin: auto,
    marginTop: '18vh',
    marginLeft: '60vh',

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
    marginLeft: '80vh',
  },
  soulword: {
    width: '35%',
    //margin: auto,
    marginTop: '5vh',
    marginLeft: '65vh',
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
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
       {/* <div className="container"> */}
        <div className="row">
          <div className="col-md-12">
          </div>
          <div className="col-md-12">
            <div>
              <img className={classes.image} src={headerRight} />
            </div>
          </div>
          <div className="col-md-12">
            <div>
              <img className={classes.wellcome} src={wellcome} />
            </div>
          </div>
          <div className="col-md-12">
            <div>
              <img className={classes.soulword} src={soulword} />
            </div>
          </div>
          </div>
        </div>
    // </div>
  );
};

export default HomePage;
