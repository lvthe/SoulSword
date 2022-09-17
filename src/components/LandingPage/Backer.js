import { Card } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import backer_bg from '../../assets/backer_bg.png';
import backer_content from '../../assets/backer_content.png';
import backer_icon1 from '../../assets/backer_icon1.png';
import backer_icon2 from '../../assets/backer_icon2.png';
import backer_icon3 from '../../assets/backer_icon3.png';
import backer_icon4 from '../../assets/backer_icon4.png';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 80,
    paddingBottom: 80,
    backgroundImage: `url(${backer_bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    paddingTop: 50,
    marginBottom: 40,

    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  para: {
    color: theme.palette.pbr.textPrimary,
    fontWeight: 600,
    fontSize: 18,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingBottom: 15,
    textAlign: 'center',
  },
  imageWrapper: {
    padding: 10,
    height: '65px',
    [theme.breakpoints.down('md')]: {
      height: '50px',
      padding: 15,
    },
  },
  imageWrapperBMW: {
    padding: 10,
    height: '70px',
    [theme.breakpoints.down('md')]: {
      height: '61px',
      padding: 10,
      paddingLeft: 2,
      paddingRight: 2,
    },
  },
  listingsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
  },
  listItem: {
    alignSelf: 'center',
    justifySelf: 'center',
  },
  card: {
    padding: 5,
    backgroundColor: '#e5e5e5',
    borderRadius: 12,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      width: 150,
    },
  },
  backer_content:{
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 400,
    },
  },
  frameImage: {
    paddingTop:"20px",
    // position: 'relative',
    // top: '5%',
    // left: '10%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  cardWrapper: {
    padding: 5,
  },
  imageDetails: {
    marginTop: 0,
    marginLeft: 10,
    marginRight: 20,
   // width: 100,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: 30,
    flexWrap: 'wrap',
  },
}));

const Investor = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.itemsContainer}>
        <img  className={classes.backer_content}  src={backer_content} />
      </div>
      <div className={classes.itemsContainer}>
        <div className={classes.frameImage }>
          <img className={classes.imageDetails } src={backer_icon1} />
          <img className={classes.imageDetails } src={backer_icon2} />
          <img className={classes.imageDetails } src={backer_icon3} />
          <img className={classes.imageDetails } src={backer_icon4} />
        </div>
      </div>
      <div className={classes.itemsContainer}>
        <div className={classes.frameImage }>
          <img className={classes.imageDetails } src={backer_icon1} />
          <img className={classes.imageDetails } src={backer_icon2} />
          <img className={classes.imageDetails } src={backer_icon3} />
          <img className={classes.imageDetails } src={backer_icon4} />
        </div>
      </div>
    </div>
  );
};

export default Investor;
