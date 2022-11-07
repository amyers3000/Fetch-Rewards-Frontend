
        export async function signUp(credentials) {
            const response = await fetch('https://frontend-take-home.fetchrewards.com/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            return response
        }