module.exports = (fn, catchMsg) => {
	try {
			return [null, fn()];
	} catch(e) {
			console.warn(catchMsg);
			return [e];
	}
};
