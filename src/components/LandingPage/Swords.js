
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
import sword_farme_metal from '../../assets/sword_farme_metal.png';
import sword_farme_wood from '../../assets/sword_farme_wood.png';
import sword_farme_water from '../../assets/sword_farme_water.png';
import sword_farme_fire from '../../assets/sword_farme_fire.png';
import sword_farme_earth from '../../assets/sword_farme_earth.png';
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
    top: 1,
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
          id: '1',
          name: 'Metal',
          image: soul_metal,
          active: true,
          imageDetailBG: sword_bg_metal,
          imageClass:soul_metal,
          imageClassCounter:soul_poison,
          frameCardBottom: {
            backgroundRepeat: 'no-repeat',
            height: 300,
            width: 250,
            backgroundSize: 'contain',
            position: 'relative',

          },
        },
        {
          id: '2',
          name: 'Posion',
          image: soul_poison,
          active: true,
          imageDetailBG: sword_bg_wood,
          imageClass:soul_poison,
          imageClassCounter:soul_earth,
          frameCardBottom: {
            backgroundRepeat: 'no-repeat',
            height: 300,
            width: 250,
            backgroundSize: 'contain',
            position: 'relative',
          },
        },
        {
          id: '3',
          name: 'Fire',
          image: soul_fire,
          active: true,
          imageDetailBG: sword_bg_fire,
          imageClass:soul_fire,
          imageClassCounter:soul_metal,
          frameCardBottom: {
            backgroundRepeat: 'no-repeat',
            height: 300,
            width: 250,
            backgroundSize: 'contain',
            position: 'relative',

          },
        },
        {
          id: '4',
          name: 'Water',
          image: soul_water,
          active: true,
          imageDetailBG: sword_bg_water,
          imageClass:soul_water,
          imageClassCounter:soul_fire,
          frameCardBottom: {
            backgroundRepeat: 'no-repeat',
            height: 300,
            width: 250,
            backgroundSize: 'contain',
            position: 'relative',

          },
        },
        {
          id: '5',
          name: 'Earth',
          image: soul_earth,
          active: true,
          imageDetailBG: sword_bg_earth,
          imageClass:soul_earth,
          imageClassCounter:soul_water,
          frameCardBottom: {
            backgroundRepeat: 'no-repeat',
            height: 300,
            width: 250,
            backgroundSize: 'contain',
            position: 'relative',
          },
        }
      ]
    }

  ];
  const [activeLinkId, setActiveLinkId] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const createCss = (id: number, bgI: string, bgI_df: string, imgClass: String, imgClassCounter) => {
    // if(bgI === undefined){
    //   bgI = bgI_df;
    // }
    // if (id === active) {
    //   console.log("  isActive  " + activeLinkId + " bgI:   " + bgI);
    //   return {
    //     backgroundImage: `url(${bgI})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat"
    //   };
    //  } else return {};
    document.getElementById("sword_bg_master").style.backgroundImage = `url(${bgI})`;
    // var img = document.createElement('sword_img_class');
    // img.src = `url(${imgClass})`;
    // document.getElementById('sword_img_class').appendChild(img);


    // document.getElementById("sword_img_class").style.backgroundImage = `url(${imgClass})`;
    // document.getElementById("sword_img_class_counter").style.backgroundImage = `url(${imgClassCounter})`;

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
                                                                                                ) }}  >
                      <div className={classes.frameImage}>
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
                      <img id="sword_img_class" className={classes.imageDetails} src={soul_fire} /><p className={classes.attribue_h1}>Class</p>
                    </div>
                    <div className={classes.itemDetailsIcon}>
                      <img id="sword_img_class_counter" className={classes.imageDetails} src={soul_metal} /><p className={classes.attribue_h1}>Class Counter</p>
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
                      <img className={classes.imageSwordDetails} />
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
          </div>

        );
      })}
    </div>








    // <div className={classes.background}>
    //   <div className={classes.itemsContainer}>
    //     <img className={classes.Sword_main} src={Sword_main} />
    //   </div>
    //   <div className={classes.itemsContainer}>
    //     {items.map((item) => {
    //       return (
    //         <div key={item.id} className={classes.frameCard} onClick={() => setActiveLinkId(item.id)} style={createCss(item.id, item.imageDetail)} >
    //           <div className={classes.frameImage}>
    //             <img className={classes.image} src={item.image} />
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    //   <div className={classes.itemsContainer}>
    //     <div className={classes.itemMaster}>
    //       <div className={classes.itemsContainer}>
    //         <div>
    //           <h1 className={classes.attribue_h1}> <span>Attribues</span></h1>
    //           <div className={classes.itemDetailsIcon}>
    //             <img className={classes.imageDetails} src={soul_fire} /><p className={classes.attribue_h1}>Class</p>
    //           </div>
    //           <div className={classes.itemDetailsIcon}>
    //             <img className={classes.imageDetails} src={soul_metal} /><p className={classes.attribue_h1}>Class Counter</p>
    //           </div>
    //           <h1 className={classes.attribue_h1}> <span>Stength state:</span></h1>
    //           <div className={classes.itemDetailsIcon}>
    //             <img className={classes.imageDetails} src={sword_detail_dps} /><p className={classes.attribue_h1}>Damage</p>
    //           </div>
    //           <div className={classes.itemDetailsIcon}>
    //             <img className={classes.imageDetails} src={sword_detail_end} /><p className={classes.attribue_h1}>Endurace</p>
    //           </div >
    //           <div className={classes.itemDetailsIcon}>
    //             <img className={classes.imageDetails} src={sword_detail_bonuns} /><p className={classes.attribue_h1}>Bonus Rewara</p>
    //           </div>
    //           <div className={classes.itemDetailsIcon}>
    //             <img className={classes.imageDetails} src={sword_detail_dpscounter} /><p className={classes.attribue_h1}>Damage Counter</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={classes.itemMaster}>
    //       <div className={classes.itemsContainer}>
    //         <div className={classes.frameCardDetails}>
    //           <div className={classes.frameImageDetails}>
    //             <img className={classes.imageSwordDetails} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>


    //     <div className={classes.itemMaster}>
    //       <div className={classes.itemDetailsIcon}>
    //         <h1 className={classes.attribue_text}> <span>Tizona</span></h1>
    //       </div>
    //       <p className={classes.attribue_story}>
    //         There are a diversity of SWORD, which comes from the perfect combination of 5 SWORD Classes and Elements, and  Each SWORD will become unique and worthwhile in your collection.
    //       </p>
    //     </div>
    //   </div>
    //   <div className={classes.itemsContainer}>
    //     <List
    //       component="nav"
    //       aria-labelledby="main-navigation"
    //       className={classes.navDisplayFlex}
    //     >
    //       {navLinks.map(({ title, path, bgI, id }) => (
    //         <Link
    //           to={path}
    //           key={title}
    //           className={classes.linkText}
    //           onClick={() => setActiveLinkId(id)}
    //           style={createCss(id, bgI)}
    //         >
    //           <ListItem disableGutters={true}>
    //             <ListItemText primary={title} />
    //           </ListItem>
    //         </Link>
    //       ))}
    //     </List>
    //     {/* {items.map((item) => {
    //       return (
    //         <div key={item.id} className={item.frameCardBottom}>
    //           <div className={classes.frameImageBottom}>
    //             <img className={classes.imageDetailBottom} src={item.imageDetail} />
    //             <img className={classes.imageDetailBottom} />
    //           </div>
    //         </div>
    //       );
    //     })} */}
    //   </div>
    // </div>
  );
};



export default Swords;
