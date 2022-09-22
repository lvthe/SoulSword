import { Card } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import investor_bg from '../../assets/investor_bg.png';
import investor_content from '../../assets/investor_content.png';
import investor_details from '../../assets/investor_details.png';
import video from '../../assets/investor_1.png';
import investor_1 from '../../assets/investor_1.png';
import investor_2 from '../../assets/investor_2.png';
import investor_3 from '../../assets/investor_3.png';
import investor_4 from '../../assets/investor_4.png';
import cardFrame from '../../assets/investor_bg_detail.png';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 80,
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
  frameCard: {
    height: 180,
    width: 300,
    backgroundSize: 'contain',
    position: 'relative',
  },
  frameImage: {
    background: `url(${cardFrame})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'absolute',
    top: '8%',
    left: '20%',
    width: 170,

    [theme.breakpoints.down('md')]: {
      width: 160
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
  frameText: {
    position: 'relative',
    top: '44%',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "Trajan Pro",
    fontStyle: "Bold",
    fontSize: "15.08px",
    lineHeight: "18px",
    lineHeight: "120%",
    align:"Center",
    verticalAlign:"Top",
    color:"#DAA520"
  },
  investor_content:{
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width:"100%"
    },
  },
  frameStats: {
    top: '64%',
    textAlign:"left",
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      top: '65%',
    },
  },
  image: {
     marginTop: 5,
    marginLeft: 5,
    // height: 160,
    // width: 190,

    [theme.breakpoints.down('sm')]: {
      width: 150,
      // height: 150,
      // marginTop: 15,
      // marginBottom: 10,
    },
  },
}));

const Investor = () => {
  const classes = useStyles();
  let items = [
    {
      name: 'Invistor 1',
      image: investor_1,
      listData: (
        <div>
          {' '}
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Text 1</li>
              <li>Text 2</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Invistor 2',
      image: investor_2,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Text 1</li>
              <li>Text 2</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Invistor 3',
      image: investor_3,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Text 1</li>
              <li>Text 2</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Invistor 4',
      image: investor_4,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Text 1</li>
              <li>Text 2</li>
            </ul>
          </p>
        </div>
      ),
    }
  ];
  return (
    <div className={classes.background}>
      <div className={classes.itemsContainer}>
        <img  className={classes.investor_content}  src={investor_content} />
      </div>
      <div className={classes.itemsContainerBody}>
          {items.map((item) => {
            return (
              <div >
                <div className={classes.frameCard}>
                  <div className={classes.frameImage}>
                    <img className={classes.image} src={item.image} />
                  </div>
                </div>
                <div className={classes.frameText}>
                    <h5 className={classes.title}>{item.name}</h5>
                  </div>
                  <div>
                    <div className={classes.frameStats}>{item.listData}</div>
                  </div>
                  
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Investor;
