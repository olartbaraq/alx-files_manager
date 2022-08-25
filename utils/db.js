import { MongoClient } from 'mongodb';
const HOST = process.env.DB_HOST || 'localhost';
const PORT = process.env.DB_PORT || 27017;
const DATABASE = process.env.DB_DATABASE || 'files_manager';


const url = `mongodb://${HOST}:${PORT}`;

class DBClient {
    constructor() {
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
            if(!err) {
                this.db = client.db(DATABASE);
                this.usersCollection = this.db.collection('users');
                this.filesCollection = this.db.collection('files');
            }
        });
    }
    isAlive() {
        if (this.db) {
            return true;
        } else {
            return false;
        }
    }
    async nbUsers() {
        const totalUsers = await this.usersCollection.countDocuments();
        return totalUsers;
    }
    async nbFiles() {
        const totalFiles = await this.filesCollection.countDocuments();
        return totalFiles;
    }
}
const dbClient = new DBClient();
export default dbClient;