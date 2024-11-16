module.exports = {
    services: {
        category: "http://localhost:4001",
        challenge: "http://localhost:4002",
        item: "http://localhost:4003",
        user: "http://localhost:4004",
    },
    jwtSecret: process.env.JWT_SECRET,
};
