import {
	Avatar,
	Container,
	Divider,
	ImageList,
	ImageListItem,
	Link,
	Typography,
} from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import { useStyles } from '../customThemes'

const RightBar = () => {
	const classes = useStyles()
	return (
		<Container className={classes.container_right}>
			<Typography gutterBottom className={classes.title}>
				Online Friends
			</Typography>
			<AvatarGroup max={5} className={classes.avatar}>
				<Avatar
					alt='Remy Sharp'
					src='https://material-ui.com/static/images/avatar/1.jpg'
				/>
				<Avatar
					alt='Travis Howard'
					src='https://material-ui.com/static/images/avatar/2.jpg'
				/>
				<Avatar
					alt='Cindy Baker'
					src='https://material-ui.com/static/images/avatar/3.jpg'
				/>
				<Avatar
					alt='Agnes Walker'
					src='https://material-ui.com/static/images/avatar/4.jpg'
				/>
				<Avatar
					alt='Trevor Henderson'
					src='https://material-ui.com/static/images/avatar/5.jpg'
				/>
				<Avatar
					alt='Trevor Henderson'
					src='https://material-ui.com/static/images/avatar/5.jpg'
				/>
				<Avatar
					alt='Trevor Henderson'
					src='https://material-ui.com/static/images/avatar/5.jpg'
				/>
				<Avatar
					alt='Trevor Henderson'
					src='https://material-ui.com/static/images/avatar/5.jpg'
				/>
			</AvatarGroup>
			<Typography gutterBottom className={classes.title}>
				Gallery
			</Typography>
			<ImageList rowHeight={150} className={classes.imageList} cols={2}>
				<ImageListItem>
					<img
						src='https://material-ui.com/static/images/image-list/breakfast.jpg'
						alt='1'
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src='https://material-ui.com/static/images/image-list/burgers.jpg'
						alt='2'
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src='https://material-ui.com/static/images/image-list/camera.jpg'
						alt='3'
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src='https://material-ui.com/static/images/image-list/morning.jpg'
						alt='4'
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src='https://material-ui.com/static/images/image-list/vegetables.jpg'
						alt='5'
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src='https://material-ui.com/static/images/image-list/hats.jpg'
						alt='6'
					/>
				</ImageListItem>
			</ImageList>
			<Typography gutterBottom className={classes.title}>
				Categories
			</Typography>
			<Link href='#' className={classes.link} variant='body2'>
				Sport
			</Link>
			<Link href='#' className={classes.link} variant='body2'>
				Science
			</Link>
			{/* <Divider flexItem className={classes.avatar} /> */}
			<Link href='#' className={classes.link} variant='body2'>
				Movies
			</Link>
			<Link href='#' className={classes.link} variant='body2'>
				Food
			</Link>
			<Link href='#' className={classes.link} variant='body2'>
				Music
			</Link>
			<Link href='#' className={classes.link} variant='body2'>
				Life
			</Link>
		</Container>
	)
}

export default RightBar
