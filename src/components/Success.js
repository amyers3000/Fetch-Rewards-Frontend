import {Stack, Alert, AlertTitle} from '@mui/material'

const Success = () => {
    return (
        <Stack sx={{width: '100%'}} spacing={2}>
            <Alert severity='success'>
                <AlertTitle>Success!</AlertTitle>
                -Info successfully submittted-
            </Alert>

        </Stack>
    )
}

export default Success