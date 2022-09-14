import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import SportsEsportsOutlined from '@material-ui/icons/SportsEsportsOutlined';
import TrendingUpOutlined from '@material-ui/icons/TrendingUpOutlined';

import mode_bg from '../../assets/mode_bg.png';
import mode_sword from '../../assets/mode_sword.png';
const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 50,
    paddingRight: 50,
    backgroundImage: `url(${mode_bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10,
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: 'flex',
      justifyContent: 'center',
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
  item: {
    marginBottom: 40,
    maxWidth: 400,
    marginLeft: 12,
    marginRight: 12,
    padding: 30,
    height: '350px',
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
    
  },
  heading: {
    // color: theme.palette.pbr.textPrimary,
    color: theme.palette.pbr.heading,
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 15,
      fontSize: 24,
      marginBottom: 25,
    },
  },
  image: {
    // width: '40%',
    // marginTop: '18vh',
    // marginLeft: '60vh',
  },
  subHeading: {
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 15,
      marginBottom: 25,
    },
  },
  para: {
    color: theme.palette.pbr.textPrimary,
    verticalAlign: 'baseline',
    // letterSpacing: "-0.7px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      paddingTop: 5,
      marginTop: 0,
    },
  },
  subheading: {
    color: theme.palette.pbr.textPrimary,
  },
}));

const Feature = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>SoulSword Mode</h6>

      <div className={classes.itemsContainer}>
      <img className={classes.image} src={mode_sword} />
      </div>
    </div>
  );
};

export default Feature;
