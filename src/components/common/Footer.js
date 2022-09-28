import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Twitter, Telegram, GitHub, Email, Instagram } from '@material-ui/icons';
import footer from '../../assets/Footer.png';
import footer_bg from '../../assets/footer_bg.png';
import footer_logo from '../../assets/footer_logo.png';
import footer_button from '../../assets/footer_button.png';
import twitter from '../../assets/social_twitter.png'; 
import discord from '../../assets/social_discord.png'; 
import telegram from '../../assets/social_telegram.png'; 
import Tumblr from '../../assets/social_telegram.png'; 
 
import tumblr from '../../assets/social_t.png'; 
const useStyles = makeStyles((theme) => ({
	background: {
		// marginTop: 150,
		height: 280,//'300px',
		backgroundImage: `url(${footer_bg})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},
	heading: {
		color: theme.palette.pbr.heading,
		textAlign: 'center',
		fontSize: 36,
		fontWeight: 600,
		verticalAlign: 'middle',
		wordSpacing: '0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: 28,
		},
	},
	para: {
		color: theme.palette.pbr.textPrimary,
		fontWeight: 500,
		verticalAlign: 'baseline',
		letterSpacing: '-0.8px',
		margin: 0,
		paddingTop: 10,
		paddingBottom: 10,
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: 10,
		},
	},

	highlight: {
		color: theme.palette.pbr.primary,
	},
	icon: {
		fontSize: 32,
		color: '#000000',
		[theme.breakpoints.down('md')]: {
			fontSize: 24,
		},
	},
	iconWrapper: {
		marginRight: 15,
		[theme.breakpoints.down('md')]: {
			marginRight: 5,
		},
	},
	iconButton: {
		backgroundColor: 'white',
		height: 50,
		width: 50,
		color: 'black',
		'&:hover': {
			background: theme.palette.pbr.primary,
		},
		[theme.breakpoints.down('md')]: {
			height: 40,
			width: 40,
		},
	},
	itemsContainer: {
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'flex-start',
		// paddingTop: -30,
		flexWrap: 'wrap',
	},


	itemsContainer_social: {
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'flex-start',
		// paddingTop: -30,
		flexWrap: 'wrap',
		width:180
		
	},

	itemsContainerLine:{
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'flex-start',
		paddingTop: "-30",
		flexWrap: 'wrap',
		borderTop:"0.721511px solid #C6C6C6",
		textAlign: "center"
	},
	footer: {
		width: "100%",
		[theme.breakpoints.down('md')]: {
			// paddingTop:100,
			// width:"30%",
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		  },
	},
	footer_button: {
		paddingTop: 10,
		top: "5%",
		// [theme.breakpoints.down('md')]: {
		// 	paddingTop: 10,
		// 	// width:"10%",
		// 	display: 'flex',
		// 	flexDirection: 'column',
		// 	justifyContent: 'center',
		//   },
	},
	margin: {
		// margin: theme.spacing(1),
		boxSizing: "border-box",
		// position: "absolute",
		width: "392px",
		padding: 0,
		// height: "40.72px",
		// left: "0px",
		// top: "0px",
		border: "0.721511px solid #C6C6C6",
		borderRadius: "21.6453px",
		[theme.breakpoints.down('md')]: {
			//fontSize:10
			// paddingTop:100,
			width:"100%",
			// display: 'flex',
			// flexDirection: 'column',
			// justifyContent: 'center',
		  },
	  },
	  footerLine:{
		fontFamily: "Marcellus",
		fontStyle: "Regular",
		fontSize: "16px",
		lineHeight: "24px",
		lineHeight: "120%",
		align: "Left",
		verticalAlign: "cênter",
		letterSpacing: "-0.2px",
		fill: "Solid",
		color:"#B2A282"
	  },
	  frameList:{
		textAlign:"left",
		fontFamily: "Exo 2",
		fontStyle: "Bold",
		fontSize: "18px",
		lineHeight: "24px",
		lineHeight: "111%",
		align: "Left",
		verticalAlign: "Bottom",
		letterSpacing: "-0.2px",
		color:"#B2A282",
		[theme.breakpoints.down('md')]: {
			fontSize:10
			// paddingTop:100,
			// width:"30%",
			// display: 'flex',
			// flexDirection: 'column',
			// justifyContent: 'center',
		  },

	  },
	  logo_img:{
		[theme.breakpoints.down('md')]: {
		
			// paddingTop:100,
			width:"30%",
			// display: 'flex',
			// flexDirection: 'column',
			// justifyContent: 'center',
		  },
	  },
	  text_about:{
		fontFamily: "Trajan Pro",
		fontStyle: "Bold",
		fontSize: "24px",
		lineHeight: "29px",
		lineHeight: "120%",
		align: "Center",
		verticalAlign: "Top",
		letterSpacing: "-0.2px",
		margin:0,
		color:"#F8C45F",
		[theme.breakpoints.down('md')]: {
			fontSize:10
			// paddingTop:100,
			// width:"30%",
			// display: 'flex',
			// flexDirection: 'column',
			// justifyContent: 'center',
		  },

	  },
	  text_follow:{
		fontFamily: "Trajan Pro",
		fontStyle: "Bold",
		fontSize: "24px",
		lineHeight: "29px",
		lineHeight: "120%",
		align: "Center",
		verticalAlign: "Top",
		letterSpacing: "-0.2px",
		margin:0,
		color:"#F8C45F",
		[theme.breakpoints.down('md')]: {
			fontSize:10
			// paddingTop:100,
			// width:"30%",
			// display: 'flex',
			// flexDirection: 'column',
			// justifyContent: 'center',
		  },
	  },
	  text_join:{
		fontFamily: "Trajan Pro",
		fontStyle: "Bold",
		fontSize: "24px",
		lineHeight: "29px",
		lineHeight: "120%",
		align: "Center",
		verticalAlign: "Top",
		letterSpacing: "-0.2px",
		// margin:0,
		marginBottom:10,
		color:"#F8C45F",
		[theme.breakpoints.down('md')]: {
			fontSize:10
			// paddingTop:100,
			// width:"30%",
			// display: 'flex',
			// flexDirection: 'column',
			// justifyContent: 'center',
		  },
	  },
	 
	  item_socail:{
		position:"relative",
		top:10,
		// right:5,
		// left:5

	  }	
}));


function generate(element) {
	return [0, 1, 2].map((value) =>
		React.cloneElement(element, {
			key: value,
		}),
	);
}
const CssTextField = withStyles({
	root: {
	  '& label.Mui-focused': {
		color: 'green',
	  },
	  '& .MuiInput-underline:after': {
		borderBottomColor: 'green',
	  },
	  '& .MuiOutlinedInput-root': {
		'& fieldset': {
		  borderColor: 'red',
		},
		'&:hover fieldset': {
		  borderColor: 'yellow',
		},
		'&.Mui-focused fieldset': {
		  borderColor: 'green',
		},
	  },
	},
  })(TextField);
  
const Footer = () => {
	const classes = useStyles();
	const [dense, setDense] = React.useState({
		right: false,
	});
	const [secondary, setSecondary] = React.useState({
		right: false,
	});
	return (
		<div className={classes.background}>
			<div className={classes.itemsContainer}>
				<img className={classes.footer_button} src={footer_button} />

			</div>
			<div className={classes.itemsContainer}>Back top top</div>
			<div className={classes.itemsContainer}>
				<div className={classes.logo_img}>
					<img className={classes.footer} src={footer_logo} />
				</div>
				<div>
					<h1 className={classes.text_about}> ABOUT US </h1>
					<div className={classes.itemsContainer}></div>
					
					
					<div className={classes.itemsContainer}>
					<div>
						<p className={classes.para}>
							<ul className={classes.frameList}>
								<li>HOME</li>
								<li>SOUL</li>
								<li>SWORD</li>
								<li>FEARTURE</li>
								<li>TOKENS NOMIC</li>
							</ul>
						</p>
					</div>
					{/* <div>
						<p className={classes.para}>
							<ul className={classes.frameList}>
								<li>Level: 1 / 5</li>
								<li>Base Damage: 36</li>
								<li>Bonus: +5%</li>
								<li>Accuracy: +3</li>
							</ul>
						</p>
					</div> */}
					</div>
				</div>
				<div>
					<h1 className={classes.text_follow}> Follow us on social media </h1>
					<div className={classes.itemsContainer_social}>
						<div className={classes.item_socail}>
							<a href="https://twitter.com/SoulsWordnft">
									<img src={twitter}></img>
							</a>	
							
						</div>
						<div className={classes.item_socail}>
							<a href="https://twitter.com/SoulsWordnft">
								<img src={discord}></img>
							</a>	
						</div>
						<div className={classes.item_socail}>
							<a href="https://twitter.com/SoulsWordnft">
									<img src={telegram}></img>
							</a>	
						</div>
						<div className={classes.item_socail}>
							<a href="https://twitter.com/SoulsWordnft">
									<img src={tumblr}></img>
							</a>	
						</div>
					</div>
					<div>
						<h1 className={classes.text_join}> JOIN WITH US </h1> 
							 <InputBase
							className={classes.margin}
							// defaultValue="Email address"
							inputProps={{ 'aria-label': 'naked' }}
					/>
					</div>
				</div>
				
			</div>
			<div className={classes.itemsContainerLine}>
					<h1 className={classes.footerLine}> Copyright © 2022 SOUL SWORD All rights reserved </h1>
			</div>
		</div>
	);
};
export default Footer;
