import redis from 'redis';
import { promisify } from 'util';

class RedisClient {
    constructor() {
        this.client = redis.createClient();
        this.getAsync = promisify(this.client.get).bind(this.client);
        this.client.on('error', (error) => console.log(`${error.message}`));
    }
    isAlive() {
        try {
            this.client.on('connect', () => {
            });
            return true;
        } catch (error) {
            return false;
        }
    }
    async get(key) {
        const value = await this.getAsync(key);
        return value;
    }
    async set(key, value, time) {
        this.client.setex(key, time, value);
    }
    async del(key) {
        this.client.del(key)
    }
}
const redisClient = new RedisClient();
export default redisClient;