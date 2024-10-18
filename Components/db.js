import Dexie from 'dexie';

const db = new Dexie('BancoDeProdutos1');
db.version(1).stores({
    produtos: '++id, nome, valor, quantidade, total'
});

export default db;