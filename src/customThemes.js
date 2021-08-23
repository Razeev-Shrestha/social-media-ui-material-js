import { makeStyles, alpha } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	logoLarge: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	logoSmall: {
		display: 'block',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	search: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		borderRadius: '18px',
		width: '50%',
		[theme.breakpoints.down('sm')]: {
			display: ({ isOpen }) => (isOpen ? 'flex' : 'none'),
			width: '75%',
		},
		justifyContent: 'space-between',
	},
	input: {
		color: 'white',
		marginLeft: theme.spacing(1),
	},
	cancel: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	icons: {
		display: ({ isOpen }) => (isOpen ? 'none' : 'flex'),
		alignItems: 'center',
	},
	searchButton: {
		marginRight: theme.spacing(2.5),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	badge: {
		marginRight: theme.spacing(2.5),
	},
	container_left: {
		height: '100vh',
		color: 'white',
		position: 'sticky',
		top: 0,
		paddingTop: theme.spacing(1.5),
		[theme.breakpoints.down('sm')]: {
			backgroundColor: '#dcdede',
			color: '#615f5f',
			fontSize: '1.125rem',
		},
		[theme.breakpoints.up('sm')]: {
			backgroundColor: 'white',
			color: '#555',
			border: '1px solid #ece7e7',
		},
	},
	container_feed: {
		height: '100vh',
		color: '#555',
		paddingTop: theme.spacing(1.5),
		[theme.breakpoints.up('sm')]: {
			backgroundColor: 'white',
			color: '#555',
			border: '1px solid #ece7e7',
		},
	},
	container_right: {
		height: '100vh',
		color: 'white',
		position: 'sticky',
		top: 0,
		paddingTop: theme.spacing(1.5),
		[theme.breakpoints.up('sm')]: {
			backgroundColor: 'white',
			color: '#555',
			border: '1px solid #ece7e7',
		},
	},
	item: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			marginBottom: theme.spacing(6),
			cursor: 'pointer',
		},
	},
	icon: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.up('sm')]: {
			fontSize: '1.5rem',
		},
	},
	text: {
		fontWeight: 500,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	rightbar: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	media: {
		height: '250px',
		[theme.breakpoints.down('sm')]: {
			height: 150,
		},
	},
	card: {
		marginBottom: theme.spacing(5),
	},
	fab: {
		position: 'fixed',
		bottom: 20,
		right: 20,
	},
	cntiner: {
		width: 500,
		height: 550,
		backgroundColor: 'white',
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: 'auto',
		[theme.breakpoints.down('sm')]: {
			width: '100vw',
			height: '100vh',
		},
	},
	textfield: {
		width: '100%',
	},
	outlined: {
		margin: 20,
	},
	items: {
		marginBottom: theme.spacing(3),
	},
	form: {
		padding: theme.spacing(2),
	},
	title: {
		fontSize: 16,
		fontWeight: 550,
		color: '#555',
	},
	avatar: {
		marginBottom: 20,
	},
	link: {
		marginRight: theme.spacing(3),
		color: '#555',
		fontSize: 16,
	},
	imageList: {
		marginBottom: 50,
	},
}))
