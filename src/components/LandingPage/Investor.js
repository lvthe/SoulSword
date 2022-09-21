import { Card } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import investor_bg from '../../assets/investor_bg.png';
import investor_content from '../../assets/investor_content.png';
import investor_details from '../../assets/investor_details.png';

import React from 'react';

const useStyles = makeStyles((theme) => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    // paddingTop: 80,
    // paddingBottom: 80,
    backgroundImage: `url(${investor_bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
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
  cardWrapper: {
    padding: 5,
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: 30,
    flexWrap: 'wrap',
    
  },
  itemsContainerBody: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: 30,
    flexWrap: 'wrap',
    border:"0.721511px solid #C6C6C6",
    borderRadius: "8.37971px"
  },
  investor_content:{
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width:"100%"
    },
  }
}));

const Investor = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.itemsContainer}>
        <img  className={classes.investor_content}  src={investor_content} />
      </div>
      <div className={classes.itemsContainerBody}>
        {/* <img className={classes.investor_content} src={investor_details} /> */}
          <div>

          </div>
          <div>

          </div>
          <div>
            
          </div>
      </div>
    </div>
  );
};

export default Investor;
