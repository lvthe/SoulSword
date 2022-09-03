import { Card } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
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
  cardWrapper: {
    padding: 5,
  },
}));

const Investor = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>
        Investors and Partners<strong className={classes.highlight}></strong>
      </h6>
      <div className={classes.listingsWrapper}>
        <div className={classes.cardWrapper}>
          <Card className={classes.card}>
            <a className={classes.listItem} href="https://polkabridge.org/">
              <img src="assets/polkabridge.png" alt="logo" className={classes.imageWrapper} />
            </a>
          </Card>
        </div>
        <div className={classes.cardWrapper}>
          <Card className={classes.card}>
            <a className={classes.listItem} href="http://chinapolka.com/">
              <img src="assets/chinapolka.png" alt="logo" className={classes.imageWrapper} />
            </a>
          </Card>
        </div>
        <div className={classes.cardWrapper}>
          <Card className={classes.card}>
            <a className={classes.listItem}>
              <img src="assets/bmwcapital.png" alt="logo" className={classes.imageWrapperBMW} />
            </a>
          </Card>
        </div>
      </div>
      <div className={classes.listingsWrapper}>
        <div className={classes.cardWrapper}>
          <Card className={classes.card}>
            <a className={classes.listItem} href="https://quiverx.io/">
              <img src="assets/quiverx.png" alt="logo" className={classes.imageWrapper} />
            </a>
          </Card>
        </div>

        <div className={classes.cardWrapper}>
          <Card className={classes.card} style={{ backgroundColor: '#000000', border: '1px solid #ffffff' }}>
            <a className={classes.listItem} href="https://oddiyana.ventures">
              <img src="assets/oddinaya.png" alt="logo" className={classes.imageWrapper} style={{ padding: 0 }} />
            </a>
          </Card>
        </div>
        <div className={classes.cardWrapper}>
          <Card className={classes.card} href="https://yellowroad.app/">
            <a className={classes.listItem}>
              <img src="assets/yellow.png" alt="logo" className={classes.imageWrapper} />
            </a>
          </Card>
        </div>
      </div>
      <div className={classes.listingsWrapper}>
        <div className={classes.cardWrapper}>
          <Card className={classes.card}>
            <a className={classes.listItem} href="https://www.daostarter.pro">
              <img src="assets/daostater.png" alt="logo" className={classes.imageWrapper} />
            </a>
          </Card>
        </div>

        <div className={classes.cardWrapper}>
          <Card className={classes.card}>
            <a className={classes.listItem} href="https://duckstarter.io">
              <img src="assets/DuckStarter.svg" alt="logo" className={classes.imageWrapper} />
            </a>
          </Card>
        </div>
        <div className={classes.cardWrapper}>
          <Card className={classes.card}>
            <a className={classes.listItem} href="https://unifarm.co/">
              <img src="assets/unifarm.png" alt="logo" className={classes.imageWrapper} />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Investor;