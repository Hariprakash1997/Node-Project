exports.getIndex = (req, res, next) => {
    res.render('public/index', { pageTitle: 'Home' });
};