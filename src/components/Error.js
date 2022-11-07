import {Stack, Alert, AlertTitle} from '@mui/material'

const Error = ({error}) => {
    return (
        <Stack sx={{width: '100%'}} spacing={2}>
            <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                {error.message}
            </Alert>

        </Stack>
    )
}

export default Error