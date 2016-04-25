import * as hapi from 'hapi';
import { LangItem, data } from './data';


const server = new hapi.Server();

server.connection({ port: 8999 });

server.start((err) => {
    if(err) {
        console.log(err);
        throw err;
    }
    
    console.log('server running at:', server.info.uri);
})

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => { 
        return reply('flashcards api');
    }
});


server.route({
    method: 'GET',
    path: '/lang-item/{id}',
    handler: (request, reply) => {
        const item = data[request.params["id"]];
        
        return reply(item);
    }
});


server.route({
    method: 'GET',
    path: '/lang-item/next',
    handler: (request, reply) => {
        const keys = Object.keys(data);
        
        const item = data[keys[Math.floor( Math.random() * keys.length )]];

        return reply(item);
    }
})