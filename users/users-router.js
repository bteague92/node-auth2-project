const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', (req, res) => {
	const dept = req.headers.dept;
	Users.find(dept)
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => {
			res.status(401).send({ message: err });
		})
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	if (id) {
		Users.findById(id)
			.then(user => {
				if (user == undefined) {
					res.status(404).json({ message: 'could not find user' })
				}
				res.status(200).json(user);
			})
			.catch(err => {
				console.log(err)
				res.status(500).json({ message: 'could not find user' })
			})
	} else {
		res.status(404).json({ message: 'No such user' });
	}
})

router.get('/role/:dept', (req, res) => {
	const { dept } = req.params;
	if (dept) {
		Users.findBy({ dept })
			.then(user => {
				res.status(200).json(user);
			})
			.catch(err => {
				res.status(500).json({ message: 'error finding user' })
			})
	} else {
		res.status(404).json({ message: 'Please provide a dept' });
	}
})

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	if (id && changes) {
		Users.update(id, changes)
			.then(user => {
				res.status(201).json(user);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({ message: 'Could not update user' });
			})
	} else {
		res.status(400).json({ message: 'Nothing was update for the user' });
	}
})

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	Users.remove(id)
		.then(removed => {
			if (removed) {
				res.status(200).json({ message: 'User successfully deleted' });
			} else {
				res.status(404).json({ message: 'Could not find user' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Could not delete user' })
		})
})

module.exports = router;