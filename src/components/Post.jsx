import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core'
import { Share } from '@material-ui/icons'
import { useStyles } from '../customThemes'

const Post = () => {
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image='https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
					title='My-Post'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5'>
						My First Post
					</Typography>
					<Typography variant='body2'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Quasi illum accusantium officiis iure, magni maxime amet sint
						odio non debitis nobis aperiam voluptatum omnis alias quidem!
						Accusamus deserunt minima nihil? Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Quasi illum accusantium
						officiis iure, magni maxime amet sint odio non debitis nobis
						aperiam voluptatum omnis alias quidem! Accusamus deserunt
						minima nihil?
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary'>
					<Share /> Share
				</Button>
				<Button size='small' color='primary'>
					Learn More
				</Button>
			</CardActions>
		</Card>
	)
}

export default Post
