import mongoose from 'mongoose';

class Database {
    constructor() {
        this.mongo();
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            process.env.MONGO_URL, {
                useNewUrlParser: true, // estou utilizando um formato novo na string de conexão
                useFindAndModify: true, // para poder buscar e atualizar os registros
                useUnifiedTopology: true, // DeprecationWarning apareceu no console então eu estou usando, conforme a recomendação do mongo
            }
        );
    }
}

export default new Database();