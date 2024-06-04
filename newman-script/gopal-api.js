const newman = require("newman");

newman.run({
    collection: require("./json-collection/gopal.postman_collection.json"),
    environment: require("./json-env/gopal.postman_environment.json"),
    reporters: ["cli", "htmlextra"],
});
