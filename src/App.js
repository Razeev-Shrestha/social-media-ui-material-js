//Imported Dependencies
import '@fontsource/roboto'
import Grid from '@material-ui/core/Grid'

//Imported Components
import NavBar from './components/NavBar'
import LeftBar from './components/LeftBar'
import RightBar from './components/RightBar'
import Feed from './components/Feed'

import { useStyles } from './customThemes'
import Add from './components/Add'

const App = () => {
	const classes = useStyles()
	return (
		<div>
			<NavBar />
			<Grid container>
				<Grid item sm={2} xs={2} md={2}>
					<LeftBar />
				</Grid>
				<Grid item sm={7} xs={10}>
					<Feed />
				</Grid>
				<Grid item sm={3} className={classes.rightbar}>
					<RightBar />
				</Grid>
			</Grid>
			<Add />
		</div>
	)
}

export default App
