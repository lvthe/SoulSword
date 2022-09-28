
import makeStyles from '@material-ui/core/styles/makeStyles';
import { List } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import React from 'react';
import cardFrame from '../../assets/sword_soul_bg.png';

import sword_bg_metal from '../../assets/sword_bg_metal.png';
import sword_bg_wood from '../../assets/sword_bg_wood.png';
import sword_bg_fire from '../../assets/sword_bg_fire.png';
import sword_bg_water from '../../assets/sword_bg_water.png';
import sword_bg_earth from '../../assets/sword_bg_earth.png';

import background_sword from '../../assets/background_sword.png';
import Sword_bg from '../../assets/Sword_bg.png';
import Sword_main from '../../assets/Sword_main.png';
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
import sword_farme_metal from '../../assets/sword_farme_metal.png';
import sword_farme_wood from '../../assets/sword_farme_wood.png';
import sword_farme_water from '../../assets/sword_farme_water.png';
import sword_farme_fire from '../../assets/sword_farme_fire.png';
import sword_farme_earth from '../../assets/sword_farme_earth.png';
import sword_m_fire from '../../assets/sword_m_fire.gif';
import sword_m_metal from '../../assets/sword_m_metal.gif';
import sword_m_water from '../../assets/sword_m_water.gif';
import sword_m_wood from '../../assets/sword_m_wood.gif';
import sword_m_earth from '../../assets/sword_m_earth.gif';
import sword_bg_soul_ac from '../../assets/sword_bg_soul_ac.png';
import sword_d_fire from '../../assets/sword_d_fire.gif';
import sword_d_metal from '../../assets/sword_d_metal.gif';
import sword_d_water from '../../assets/sword_d_water.gif';
import sword_d_wood from '../../assets/sword_d_wood.gif';
import sword_d_earth from '../../assets/sword_d_earth.gif';
import soul_a_fire from '../../assets/sword_a_fire.png';
import soul_a_metal from '../../assets/sword_a_metal.png';
import soul_a_water from '../../assets/sword_a_water.png';
import soul_a_wood from '../../assets/sword_a_wood.png';
import soul_a_earth from '../../assets/sword_a_earth.png';

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
    width: 75,
    [theme.breakpoints.down('md')]: {
      width: 25,
      marginLeft: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },

  },
  imageD: {
    marginTop: 0,
    marginLeft: 10,
    width: 85,
    height: 140,
    //top:"5%",
    '&:hover': {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down('md')]: {
       width: 55,
       height: 89,
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
    //background: `url(${cardFrame})`,
    backgroundRepeat: 'no-repeat',
    bzackgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 80,
    width: 90,
    //left: "58%",
    backgroundSize: 'contain',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 27,
      width: 25,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '&:hover': {
        transform: "scale(1.05)",
        backgroundImage: `url(${sword_bg_soul_ac})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
    },
    '&:hover': {
      transform: "scale(1.3)",
      backgroundImage: `url(${sword_bg_soul_ac})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
  frameCardBottom: {
     background: `url(${sword_bg_detail})`,
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     backgroundSize: 'cover',
     height: 200,
     width: 100,
     backgroundSize: 'contain',
     position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  frameCardDetails: {
    //background: `url(${sword_bg_detail})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 450,
    width: 250,
    backgroundSize: 'contain',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 300,
    // width: 250,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  frameImage: {
    position: 'absolute',
     top: '5%',
     left: '-2%',
    [theme.breakpoints.down('md')]: {
      with:25,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  frameImageD: {
    position: 'absolute',
     top: '14%',
     left: '-2%',
     
    [theme.breakpoints.down('md')]: {
      top: '6%',
      left: '12%',
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
    alignItems: "center",
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
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize:10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
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
    [theme.breakpoints.down('md')]: {
      fontSize:25,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
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
    [theme.breakpoints.down('md')]: {
      fontSize:10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
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
    top: 1,
    width: 50,
    height: 50,
    [theme.breakpoints.down('md')]: {
      width: 25,
      height:25,
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
    backgroundPosition: 'center',
    height: 400,
    [theme.breakpoints.down('md')]: {
      height: 200,
      
      // display: 'flex',
      // flexDirection: 'column',
       justifyContent: 'top',
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
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));

const Swords = () => {
  const classes = useStyles();

  let masters = [
    {
      id: "999",
      bg_defautl: background_sword,
      items: [
        {
          id: 'btn-metal',
          name: 'Backbiter',
          image: soul_metal,
          active: true,
          imageDetailBG: sword_bg_metal,
          imageClass:soul_a_metal,
          imageClassCounter:soul_a_wood,
          backgroundMain : sword_farme_metal,
          textDetail:"There are a diversity of SWORD, which comes from the perfect combination of 5 SWORD Classes and Elements, and Each SWORD will become unique and worthwhile in your collection.",
          img_m:sword_m_metal,
          img_sword_d:sword_d_metal,
          img_farme:sword_bg_detail
        },
        {
          id: 'btn-wood',
          name: 'Grimsever',
          image: soul_poison,
          active: true,
          imageDetailBG: sword_bg_wood,
          imageClass:soul_a_wood,
          imageClassCounter:soul_a_earth,
          backgroundMain : sword_farme_wood,
          textDetail:"There are a diversity of SWORD, which comes from the perfect combination of 5 SWORD Classes and Elements, and Each SWORD will become unique and worthwhile in your collection.",
          img_m:sword_m_wood,
          img_sword_d:sword_d_wood,
          img_farme:sword_bg_detail
          
        },
        {
          id: 'btn-fire',
          name: 'Tizona',
          image: soul_fire,
          active: true,
          imageDetailBG: sword_bg_fire,
          imageClass:soul_a_fire,
          imageClassCounter:soul_a_metal,
          backgroundMain : sword_farme_fire,
          textDetail:"There are a diversity of SWORD, which comes from the perfect combination of 5 SWORD Classes and Elements, and Each SWORD will become unique and worthwhile in your collection.",
          img_m:sword_m_fire,
          img_sword_d:sword_d_fire,
          img_farme:sword_bg_detail
        },
        {
          id: 'btn-water',
          name: 'Shisui',
          image: soul_water,
          active: true,
          imageDetailBG: sword_bg_water,
          imageClass:soul_a_water,
          imageClassCounter:soul_a_fire,
          backgroundMain : sword_farme_water,
          textDetail:"There are a diversity of SWORD, which comes from the perfect combination of 5 SWORD Classes and Elements, and Each SWORD will become unique and worthwhile in your collection.",
          img_m:sword_m_water,
          img_sword_d:sword_d_water,
          img_farme:sword_bg_detail
          
        },
        {
          id: 'btn-earth',
          name: 'Caliburn',
          image: soul_earth,
          active: true,
          imageDetailBG: sword_bg_earth,
          imageClass:soul_a_earth,
          imageClassCounter:soul_a_water,
          backgroundMain : sword_farme_earth,
          textDetail:"There are a diversity of SWORD, which comes from the perfect combination of 5 SWORD Classes and Elements, and Each SWORD will become unique and worthwhile in your collection.",
          img_m:sword_m_earth,
          img_sword_d:sword_d_earth,
          img_farme:sword_bg_detail
          
        }
      ]
    }

  ];
  const [activeLinkId, setActiveLinkId] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [hover, setHover] = React.useState(false);
  const createCss = (id: number, bgI: string, bgI_df: string, imgClass: String, imgClassCounter, bgMainI: string, text_m: string, text_d: string, img_m:string) => {

    document.getElementById("sword_bg_master").style.backgroundImage = `url(${bgI})`;
    let i_imgClass = document.querySelector("#sword_img_class");
    i_imgClass.setAttribute("src", imgClass)

    let i_imgClassCounter = document.querySelector("#sword_img_class_counter");
    i_imgClassCounter.setAttribute("src", imgClassCounter)
    
    //document.getElementById("backgroundFrame").style.backgroundImage = `url(${bgMainI})`;
    
    document.getElementById("text_main").innerHTML = text_m;  
    document.getElementById("text_detail").innerHTML = text_d;  

    let i_img_main_sword = document.querySelector("#img_main_sword");
    i_img_main_sword.setAttribute("src", img_m)
    
    console.log("id " , id );
    const btn = document.querySelector("#btn-metal");
			btn.classList.add('hover');

    //backgroundFrame  


  };

  return (
    <div>
      {masters.map((master, id) => {
        return (
          <div key={master.items.id} id="sword_bg_master" className={classes.background}  >
            <div className={classes.itemsContainer}>
              <img className={classes.Sword_main} src={Sword_main} />
            </div>
            <div className={classes.itemsContainer}>
              {master.items.map((item) => {
                return (
                  <div className={classes.itemsContainer}>
                    <div key={item.id} className={classes.frameCard} onClick={() => { createCss(  item.id, 
                                                                                                  item.imageDetailBG, 
                                                                                                  master.items.bg_defautl,
                                                                                                  item.imageClass, 
                                                                                                  item.imageClassCounter, 
                                                                                                  item.backgroundMain,
                                                                                                  item.name,
                                                                                                  item.textDetail,
                                                                                                  item.img_m
                                                                                                ) }}  >
                      <div id={item.id} className={classes.frameImage}>
                        <img className={classes.image} src={item.image} />
                      </div>
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
                      <img id="sword_img_class" className={classes.imageDetails} src={soul_a_fire} /><p className={classes.attribue_h1}>Class</p>
                    </div>
                    <div className={classes.itemDetailsIcon}>
                      <img id="sword_img_class_counter" className={classes.imageDetails} src={soul_a_metal} /><p className={classes.attribue_h1}>Class Counter</p>
                    </div>
                    <h1 className={classes.attribue_h1}> <span>Stength state:</span></h1>
                    <div className={classes.itemDetailsIcon}>
                      <img className={classes.imageDetails} src={sword_detail_dps} /><p className={classes.attribue_h1}>Damage</p>
                    </div>
                    <div className={classes.itemDetailsIcon}>
                      <img className={classes.imageDetails} src={sword_detail_end} /><p className={classes.attribue_h1}>Endurance</p>
                    </div >
                    <div className={classes.itemDetailsIcon}>
                      <img className={classes.imageDetails} src={sword_detail_bonuns} /><p className={classes.attribue_h1}>Bonus Reward</p>
                    </div>
                    <div className={classes.itemDetailsIcon}>
                      <img className={classes.imageDetails} src={sword_detail_dpscounter} /><p className={classes.attribue_h1}>Damage Counter</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.itemMaster}>
                <div className={classes.itemsContainer}>
                  <div  className={classes.frameCardDetails}>
                    <div className={classes.frameImageDetails}>
                      <img id="img_main_sword" className={classes.imageSwordDetails} src={sword_m_fire} />
                    </div>
                  </div>
                </div>
              </div>


              <div className={classes.itemMaster}>
                <div className={classes.itemDetailsIcon}>
                  <h1 id="text_main" className={classes.attribue_text}><span>Tizona</span></h1>
                </div>
                <p id="text_detail" className={classes.attribue_story}>
                  There are a diversity of SWORD, which comes from the perfect combination of 5 SWORD Classes and Elements, and  Each SWORD will become unique and worthwhile in your collection.
                </p>
              </div>
            </div>
            <div className={classes.itemsContainer}>
              {master.items.map((item) => {
                return (
                  <div className={classes.itemsContainer}>
                    <div key={item.id} className={classes.frameCardBottom} onClick={() => { createCss(  item.id, 
                                                                                                  item.imageDetailBG, 
                                                                                                  master.items.bg_defautl,
                                                                                                  item.imageClass, 
                                                                                                  item.imageClassCounter, 
                                                                                                  item.backgroundMain,
                                                                                                  item.name,
                                                                                                  item.textDetail,
                                                                                                  item.img_m
                                                                                                ) }}>
                      <div className={classes.frameImageD}>
                        <img className={classes.imageD} src={item.img_sword_d} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>    
          </div>
        );
      })}
    </div>
  );
};



export default Swords;
