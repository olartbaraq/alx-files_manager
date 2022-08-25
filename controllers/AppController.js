const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

export default class AppController {
    static getStatus(req, res) {
        const statusNow = {
            redis: redisClient.isAlive(), 
            db: dbClient.isAlive()
        };
        res.status(200).send(status);
    }
    static async getStats(req, res) {
        const stats ={
            users: await dbClient.nbUsers,
            files: await dbClient.nbFiles
        }
        res.status(200).send(status);
    }
}