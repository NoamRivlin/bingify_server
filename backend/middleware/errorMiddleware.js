const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    msg: err.message,
    stack: process.env.node_env === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };
