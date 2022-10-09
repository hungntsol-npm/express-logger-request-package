const loggerRequest = (req, res, next) => {
	const ip = req.headers["x-forward-for"] || req.socket.remoteAddress;
	const route = req.originalUrl;
	const method = req.method;

	next();

	const statusCode = res ? res.statusCode.toString() : "";

	console.log(
		`${ip} -- [${new Date().toGMTString()}] "${method} ${route} ${statusCode}"`
	);
};

module.exports = loggerRequest;
