const express = require('express')
const app = express()
require('./Connection/mongodb')
const userRoutes = require('./Router/userRoutes')
const adminRoutes = require('./Router/adminRoutes')

const cors = require('cors');
app.use(cors());
app. use(express. json())

app.use(userRoutes)
app.use(adminRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT , () => {
    console.log('server created')
})


