import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';

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
import cardFrame from   '../../assets/card.png';
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
import Sword_main from   '../../assets/Sword_main.png';
import Sword_bar  from '../../assets/Sword_bar.png';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down('sm')]: {
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
    marginTop: 30,
    marginLeft: 10,
    width: 200,

    [theme.breakpoints.down('sm')]: {
      width: 150,
      height: 150,
      marginTop: 15,
      marginBottom: 10,
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
  },
  heading: {
    color: '#FFA800',
    textAlign: 'center',
    //fontSize: 80,
    //fontWeight: 600,
    verticalAlign: 'top',
    //wordSpacing: '0px',
    //alignSelf: 'center',
    // paddingTop: 17,
    // [theme.breakpoints.down('md')]: {
    //   marginBottom: 20,
    // },
    // [theme.breakpoints.down('sm')]: {
    //   paddingTop: 0,
    //   fontSize: 28,
    //   marginTop: 5,
    // },
   
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
  },
  Sword_main:{
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:"8vw",
    paddingTop:"3vh",
    // width: "12vw",
    // height: "12vh",
  },
  Sword_bar:{
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  frameCard: {
    // background: `url(${cardFrame})`,
    backgroundRepeat: 'no-repeat',
    height: 500,
    width: 300,
    backgroundSize: 'contain',
    position: 'relative',
  },
  frameImage: {
    position: 'absolute',
    top: '8%',
    left: '8%',
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
}));

const Swords = () => {
  const classes = useStyles();
  let items = [
    {
      id:'1',
      name: 'Sword Ice',
      image: sword,
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
      id:'2',
      name: 'Sword Posion',
      image: bigknife,
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
      id:'3',
      name: 'Sword Fire',
      image: tessen,
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
      id:'4',
      name: 'Sword Wind',
      image: bow,
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
      id:'5',
      name: 'Sword Ice Max',
      image: gun,
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
    },
    {
      id:'6',
      name: 'Sword Posion Max',
      image: sceptre,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 31</li>
              <li>Bonus: +6%</li>
              <li>Accuracy: +3</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      id:'7',
      name: 'Sword Fire Max',
      image: magicvase,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 2</li>
              <li>Bonus: +6%</li>
              <li>Accuracy: +1</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      id:'8',
      name: 'Sword Wind Max',
      image: armor,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>HP: 10</li>
              <li>MP: 6</li>
              <li>Protection: +5</li>
            </ul>
          </p>
        </div>
      ),
    }
  ];
  return (
    // <div className={classes.background}>
    //   <h1 className={classes.heading}>Game Items</h1>
    //   <div className={classes.itemsContainer}>
    //     {items.map((item) => {
    //       return (
    //         <div className={classes.frameCard}>
    //           <div className={classes.frameImage}>
    //             <img className={classes.image} src={item.image} />
    //           </div>
    //           <div className={classes.frameText}>
    //             <h5 className={classes.title}>{item.name}</h5>
    //           </div>
    //           <div className={classes.frameStats}>{item.listData}</div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className={classes.background}>
      <div className={classes.itemsContainerSword}>
        <div className={classes.itemGroup}>
          <img className={classes.Sword_main} src={Sword_main} />
        </div>
      </div>
      <div className={classes.itemsContainerSwordBar} >
          <img className={classes.Sword_bar} src={Sword_bar} />
      </div>
      


      <div className={classes.itemsContainer}>
        {items.map((item) => {
          return (
            <div key={item.id }  className={classes.frameCard}>
              <div className={classes.frameImage}>
               <video width="300" height="500" loop autoPlay muted >
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



export default Swords;
