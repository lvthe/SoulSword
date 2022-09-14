import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import mode_bg from '../../assets/mode_bg.png';
import mode_sword from '../../assets/mode_sword.png';
import mode_img   from '../../assets/feature_img.png';
import video from '../../assets/sword.mp4';
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
    width:"60%",
    display:'flex',
    flex:'2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
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
  let items = [
    {
      name: 'Sword Ice',
      listData: (
        <div>
          {' '}
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 30</li>
              <li>Bonus: +7%</li>
              <li>Accuracy: +5</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Sword Posion',
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 32</li>
              <li>Bonus: +5%</li>
              <li>Accuracy: +4</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Sword Fire',
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 26</li>
              <li>Bonus: +8%</li>
              <li>Accuracy: +4</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Sword Wind',
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 29</li>
              <li>Bonus: +9%</li>
              <li>Accuracy: +4</li>
            </ul>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className={classes.background}>
      <div className={classes.itemsContainer}>
        <img  src={mode_img} />
      </div>
      <div className={classes.itemsContainer}>
        {items.map((item) => {
          return (
            <div className={classes.frameCard}>
              <div className={classes.frameImage}>
               <video width="300" height="500" autoplay muted >
                <source src={video} type="video/mp4"/>
              </video>
              </div>
              {/* <div className={classes.frameText}>
                <h5 className={classes.title}>{item.name}</h5>
              </div>
              <div className={classes.frameStats}>{item.listData}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
