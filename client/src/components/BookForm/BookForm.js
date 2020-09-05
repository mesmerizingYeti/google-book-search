import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button
} from '@material-ui/core/'
import SearchContext from '../../utils/SearchContext'

const useStyles = makeStyles(theme => ({
  formGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'middle',
    alignItems: 'center'
  },
  width100: {
    width: '100%'
  }
}))

const BookForm = () => {
  const classes = useStyles()
  const { handleInputChange, handleSearch, book } = useContext(SearchContext)

  const handleInputEnter = event => {
    if (event.key === 'Enter') {
      handleSearch(event)
    }
  }

  return (
    <Container align='center'>
      <Grid container spacing={3} justify="center">
        <Grid item xs={8} sm={6} className={classes.formGrid}>
          <Card className={classes.width100}>
            <CardContent>
              <form noValidate autoComplete="off" className={classes.width100}>
                <TextField type='text' name='book' id="standard-basic" label="Book Title" value={book} onChange={handleInputChange} onKeyPress={handleInputEnter} className={classes.width100} />
                <br />
                <br />
                <Button variant="contained" color="primary" onClick={handleSearch} className={classes.width100}>
                  SEARCH
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BookForm