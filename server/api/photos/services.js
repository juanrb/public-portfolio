// const model = require('./_model');
const fetch = require('node-fetch');

exports.getList = async (url, res) => {
	const r = await fetch(`${process.env.BACKEND_ENDPOINT}${url}`);
	const j = await r.json();

	res.set('Access-Control-Expose-Headers', ['X-Total-Count']);
	res.set('X-Total-Count', r.headers.get('X-Total-Count'));
	return j;
}
exports.getOne = async (id) => {
	const r = await fetch(`${process.env.BACKEND_ENDPOINT}/photos/${id}`);
	const j = await r.json();

	return j;
}
// exports.create = async (obj) => await model.Photos.create(obj);
// exports.update = async (id, obj) => await model.Photos.update(obj, { where: { id } });
// exports.delete = async (id) => await model.Photos.destroy({ where: { id } });
