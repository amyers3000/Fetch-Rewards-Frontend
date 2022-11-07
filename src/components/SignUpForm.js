import { useState } from 'react'
import { signUp } from '../lib'
import Error from './Error'
import { Box, TextField, Grid, Container, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material'

const SignUpForm = ({ occupations, states }) => {
    let [error, setError] = useState({ display: false, message: '' })
    let [success, setSuccess] = useState(false)
    let [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        occupation: '',
        state: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()
        let data = await signUp(credentials)
        if(data){
            setSuccess(true) 
        }else{
            setError({ ...error, display: true, message: data.message })
        }
        console.log(success)
        
    }

    return (
        <Container component='main' maxWidth='xs'>
            {error.display && <Error setError={setError} error={error}/>}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                            <Select
                                name='state'
                                required
                                fullWidth
                                id='state'
                                labelId='state'
                                label='state'
                                value={credentials.state}
                                onChange={e => setCredentials({ ...credentials, state: e.target.value })}
                            >
                                {!!states && states.map((state, index) => (
                                    <MenuItem key={index} value={state.name}>
                                        {state.abbreviation}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl required fullWidth>
                            <InputLabel id='occupation'>Occupation</InputLabel>
                            <Select
                                name='occupation'
                                required
                                fullWidth
                                id='occupation'
                                labelId='occupation'
                                label='Occupation'
                                value={credentials.occupation}
                                onChange={e => setCredentials({ ...credentials, occupation: e.target.value })}
                            >
                                {!!occupations && occupations.map((occupation, index) => (
                                    <MenuItem key={index} value={occupation}>
                                        {occupation}
                                    </MenuItem>
                                ))}
                            </Select>
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