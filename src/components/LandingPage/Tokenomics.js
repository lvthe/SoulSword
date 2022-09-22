import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import tokenomics_back from '../../assets/tokennomic_bg.png';
import tokenomics_content from '../../assets/tokenomics_content.png';
import tokenomics_table from '../../assets/tokenomics_table.png';
import tokenomics_logo from '../../assets/tokennomic_logo.png';
import cardFrame from '../../assets/tokennomic_bg_detail.png';
import tokenomics_line from '../../assets/tokennomic_line.png';
import tokennomic_icon from '../../assets/tokennomic_icon.png';
const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    // height: '90%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    backgroundImage: `url(${tokenomics_back})`,
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
    color: theme.palette.pbr.textPrimary,
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    paddingTop: 0,
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      marginBottom: 45,
      alignSelf: 'center',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 60,
    backgroundColor: 'black',
    opacity: 0.6,
    padding: 40,
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      padding: 10,
    },
  },
  tokenomics_content: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 400,
    },
  },
  tokennomic_icon: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // width: 400,
    },
  },
  tokenomics_line: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: 100,
    },
  },
  listText: {
    color: theme.palette.pbr.textSecondary,
    fontSize: 24,
    fontWeight: 400,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
    },
  },
  image: {
    width: 700,
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      marginTop: 10,
    },
  },
  itemsContainerMaster: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },

  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },

  itemsContainerDetails: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
      width: 1000,
    marginTop: 0,
    border: "0.7px dotted #C6C6C6",
    borderRadius: "8.37971px",
    height: 564,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: 300,
      // marginRight: 10,
    },
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: 30,
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
     
       marginRight: 10,
    },
  },
  
  text_h1: {
    fontFamily: "Trajan Pro",
    fontStyle: "Bold",
    fontSize: "18.33px",
    lineHeight: "22px",
    lineHeight: "120%",
    align: "Center",
    verticalAlign: "Top",
    color: "#F4AE03",
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize:"8px"
    },
  },

  text_h0: {
    fontFamily: "Trajan Pro",
    fontStyle: "Bold",
    fontSize: "13.33px",
    lineHeight: "16px",
    lineHeight: "120%",
    align: "Center",
    verticalAlign: "Top",
    color: "#FFFFFF",
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize:"6px"
    },
  },
  listItems: {},
  listItem: {
    marginBottom: 10,
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },
  subheading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  displayMobile: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  displayDesktop: {
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  tokennomic_icon: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  tokenomics_logo: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width:100
    },
  },
  frameCard: {
    height: 510,
    width: 950,
    backgroundSize: 'contain',
    position: 'relative',
    background: `url(${cardFrame})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: 280,
      width: 300,
    },
  },
  frameStats: {
    top: '64%',
    textAlign: "left",
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      // display: 'flex',
      // flexDirection: 'column',
      // justifyContent: 'left',
      // textAlign: "left",
      // height: 50,
    },
  },

}));

const Tokenomics = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.itemsContainer}>
        <img className={classes.tokenomics_content} src={tokenomics_content} />
      </div>
      <div className={classes.itemsContainer}>
      <div className={classes.itemsContainerDetails}>
          <div className={classes.frameCard}>
            <div className={classes.itemsContainer}>
              <div className={classes.itemsContainerMaster}>
                <h1 className={classes.text_h1}>TOKEN</h1>
                <h0 className={classes.text_h0}>TEXT 111</h0>
                <h1 className={classes.text_h1}>MAX SUPPLY</h1>
                <di>
                  <img lassName={classes.tokennomic_icon} src={tokennomic_icon} /> <h0 className={classes.text_h0} >TEXT 111</h0>
                </di>
                <h1 className={classes.text_h1}>USE CASE</h1>
                <div className={classes.frameStats}><ul className={classes.frameList}>
                  <li className={classes.text_h0}>Text 1</li>
                  <li className={classes.text_h0}>Text 1</li>
                  <li className={classes.text_h0}>Text 2</li>
                </ul></div>
                <h1 className={classes.text_h1}>CONTRACT ADDRESS</h1>
                <h0 className={classes.text_h0}>TEXT 999</h0>
                <h0 className={classes.text_h0}>TEXT 999</h0>
              </div>
              <div className={classes.itemsContainerMaster}>
                <img className={classes.tokenomics_line} src={tokenomics_line} />
              </div>
              <div className={classes.itemsContainerMaster}>
                <h1 className={classes.text_h1}>TOKEN</h1>
                <h0 className={classes.text_h0}>TEXT 111</h0>
                <h1 className={classes.text_h1}>MAX SUPPLY</h1>
                <di>
                  <img lassName={classes.tokennomic_icon} src={tokennomic_icon} /> <h0 className={classes.text_h0}>TEXT 111</h0>
                </di>
                <h1 className={classes.text_h1}>USE CASE</h1>
                <div className={classes.frameStats}><ul className={classes.frameList}>
                  <li className={classes.text_h0}>Text 1</li>
                  <li className={classes.text_h0}>Text 2</li>
                  <li className={classes.text_h0}>Text 2</li>
                </ul>
                </div>
                <h1 className={classes.text_h1}>CONTRACT ADDRESS</h1>
                <h0 className={classes.text_h0}> TEXT 999</h0>
                <h0 className={classes.text_h0}>TEXT 999</h0>
              </div>
              <div className={classes.itemsContainerMaster}>
                <img className={classes.tokenomics_logo} src={tokenomics_logo} />
              </div>
            </div>
          </div>

        </div>
      </div>
      

    </div>
  );
};

export default Tokenomics;
