
if ( global.redisClient  == null) {
const redis = require("redis");
const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379,
  password: ''
});

client.on("error", function(error) {
  console.error(error);
});

global.redisClient = client;
}
module.exports = global.redisClient 