const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT
const authMiddleware = (req, res, next) => {
  // Get token from headers
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token, authorization denied'});
  }

  // Split the authHeader to get the token part
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied'});
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.jwt_key);

    // Attach user to request object
    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
