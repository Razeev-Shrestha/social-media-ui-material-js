//Imported Dependencies
import { useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Search from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import { Cancel, Mail, Notifications } from '@material-ui/icons'
import Avatar from '@material-ui/core/Avatar'

//Imported Components/Helper Functions
import { useStyles } from '../customThemes'

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const classes = useStyles({ isOpen })
	return (
		<AppBar position='static'>
			<Toolbar className={classes.toolbar}>
				<Typography variant='h5' className={classes.logoLarge}>
					SOCIAL MEDIA UI
				</Typography>
				<Typography variant='h5' className={classes.logoSmall}>
					UI
				</Typography>
				<div className={classes.search}>
					<Search />
					<InputBase placeholder='Search...' className={classes.input} />
					<Cancel
						className={classes.cancel}
						onClick={() => setIsOpen(false)}
					/>
				</div>
				<div className={classes.icons}>
					<Search
						className={classes.searchButton}
						onClick={() => setIsOpen(true)}
					/>
					<Badge
						badgeContent={4}
						color='secondary'
						className={classes.badge}>
						<Mail />
					</Badge>
					<Badge
						badgeContent={2}
						color='secondary'
						className={classes.badge}>
						<Notifications />
					</Badge>
					<Avatar
						alt='Profile Picture'
						src='https://images.unsplash.com/photo-1524666041070-9d87656c25bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
					/>
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar
