const express = require('express')
    , consign = require('consign')
    , port = 4000
    , app = express()

consign().include('app/controllers').then('app/routes').into(app)

app.listen(port, () => {
    console.log(`Server on port: ${port}`)
})