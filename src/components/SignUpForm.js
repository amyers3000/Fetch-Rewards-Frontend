import { useState, useEffect } from 'react'
import Error from './Error'
import { Box, TextField, Grid, Container, Button, InputLabel, FormControl } from '@mui/material'
import Success from './Success'
import { apiCall } from '../lib'
import List from './List'

const SignUpForm = () => {
    let [error, setError] = useState({ display: false, message: '' })
    let [success, setSuccess] = useState(false)
    const [data, setData] = useState({})
    let [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        occupation: '',
        state: ''
    })

    useEffect(() => {
        apiCall('GET')
          .then(res => res.json())
          .then(response => setData(response))
          .catch(e => console.log(e))
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        apiCall('POST', credentials)
            .then(response => {
                if (response.ok) {
                    setSuccess(true)
                    setCredentials({
                        name: '',
                        email: '',
                        password: '',
                        occupation: '',
                        state: ''
                    })
                } else {
                    setError({ display: true, message: response.message })
                }
            })
            .catch(e => console.log(e))

    }

   

    return (
        <Container component='main' maxWidth='xs' sx={{ pt: 10 }}>
            {error.display && <Error error={error} />}
            {success && <Success />}
            <Box component="form" autoComplete='off' onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name='name'
                            required
                            fullWidth
                            id='name'
                            label='Full Name'
                            value={credentials.name}
                            onChange={e => setCredentials({ ...credentials, name: e.target.value })}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='email'
                            required
                            fullWidth
                            label='Email'
                            id='email'
                            type='email'
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl required fullWidth>
                            <InputLabel id='state'>State</InputLabel>
                            <List
                                list={data.states}
                                format={({ name }) => name}
                                secondFormat={({ abbreviation }) => abbreviation}
                                listId="state"
                                handleChange={e => setCredentials({ ...credentials, state: e.target.value })}
                                value={credentials.state}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl required fullWidth>
                            <InputLabel id='occupation'>Occupation</InputLabel>
                            <List
                                list={data.occupations}
                                listId="occupation"
                                handleChange={e => setCredentials({ ...credentials, occupation: e.target.value })}
                                credentials={credentials}
                                value={credentials.occupation}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    )
}

export default SignUpForm