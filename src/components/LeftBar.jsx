import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {
	Bookmark,
	ExitToApp,
	Home,
	Person,
	PhotoCamera,
	PlayCircleOutline,
	Settings,
	Storefront,
	TabletMac,
	ListOutlined
} from '@material-ui/icons'

import { useStyles } from '../customThemes'


const LeftBar = () => {
	const classes = useStyles()
	return (
		<Container className={classes.container_left}>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography variant='h6' className={classes.text}>
					Homepage
				</Typography>
			</div>
			<div className={classes.item}>
				<Person className={classes.icon} />
				<Typography variant='h6' className={classes.text}>
					Friends
				</Typography>
			</div>
			<div className={classes.item}>
				<ListOutlined className={classes.icon} />
				<Typography variant='h6' className={classes.text}>
					Lists
				</Typography>
			</div>
			<div className={classes.item}>
				<PhotoCamera className={classes.icon} />
				<Typography variant='h6' className={classes.text}>
					Camera
				</Typography>
			</div>
			<div className={classes.item}>
				<PlayCircleOutline className={classes.icon} />
				<Typography variant='h6' className={classes.text}>
					Videos
				</Typography>
			</div>
			<div className={classes.item}>
				<TabletMac className={classes.icon} />
				<Typography variant='h6' className={classes.text}>
					Apps
				</Typography>
			</div>
			<div className={classes.item}>
				<Bookmark className={classes.icon} />
				<Typography variant='h6' className={classes.text}>
					Collections
				</Typography>
			</div>
			<div className={classes.item}>
				<Storefront className={classes.icon} />
				<Typography variant='h6' className={classes.text}>
					Market Place
				</Typography>
			</div>
			<div className={classes.item}>
				<Settings className={classes.icon} />
				<Typography variant='h6' className={classes.text}>
					Settings
				</Typography>
			</div>
			<div className={classes.item}>
				<ExitToApp className={classes.icon} />
				<Typography variant='h6' className={classes.text}>
					Logout
				</Typography>
			</div>
		</Container>
	)
}

export default LeftBar
