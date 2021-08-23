import { Container } from '@material-ui/core'
import { useStyles } from '../customThemes'
import Post from './Post'

const Feed = () => {
	const classes = useStyles()
	return (
		<Container className={classes.container_feed}>
			<Post />
			<Post />
			<Post />
		</Container>
	)
}

export default Feed
