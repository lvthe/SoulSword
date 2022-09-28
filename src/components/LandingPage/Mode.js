import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import mode_bg from '../../assets/mode_bg.png';
import mode_sword from '../../assets/mode_sword.png';
import mode_img   from '../../assets/feature_img.png';
import video from '../../assets/sword.mp4';
import mode_battle from '../../assets/mode_battle.png';
import mode_boss from '../../assets/mode_boss.png';
import mode_stacking from '../../assets/mode_stacking.png';
import mode_combat from '../../assets/mode_combat.png';
import cardFrame from '../../assets/mode_bg_detail.png';


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
  // itemsContainer: {
  //   display: 'flex',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   width: '50%',
  //   marginTop: 20,
  //   [theme.breakpoints.down('md')]: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //   },
  // },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: 30,
    flexWrap: 'wrap',
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
  imageD: {
    marginTop: 4,
    marginLeft: 5,
    width: 238,
    
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // padding:'10px'
    },
  },
  mode_img:{
    width:"45%",
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width:"100%",
      
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
  frameImage: {
    background: `url(${cardFrame})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height:370,
    width:250,
    position: 'relative',
    //left:"3%",
    //top:"8%",
    // top: '5%',
    // left: '10%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    '&:hover': {
        transform: "scale(1.05)",
        color: '#FFA800',
        opacity: 1
    },
    '&:disabled': {
        backgroundColor: "#A7A9AC",
    },
    
  },
  frameCard: {
    // background: `url(${cardFrame})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    position: 'relative',
    '&:hover': {
      transform: "scale(1.05)"
    },
    [theme.breakpoints.down('md')]: {
      // height: 40,
      // width: 45,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  

}));


const Feature = () => {
  const classes = useStyles();
  let items = [
    {
      name: 'Battle',
      image: mode_battle,
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
      name: 'Boss',
      image: mode_boss,
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
      name: 'Combat',
      image: mode_combat,
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
      name: 'Stacking',
      image: mode_stacking,
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
        <img  className={classes.mode_img} src={mode_img} />
      </div>
      <div className={classes.itemsContainer}>
          {items.map((item) => {
            return (
                <div key={item.id} className={classes.frameCard}>
                  <div className={classes.frameImage}>
                    <img className={classes.imageD} src={item.image} />
                  </div>
                </div>
            );
          })}
      </div>
    </div>
  );
};
export default Feature;
