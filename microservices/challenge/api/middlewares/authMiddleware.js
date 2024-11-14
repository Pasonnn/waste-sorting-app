// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attaching the decoded user info to the request object
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};
