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
import Tumblr from '../../assets/Tumblr.png'; 
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
			fontSize: 16,
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
	itemsContainerLine:{
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'flex-start',
		paddingTop: "-30",
		flexWrap: 'wrap',
		borderTop:"0.721511px solid #C6C6C6"
	},
	footer: {
		width: "100%",
		[theme.breakpoints.down('md')]: {
			paddingTop:50,
			width:"50%",
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		  },
	},
	footer_button: {
		paddingTop: 10,
		top: "5%"
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
	  },
	  footerLine:{
		// borderTop:"0.721511px solid #C6C6C6"
		top:""
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
	// 	return (
	// 		<div className={classes.background}>
	// 			<div className="text-center ">
	// 				<div>
	// 					<h6 className={classes.heading}>
	// 						Follow SoulsWord<span className={classes.highlight} />
	// 					</h6>
	// 					<p className={classes.para}>To Get latest updates on SoulsWord join!</p>
	// 					<div className="d-flex justify-content-center mt-4">
	// 						<div className={classes.iconWrapper}>
	// 							<Tooltip title="Twitter" aria-label="add1">
	// 								<a href="https://twitter.com/SoulsWordnft">
	// 									<IconButton aria-label="Twitter" className={classes.iconButton}>
	// 										<Twitter className={classes.icon} />
	// 									</IconButton>
	// 								</a>
	// 							</Tooltip>
	// 						</div>
	// 						<div className={classes.iconWrapper}>
	// 							<Tooltip title="Telegram">
	// 								<a href="https://t.me/SoulsWordchat">
	// 									<IconButton aria-label="Telegram" className={classes.iconButton}>
	// 										<Telegram className={classes.icon} />
	// 									</IconButton>
	// 								</a>
	// 							</Tooltip>
	// 						</div>
	// 						<div className={classes.iconWrapper}>
	// 							<Tooltip title="Instagram">
	// 								<a href="https://www.instagram.com/SoulsWordnft/">
	// 									<IconButton aria-label="Instagram" className={classes.iconButton}>
	// 										<Instagram className={classes.icon} />
	// 									</IconButton>
	// 								</a>
	// 							</Tooltip>
	// 						</div>
	// 						<div className={classes.iconWrapper}>
	// 							<Tooltip title="Github">
	// 								<a href="https://github.com/SoulsWord">
	// 									<IconButton aria-label="Github" className={classes.iconButton}>
	// 										<GitHub className={classes.icon} />
	// 									</IconButton>
	// 								</a>
	// 							</Tooltip>
	// 						</div>

	// 						<div className={classes.iconWrapper}>
	// 							<Tooltip title="Discord">
	// 								<a href="https://discord.gg/NQFjXkMqgk">
	// 									<IconButton aria-label="Discord" className={classes.iconButton}>
	// 										<img
	// 											src="assets/discord.png"
	// 											height="30px"
	// 											width="30px"
	// 											style={{ opacity: 0.75, marginTop: 2 }}
	// 											alt="discord"
	// 										/>
	// 									</IconButton>
	// 								</a>
	// 							</Tooltip>
	// 						</div>

	// 						<div className={classes.iconWrapper}>
	// 							<Tooltip title="Medium">
	// 								<a href="https://medium.com/@SoulsWord">
	// 									<IconButton aria-label="Discord" className={classes.iconButton}>
	// 										<img
	// 											src="assets/medium.png"
	// 											height="30px"
	// 											width="30px"
	// 											style={{ opacity: 0.75, marginTop: 2 }}
	// 											alt="medium"
	// 										/>
	// 									</IconButton>
	// 								</a>
	// 							</Tooltip>
	// 						</div>

	// 						<div className={classes.iconWrapper}>
	// 							<Tooltip title="Email">
	// 								<a href="mailto:hello@SoulsWord.com">
	// 									<IconButton aria-label="Email" className={classes.iconButton}>
	// 										<Email className={classes.icon} />
	// 									</IconButton>
	// 								</a>
	// 							</Tooltip>
	// 						</div>
	// 					</div>

	// 					<div className="text-center" style={{ marginTop: 100 }}>
	// 						<div>
	// 							{/* <img src="assets/logo.png" alt="logo" height="50px" /> */}
	// 						</div>
	// 						<p className={classes.para}>
	// 							Copyright 2021 <span className={classes.highlight}>SoulsWord</span>. All Rights Reserved.
	// 						</p>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// };
	return (
		<div className={classes.background}>
			<div className={classes.itemsContainer}>
				<img className={classes.footer_button} src={footer_button} />

			</div>
			<div className={classes.itemsContainer}>Back top top</div>
			<div className={classes.itemsContainer}>
				<div>
					<img className={classes.footer} src={footer_logo} />
				</div>
				<div>
					<h1> QUICK LINK </h1>
					<div className={classes.itemsContainer}></div>
					
					
					<div className={classes.itemsContainer}>
					<div>
						<p className={classes.para}>
							<ul className={classes.frameList}>
								<li>HOME</li>
								<li>SOUL</li>
								<li>SWORD</li>
								<li>FEARTURE</li>
							</ul>
						</p>
					</div>
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
					</div>
					<div className={classes.itemsContainer}></div>
				</div>
				<div>
					<h1> Follow us on social media </h1>
					<div className={classes.itemsContainer}>

						<div >
							<Tooltip title="Twitter" aria-label="add1">
								<a href="https://twitter.com/SoulsWordnft">
									<IconButton aria-label="Twitter" className={classes.iconButton}>
										<Twitter className={classes.icon} />
									</IconButton>
								</a>
							</Tooltip>
						</div>
						<div >
							<Tooltip title="Telegram">
								<a href="https://t.me/SoulsWordchat">
									<IconButton aria-label="Telegram" className={classes.iconButton}>
										<Telegram className={classes.icon} />
									</IconButton>
								</a>
							</Tooltip>
						</div>
						<div >
							<Tooltip title="Tumblr">
								<a href="https://discord.gg/NQFjXkMqgk">
									<IconButton aria-label="Tumblr" className={classes.iconButton}>
										<img
											src={Tumblr}
											height="30px"
											width="30px"
											style={{ opacity: 0.75, marginTop: 2 }}
											alt="Tumblr"
										/>
									</IconButton>
								</a>
							</Tooltip>
						</div>
						<div >
							<Tooltip title="Email">
								<a href="mailto:hello@SoulsWord.com">
									<IconButton aria-label="Email" className={classes.iconButton}>
										<Email className={classes.icon} />
									</IconButton>
								</a>
							</Tooltip>
						</div>
					</div>
					<div>
						<h1> JOIN WITH US </h1> 
							 <InputBase
							className={classes.margin}
							defaultValue="Email address"
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
