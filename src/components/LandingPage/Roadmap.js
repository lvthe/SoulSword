import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import research from '../../assets/research.png';
import farming from '../../assets/farming.png';
import launch from '../../assets/launch.png';
import tokenomics from '../../assets/tokenomics.png';
import chain from '../../assets/chain.png';
import road_img from '../../assets/road_map.png';
import road_map_bg from '../../assets/road_map_bg.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import line1 from '../../assets/road_map_line_1.png';
import line2 from '../../assets/road_map_line_2.png';
import line3 from '../../assets/road_map_line_3.png';
import line4 from '../../assets/road_map_line_4.png';
import road_sword from '../../assets/road_sword.png';
import road_map_sword_light from '../../assets/road_map_sword_light.png';
const getStepsData = () => {
  return [
    {
      id: '1',
      title: 'Q1, 2021',
      heading: 'Research',
      subheadings: ['Research on Defi & NFTs', 'Team forming', 'Design PWAR tokenomics'],
      completed: true,
      icon: research,
    },
    {
      id: '2',
      title: 'Q2, 2021',
      heading: 'MVP & Sale',
      subheadings: [
        'Release PWAR token smart contract',
        'Private sale',
        'Whitepaper & website',
        'MVP',
        'NFT Airdrop campaign',
        'Public sale & listing on PancakeSwap',
        'Staking & Farming',
      ],
      completed: true,
      icon: tokenomics,
    },
    {
      id: '3',
      title: 'Q3, 2021',
      heading: 'Testnet',
      subheadings: ['Character system', 'Battle system', 'SoulsWord marketplace testnet', 'SoulsWord Realm testnet'],
      completed: false,
      icon: farming,
    },
    {
      id: '4',
      title: 'Q4, 2021',
      heading: 'Mainnet',
      subheadings: [
        'Equipment system',
        'SoulsWord marketplace mainnet',
        'SoulsWord Realm mainnet',
        'Launch Game on Casper Blockchain Testnet',
      ],
      completed: false,
      icon: launch,
    },
    {
      id: '5',
      title: 'Q1 - Q2, 2022',
      heading: 'SoulsWord Logictic & Multichain',
      subheadings: [
        'NFT Renting',
        'SoulsWord Logictics',
        'Multichain Marketplace (Support PolkaDot,Solona,Matic, Casper)',
        'Launch Game on Casper Blockchain Mainnet',
      ],
      completed: false,
      icon: chain,
    },
  ];
};

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 20,
    height: '100%',
    paddingLeft: 100,
    backgroundImage: `url(${road_map_bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      padding: 0,
      paddingBottom: 15,
      paddingTop: 60,
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

    verticalAlign: 'baseline',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  icon: {
    fontSize: 48,
    color: '#616161',
  },
  title: {
    fontWeight: 600,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    textAlign: 'left',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
  },
  list: {
    width: 200,
    paddingLeft: 15,
    fontSize: 14,
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
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
  body: {
    backgroundImage: `url(${road_sword})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 700,
    width: 550
  },
  road_img: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 400,
    },
  },
  line1: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: "relative",
    // justifyContent: 'flex-start',
    right: "18%",
    paddingTop: 35,
    height: 100,

  },
  line2: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: "relative",
    // justifyContent: 'flex-start',
    left: "18%",
    paddingTop: 20,
    // height: 100,

  },
  line1_text: {
    margin: 0,
    fontFamily: "Trajan Pro",
    fontStyle: "Bold",
    fontSize: "32px",
    lineHeight: "50px",
    align: "center",
    verticalAlign: "top",
    letterSpacing: "5%",
    fill: "Solid",
    color:  "#FF8A00"
  },
  line1_space: {
    width: 200
  },
  line3: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: "relative",
    // justifyContent: 'flex-start',
    right: "18%",
    paddingTop: 80,
    height: 100,
  },
  line4: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: "relative",
    // justifyContent: 'flex-start',
    left: "15%",
    paddingTop: 60,
    // height: 100,

  },
}));

const Roadmap = () => {
  const classes = useStyles();

  const steps = getStepsData();

  const [x, setX] = useState(0);
  const [shift, setShift] = useState(100);

  const goRight = () => {
    x === -shift * ([1, 2, 3, 4, 5, 6, 7, 8, 9].length - 8) ? setX(0) : setX(x - shift);
  };
  const goLeft = () => {
    x === shift * ([1, 2, 3, 4, 5, 6, 7, 8, 9].length - 9) ? setX(x + shift) : setX(0);
  };

  const goRightMob = () => {
    x === -shift * ([1, 2, 3, 4, 5].length - 1) ? setX(0) : setX(x - shift);
  };
  const goLeftMob = () => {
    x === shift * ([1, 2, 3, 4, 5].length - 1) ? setX(x + shift) : setX(0);
  };

  const handleLeftCarouselScroll = () => {
    if (window.innerWidth < 950) {
      goLeftMob();
    } else {
      goLeft();
    }
  };

  const handleRightCarouselScroll = () => {
    if (window.innerWidth < 900) {
      goRightMob();
    } else {
      goRight();
    }
  };

  useEffect(() => {
    if (window.innerWidth < 950) {
      handleRightCarouselScroll();
    }
  }, []);

  return (
    <div className={classes.background}>
      <div className={classes.itemsContainer}>
        <img className={classes.road_img} src={road_img} />
      </div>
      <div className={classes.itemsContainer}>
        <div className={classes.body}>
          <div className={classes.itemsContainer}>
            <div className={classes.line1} >
              <h1 className={classes.line1_text}>PHASE 1 </h1> <img src={line1} />
              
            </div>
            <div>
              <h1>&ensp;</h1>
            </div>
          </div>
          <div className={classes.itemsContainer}>
            <div>
              <h1>&ensp;</h1>
            </div>
            <div className={classes.line2}>
              <img src={line2} />  <h1 className={classes.line1_text}>PHASE 2 </h1>
            </div>
          </div>
          <div>
            <div className={classes.itemsContainer}>
              <div className={classes.line3}>
                <h1 className={classes.line1_text}>PHASE 3</h1> <img src={line3} />
              </div>
              <div>
                <h1>&ensp;</h1>
              </div>
            </div>

          </div>
          <div className={classes.itemsContainer}>
            <div>
              <h1>&ensp;</h1>
            </div>
            <div className={classes.line4}>
              <img src={line4} /><h1 className={classes.line1_text}>PHASE 4</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
