import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleAltOutlined from '@material-ui/icons/PeopleAltOutlined';
import FlareOutlined from '@material-ui/icons/FlareOutlined';
import TimelineOutlined from '@material-ui/icons/TimelineOutlined';
import TouchAppOutlined from '@material-ui/icons/TouchAppOutlined';
import VpnLockOutlined from '@material-ui/icons/VpnLockOutlined';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';
import CategoryIcon from '@material-ui/icons/Category';
import TimerIcon from '@material-ui/icons/Timer';
import image from '../../assets/playnow.png';
import Header from './Header.css';
import { Link } from 'react-scroll';
import { Typography } from '@material-ui/core'; 
import soulwordLogo from '../../assets/logo_bb.png';
import playnowImg from '../../assets/playnow.png';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBarBackground: {
    //background: `#000000`,
    [theme.breakpoints.down('md')]: {
      borderBottom: '1px solid #e5e5e5',
    },
  },
  menuButton: {
    textTransform: 'none',
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
  },
  iconText: {
    fontSize: 15,
  },
  icon: {},

  sectionDesktop: {
    marginLeft: 150,
    marginRight: 100,
    // marginTop: 50,
    [theme.breakpoints.down('md')]: {
      marginLeft: 5,
      marginRight: 5,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sectionMobile: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  row1: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },

  home: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    marginRight: 25,
    marginLeft: 25,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  //   '&:hover': {
  //     backgroundColor: '#17E3E0',
  //     color: '#17E3E0',
  //     // fontSize:'25px'
  // },
  },
  nav: {
    marginRight: 15,
  },
  menuIcon: {
    color: '#212121',
    [theme.breakpoints.down('md')]: {
      color: '#e5e5e5',
    },
    
  },
  list: {
    width: '250px',
    height: '100%',
    backgroundColor: 'transparent',
  },
  fullList: {
    width: 'auto',
  },
  menuTitleMobile: {
    paddingLeft: 15,
    fontWeight: 500,
    verticalAlign: 'baseline',
    // fontFamily: 'Balsamiq Sans',
    fontFamily: 'Exo 2',
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 7,
  },

  tabs: {
    color: '#fbfbfb',
    display: 'none',
    fontWeight: 500,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '0px',
    margin: 0,
    paddingRight: '10px',
    cursor: 'pointer',
    fontFamily: 'Trajan Pro',
    fontSize: '1.1vw',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    '&:hover': {
      // backgroundColor: '#17E3E0',
      color: '#17E3E0',
      // fontSize:'25px'
    }
  },
  navbarShareIcons: {
    marginRight: 15,
    marginLeft: 15,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobileLink: {
    color: theme.palette.pbr.textSecondary,
    textDecoration: 'none',
  },
  mobileButton: {
    borderRadius: '50px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    color: '#ffffff',
    padding: '5px 15px 5px 15px',
    fontWeight: 600,
  },
  outlinedWhitepaper: {
    borderRadius: '30px',
    border: '1px solid #ad1457',

    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,

    color: '#ad1457',
    padding: '7px 10px 7px 10px',

    fontWeight: 500,
    fontSize: '1.1vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      width: 140,
    },
  },
  outlinedGame: {
    borderRadius: '30px',
    border: '1px solid #8e24aa',

    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,

    color: '#8e24aa',
    padding: '7px 10px 7px 10px',
    fontWeight: 500,
    fontSize: '1.1vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      width: 140,
    },
  },
  buttonWhitePaper: {
    borderRadius: '30px',
    background: `linear-gradient(to right,#ad1457, #c51162)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,
    marginTop: 5,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 500,
    fontSize: '1.1vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  buttonGame: {
    borderRadius: '30px',
    background: `linear-gradient(to right,#6a1b9a, #8e24aa)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,
    marginTop: 0,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 500,
    fontSize: '1.1vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
    backgroundImage: `url(${image})`
  },
}));
// const [isHover, setIsHover] = useState(false);



