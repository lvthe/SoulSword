import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import tokenomics_back from '../../assets/tokennomic_bg.png';
import tokenomics_content from '../../assets/tokenomics_content.png';
import tokenomics_table from '../../assets/tokenomics_table.png';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50, 
    paddingRight: 50,
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: 'flex',
      justifyContent: 'center',
    },
    backgroundImage: `url(${tokenomics_back})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  heading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    paddingTop: 0,
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      marginBottom: 45,
      alignSelf: 'center',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 60,
    backgroundColor: 'black',
    opacity: 0.6,
    padding: 40,
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      padding: 10,
    },
  },
  listText: {
    color: theme.palette.pbr.textSecondary,
    fontSize: 24,
    fontWeight: 400,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
    },
  },
  image: {
    width: 700,
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      marginTop: 10,
    },
  },
  tokenomics_content:{
    
  },
  itemsContainer: {
   display: 'flex',
   justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 30,
    flexWrap: 'wrap',
  },
  itemsContainerDetails: {
    display: 'flex',
    // justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  listItems: {},
  listItem: {
    marginBottom: 10,
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },
  subheading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  displayMobile: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  displayDesktop: {
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const Tokenomics = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.itemsContainer}>
        <img className={classes.tokenomics_content} src={tokenomics_content} />
      </div>
      <div className={classes.itemsContainer}>
        <img className={classes.tokenomics_table} src={tokenomics_table} />
      </div>
    </div>
  );
};

export default Tokenomics;
