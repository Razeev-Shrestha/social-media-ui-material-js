import {
	Button,
	Container,
	Fab,
	FormControlLabel,
	FormLabel,
	MenuItem,
	Modal,
	Radio,
	RadioGroup,
	Snackbar,
	TextField,
	Tooltip,
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import AddIcon from '@material-ui/icons/Add'
import { useState } from 'react'
import { useStyles } from '../customThemes'

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />
}

const Add = () => {
	const classes = useStyles()
	const [openAlert, setOpenAlert] = useState(false)
	const [open, setOpen] = useState(false)
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpenAlert(false)
	}
	return (
		<>
			<Tooltip title='Add' aria-label='add' onClick={() => setOpen(true)}>
				<Fab color='primary' className={classes.fab}>
					<AddIcon />
				</Fab>
			</Tooltip>
			<Modal open={open}>
				<Container className={classes.cntiner}>
					<form className={classes.form} autoComplete='off'>
						<div className={classes.items}>
							<TextField
								id='standard-basic'
								label='Title'
								size='small'
								className={classes.textfield}
							/>
						</div>
						<div className={classes.items}>
							<TextField
								id='outlined-multiline-static'
								multiline
								rows={4}
								defaultValue='Post Your Story...'
								label='Description'
								variant='outlined'
								size='small'
								className={classes.textfield}
							/>
						</div>
						<div className={classes.items}>
							<TextField select label='visibility' value='Public'>
								<MenuItem value='Public'>Public</MenuItem>
								<MenuItem value='Private'>Private</MenuItem>
								<MenuItem value='Unlisted'>Unlisted</MenuItem>
							</TextField>
						</div>
						<div className={classes.items}>
							<FormLabel component='legend'>Who Can Comment</FormLabel>
							<RadioGroup>
								<FormControlLabel
									value='EveryBody'
									control={<Radio size='small' />}
									label='EveryBody'
								/>
								<FormControlLabel
									value='My Friends'
									control={<Radio size='small' />}
									label='My Friends'
								/>
								<FormControlLabel
									value='No Body'
									control={<Radio size='small' />}
									label='No Body'
								/>
								<FormControlLabel
									value='Custom'
									disabled
									control={<Radio size='small' />}
									label='Custom (Premium)'
								/>
							</RadioGroup>
						</div>
						<div className={classes.items}>
							<Button
								variant='outlined'
								color='Primary'
								className={classes.outlined}
								onClick={() => setOpenAlert(true)}>
								Create
							</Button>
							<Button
								variant='outlined'
								color='secondary'
								onClick={() => setOpen(false)}>
								Cancel
							</Button>
						</div>
					</form>
				</Container>
			</Modal>
			<Snackbar
				open={openAlert}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				autoHideDuration={6000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity='success'>
					Your Post Has Been Uploaded
				</Alert>
			</Snackbar>
		</>
	)
}

export default Add
