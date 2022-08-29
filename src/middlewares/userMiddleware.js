let admin = ["Ada", "Greta", "Vim", "Tim"];

const adminMiddleware = (req, res, next) => {
    if(admin.includes(req.query.user)){
        next();
    } else {
        res.send('No tienes los privilegios para ingresar');
    }
}

module.exports = adminMiddleware;