const Navbar = () => {
  const classes = useStyles();

  const [state, setState, isHover,setIsHover] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const handleMouseEnter = () => {
    setIsHover(true);
 };
 const handleMouseLeave = () => {
    setIsHover(false);
 };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List key={'99'}>
        {[
          { name: 'HOME', id: 'home', icon: <TouchAppOutlined /> },
          { name: 'SOUL', id: 'souls',  icon: <PeopleAltOutlined />, },
          { name: 'SWORD', id: 'words', icon: <VpnLockOutlined /> },
          { name: 'FEATURE', id: 'mode', icon: <FlareOutlined /> },
          { name: 'TOKENS NOMIC', id: 'tokenomics', icon: <TimelineOutlined />},
          { name: 'ROADMAP', id: 'roadmap', icon: <CategoryIcon /> },
          { name: 'PARTNER & ADVISOR', id: 'backer',  icon: <PeopleAltOutlined />, },
         
        ].map((tab) => (
          <Link key={tab.id}  activeClass="active" to = {tab.id} smooth={true} offset={0} duration={500} delay={0}>
            <ListItem button key={tab.id} onClick={toggleDrawer(anchor, false)}>
              <Typography className={classes.menuTitleMobile}>{tab.name}</Typography>
            </ListItem>
          </Link>
        ))}
        <Divider />
        {/* <ListItem key={'0'} button>
          <a href="https://SoulsWord.com/docs/whitepaper.pdf" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" className={classes.outlinedWhitepaper}>
              Read White paper
            </Button>
          </a>
        </ListItem>
        <ListItem key={'0'} button style={{ marginTop: 5 }}>
          <a href="https://game.SoulsWord.com" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" className={classes.outlinedGame}>
              Game Portal
            </Button>
          </a>
        </ListItem>
        <ListItem key={'0'} button style={{ marginTop: 5 }}>
          <a href="https://stake.polkabridge.org" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" className={classes.outlinedGame}>
              Staking
            </Button>
          </a>
        </ListItem> */}
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      {/* <AppBar position="relative" className={classes.appBarBackground}> */}
      <AppBar position="fixed" className={classes.appBarBackground} >
        <Toolbar className={classes.sectionDesktop}> 
          <a href="/" > <img src={soulwordLogo} className='navbar_img'  /> </a> 
          <Link
            key={'0'}
            exact="true"
            activeClass="active"
            to="header-section"
            smooth={true}
            offset={-60}
            duration={400}
            delay={0}
            className={classes.home}>
          </Link>
          <div className={classes.grow} />

          <Link
            key={'1'}
            exact="true"
            activeClass="active"
            to="home"
            smooth={true}
            offset={0}
            duration={400}
            delay={0}
            className={classes.home}>
              
            <Typography className={classes.tabs} variant="body1">
              HOME
            </Typography>
          </Link>
          <Link key={'3'} exact="true" to="souls" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              SOUL
            </Typography>
          </Link>
          <Link key={'4'} exact="true" to="swords" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              SWORD
            </Typography>{' '}
          </Link>
          <Link key={'5'} exact="true" to="mode" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              FEATURE
            </Typography>{' '}
          </Link>
          <Link key={'6'} exact="true" to="tokenomics" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              TOKENS NOMIC
            </Typography>{' '}
          </Link>
          <Link key={'7'} exact="true" to="backer" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
            ADVISOR
            </Typography>{' '}
          </Link>

          <Link key={'9'} exact="true" to="roadmap" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              ROADMAP
            </Typography>{' '}
          </Link>
        </Toolbar>
        <Toolbar className={classes.sectionMobile}>
          <div className={classes.row1}>
            <div className={classes.grow} />
            <Link
              exact="true"
              activeClass="active"
              to="header-section"
              smooth={true}
              offset={0}
              duration={500}
              delay={0}
              className={classes.home}>
                 
            </Link><a href="/" className='navbar_a_mobile'> <img src={soulwordLogo} className='navbar_img_mobile'  /> </a> 
            

            <div className={classes.grow} />
            <div>
              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    aria-label="Menu"
                    aria-haspopup="true"
                    className={classes.menuIcon}
                    onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon />
                  </IconButton>

                  <SwipeableDrawer
                    anchor={anchor}
                    disableSwipeToOpen={false}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}>
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div height="500px" >

      </div>
    </div>
  );
};

export default Navbar;
