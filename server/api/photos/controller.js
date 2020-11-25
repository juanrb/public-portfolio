const services = require('./services');

exports.getList = async (req, res, next) => {
	res.send(await services.getList(req.originalUrl, res));
};

exports.getOne = async (req, res, next) => {
	res.send(await services.getOne(req.params.id));
};

// exports.create = async (req, res, next) => {
// 	res.send(await services.create(req.body));
// };

// exports.update = async (req, res, next) => {
// 	res.send(await services.update(req.params.id, req.body));
// };

// exports.delete = async (req, res, next) => {
// 	res.send(await services.delete(req.params.id));
// };
