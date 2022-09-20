import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SportsEsportsOutlined from '@material-ui/icons/SportsEsportsOutlined';
import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import TrendingUpOutlined from '@material-ui/icons/TrendingUpOutlined';
import React from 'react';
// import sword from '../../assets/sword.png';
// import bigknife from '../../assets/bigknife.png';
// import tessen from '../../assets/tessen.png';
// import bow from '../../assets/bow.png';
// import gun from '../../assets/gun.png';
// import sceptre from '../../assets/sceptre.png';
// import magicvase from '../../assets/magicvase.png';
// import armor from '../../assets/armor1.png';
// import helmet from '../../assets/helmet3.png';
// import wing from '../../assets/wing3.png';
// import monut from '../../assets/mount.jpg';
import cardFrame from '../../assets/sword_soul_bg.png';
import sword from '../../assets/sword.png';
import bigknife from '../../assets/sword.png';
import tessen from '../../assets/sword.png';
import bow from '../../assets/sword.png';
import gun from '../../assets/sword.png';
import sceptre from '../../assets/sword.png';
import magicvase from '../../assets/sword.png';
import armor from '../../assets/sword.png';
import helmet from '../../assets/sword.png';
import wing from '../../assets/sword.png';
import monut from '../../assets/sword.png';
import video from '../../assets/sword.mp4';
import { Card } from '@material-ui/core';
import background_sword from '../../assets/background_sword.png';
import Sword_bg from '../../assets/Sword_bg.png';
import Sword_main from '../../assets/Sword_main.png';
import Sword_bar from '../../assets/Sword_bar.png';
import soul_fire from '../../assets/sword_soul_fire.png';
import soul_metal from '../../assets/sword_soul_metal.png';
import soul_earth from '../../assets/sword_soul_earth.png';
import soul_water from '../../assets/sword_soul_water.png';
import soul_poison from '../../assets/sword_soul_poison.png';
import sword_detail_metal from '../../assets/sword_details_metal.png';
import sword_detail_dps from '../../assets/sword_detail_dps.png';
import sword_detail_end from '../../assets/sword_detail_end.png';
import sword_detail_bonuns from '../../assets/sword_detail_bonuns.png';
import sword_detail_dpscounter from '../../assets/sword_detail_dpscounter.png';
import sword_effect_yellow from '../../assets/sword_effect_yellow.png';
import sword_effect_blue from '../../assets/sword_effect_blue.png';
import sword_effect_violet from '../../assets/sword_effect_violet.png';
import sword_bg_detail from '../../assets/sword_bg_detail.png';
import sword_detai_icon_fire from '../../assets/sword_detai_icon_fire.png';
import { CenterFocusStrong } from '@material-ui/icons';
import sword_farme_metal from  '../../assets/sword_farme_metal.png';
import sword_farme_wood from  '../../assets/sword_farme_wood.png';
import sword_farme_water from  '../../assets/sword_farme_water.png';
import sword_farme_fire from  '../../assets/sword_farme_fire.png';
import sword_farme_earth from  '../../assets/sword_farme_earth.png';
import transitions from '@material-ui/core/styles/transitions';
const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down('md')]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: 'flex',
      justifyContent: 'center',
    },
    backgroundImage: `url(${background_sword})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // width: '100vw',
    // height: '100vh',
  },
  image: {
    marginTop: 0,
    marginLeft: 10,
    width: 50,
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
  itemsContainerSword: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: 30,
    flexWrap: 'wrap',
  },
  itemsContainerSwordBar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexWrap: 'wrap',

  },
  itemGroup: {
    // maxWidth: 600,
    //width: '50%',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundImage: `url(${Sword_bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: "32vw",
    height: "12vh",
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  heading: {
    fontFamily: 'Trajan Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '35px',
    lineHeight: '160%',
    /* or 32px */
    textAlign: 'center',
    letterSpacing: '0.05em',
    color: '#FFFFFF'
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.7px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',

    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      paddingTop: 5,
      marginTop: 0,
    },
  },
  title: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 24,
    color: 'yellow',
    // fontFamily: 'Balsamiq Sans',
    fontFamily: 'Exo 2',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width: 300,
    height: '100%',
    backgroundColor: '#ffb74d',
    border: '3px solid #757575',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
    url('https://media.istockphoto.com/photos/fire-flames-isolated-on-black-picture-id1138307761?k=6&m=1138307761&s=612x612&w=0&h=88Awwf62GbZb26IMLWv8I66D7WU_P_voCdzZEBu4Bvo=')`,
    backgroundSize: 'cover',
    marginBottom: 40,
  },
  textWrapper: {
    backgroundColor: '#e5e5e5',
    width: '100%',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  sword: {
    width: '20%',
    marginTop: '2vh',
    marginLeft: '80vh',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  Sword_main: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 400,
    },
  },
  Sword_bar: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  frameCard: {
    background: `url(${cardFrame})`,
    backgroundRepeat: 'no-repeat',
    bzackgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 80,
    width: 90,
    backgroundSize: 'contain',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    '&:hover': {
      //backgroundColor: '#17E3E0',
      // background-color: ${theme.palette.secondary.main},
      transform: "scale(1.3)"
      },
  },
  frameCardBottom: {
    // background: `url(${sword_bg_detail})`,
    backgroundRepeat: 'no-repeat',
    height: 300,
    width: 250,
    backgroundSize: 'contain',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  frameCardDetails: {
    background: `url(${sword_bg_detail})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 450,
    width: 250,
    backgroundSize: 'contain',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  frameImage: {
    position: 'absolute',
    top: '5%',
    left: '10%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  frameImageBottom: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:"center",
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  frameImageDetails: {
    // position: 'absolute',
    // // top: '5%',
    // // left: '5%',
    // [theme.breakpoints.down('md')]: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    // },
  },
  
  listItems: {},
  listItem: {
    marginBottom: 10,
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
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
  itemDetails: {
    // justifyContent: 'space-around',
    paddingLeft: 150,
    paddingTop: 120,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  itemMaster: {
    width: '33%',
    justifyContent: 'space-around',
  },
  itemDetailsIcon: {
    verticalAlign: 'middle',
    display: 'flex',
  },
  attribue_h1: {
    color: 'white'
  },
  attribue_text: {
    fontFamily: 'Exo',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "43.3333px",
    lineHeight: "120%",
    textAlign: "CenterFocusStrong",
    textTransform: "capitalize",
    color: "#FCA733",
  },
  attribue_story: {
    fontFamily: 'Trajan Pro',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '182.5%',
    textAlign: 'right',
    letterSpacing: '0.05em',
    color: '#FFFFFF',
  },
  frameText: {
    position: 'relative',
    top: '44%',
    display: 'flex',
    justifyContent: 'center',
  },
  frameStats: {
    position: 'absolute',
    top: '64%',
    left: '10%',
    [theme.breakpoints.down('md')]: {
      top: '65%',
    },
  },
  frameList: {
    fontWeight: '500',
    lineHeight: 1.2,
    color: 'black',
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
      lineHeight: 1.4,
    },
  },
  frameListMount: {
    fontWeight: '500',
    lineHeight: 1.1,
    color: 'black',
    fontSize: 13,
  },
  imageDetails: {
    marginTop: 0,
    marginLeft: 10,
    marginRight: 20,
    top:1,
    width: 40,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  imageEffect: {
    marginTop: 0,
    marginLeft: 300,
    marginRight: 20,
    // width: 60,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  imageEffectBlue: {
    marginTop: 0,
    // marginLeft: 300,
    marginRight: 20,
    // width: 60,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  imageSwordDetails: {
    marginTop: 0,
    marginLeft: 10,
    // display: 'flex',
    backgroundPosition: 'center',
    // width: 30,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  subheading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  imageDetailBottom: {
    marginTop: 0,
    marginLeft: 0,
    width: 140,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:"center",
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));

const Swords = () => {
  const classes = useStyles();
  let items = [
    {
      id: '1',
      name: 'Metal',
      image: soul_metal,
      imageDetail: sword_farme_metal,
      frameCardBottom:{
       background: `url(${sword_bg_detail})`,
        backgroundRepeat: 'no-repeat',
        height: 300,
        width: 250,
        backgroundSize: 'contain',
        position: 'relative',
 
      },
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
      id: '2',
      name: 'Posion',
      image: soul_poison,
      imageDetail: sword_farme_wood,
      frameCardBottom:{
        // background: `url(${sword_bg_detail})`,
       backgroundRepeat: 'no-repeat',
       height: 300,
       width: 250,
       backgroundSize: 'contain',
       position: 'relative',
     },
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
      id: '3',
      name: 'Fire',
      image: soul_fire,
      imageDetail: sword_farme_fire,
      frameCardBottom:{
        // background: `url(${sword_bg_detail})`,
       backgroundRepeat: 'no-repeat',
       height: 300,
       width: 250,
       backgroundSize: 'contain',
       position: 'relative',
  
     },
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
      id: '4',
      name: 'Water',
      image: soul_water,
      imageDetail: sword_farme_water,
      frameCardBottom:{
        // background: `url(${sword_bg_detail})`,
       backgroundRepeat: 'no-repeat',
       height: 300,
       width: 250,
       backgroundSize: 'contain',
       position: 'relative',
  
     },
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
    {
      id: '5',
      name: 'Earth',
      image: soul_earth,
      imageDetail: sword_farme_earth,
      frameCardBottom:{
        // background: `url(${sword_bg_detail})`,
       backgroundRepeat: 'no-repeat',
       height: 300,
       width: 250,
       backgroundSize: 'contain',
       position: 'relative',
     },
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 36</li>
              <li>Bonus: +5%</li>
              <li>Accuracy: +3</li>
            </ul>
          </p>
        </div>
      ),
    }
  ];
  return (

    <div className={classes.background}>
      <div className={classes.itemsContainer}>
        <img className={classes.Sword_main} src={Sword_main} />
      </div>
      <div className={classes.itemsContainer}>
        {items.map((item) => {
          return (
            <div key={item.id} className={classes.frameCard}>
              <div className={classes.frameImage}>
                <img className={classes.image} src={item.image} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.itemsContainer}>
      <div className={classes.itemMaster}>
        <div className={classes.itemsContainer}>
          <div>
            <h1 className={classes.attribue_h1}> <span>Attribues</span></h1>
            <div className={classes.itemDetailsIcon}>
              <img className={classes.imageDetails} src={soul_fire} /><p className={classes.attribue_h1}>Class</p>
            </div>
            <div className={classes.itemDetailsIcon}>
              <img className={classes.imageDetails} src={soul_metal} /><p className={classes.attribue_h1}>Class Counter</p>
            </div>
            <h1 className={classes.attribue_h1}> <span>Stength state:</span></h1>
            <div className={classes.itemDetailsIcon}>
              <img className={classes.imageDetails} src={sword_detail_dps} /><p className={classes.attribue_h1}>Damage</p>
            </div>
            <div className={classes.itemDetailsIcon}>
              <img className={classes.imageDetails} src={sword_detail_end} /><p className={classes.attribue_h1}>Endurace</p>
            </div >
            <div className={classes.itemDetailsIcon}>
              <img className={classes.imageDetails} src={sword_detail_bonuns} /><p className={classes.attribue_h1}>Bonus Rewara</p>
            </div>
            <div className={classes.itemDetailsIcon}>
              <img className={classes.imageDetails} src={sword_detail_dpscounter} /><p className={classes.attribue_h1}>Damage Counter</p>
            </div>
          </div>
        </div>
        </div>
        <div className={classes.itemMaster}>
        <div className={classes.itemsContainer}>
          <div className={classes.frameCardDetails}>
              <div className={classes.frameImageDetails}>
                <img className={classes.imageSwordDetails}  />
              </div>
            </div>
        </div>
        </div>
        

        <div className={classes.itemMaster}>
          <div className={classes.itemDetailsIcon}>
            <h1 className={classes.attribue_text}> <span>Tizona</span></h1>
          </div>
          <p className={classes.attribue_story}>
            There are a diversity of SWORD, which comes from the perfect combination of 5 SWORD Classes and Elements, and  Each SWORD will become unique and worthwhile in your collection.
          </p>
        </div>
      </div>
      <div className={classes.itemsContainer}>
        {items.map((item) => {
          return (
            <div key={item.id} className={item.frameCardBottom}>
              <div className={classes.frameImageBottom}>
                <img className={classes.imageDetailBottom} src={item.imageDetail} />
                {/* <img className={classes.imageDetailBottom} /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default Swords;
