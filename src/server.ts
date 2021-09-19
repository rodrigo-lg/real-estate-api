import { app } from './app'

const port = process.env.PORT || 80

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
