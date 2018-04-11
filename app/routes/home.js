module.exports = ( application ) => {
    application.get('/', ( req, res ) => {
        application.app.controllers.home.getProducts( application, req, res )
    })
}