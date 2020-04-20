const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const token = req.headers.authorization;
	const dept = req.headers.dept;
	if (token) {
		if (dept === "cleaning") {
			next();
		} else {
			res.status(401).json({ message: 'You dont belong here!' });
		}
	} else {
		res.status(401).json({ message: 'No token' });
	}
}