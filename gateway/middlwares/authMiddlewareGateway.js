const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');

        // Check if Authorization header is present
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Access denied. No token provided or invalid format.' });
        }

        // Extract token
        const token = authHeader.replace('Bearer ', '');

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded token payload to req.user
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token.', details: error.message });
    }
};
