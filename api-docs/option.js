
module.exports = options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: " Express API with Swagger",
            version: "0.1.0",
        description:
            "This is a simple API application made with Express and documented with Swagger",
        contact: {
            name: "Nguyen Huu Toan",
            email: "huutoan2603@gmail.com",
        },
        },
        servers: [
        {
            url: "https://assignment3-api-docs.herokuapp.com",
        },
        ],
    },
    apis: ["./routers/router.js"],
};