const request = require('supertest');
const server = require('../app');

test('Deve responder à rota /users com status 200', async () => {
    const response = await request(server).get('/users');
    expect(response.statusCode).toBe(200);
});

test('Deve responder à rota inexistente com status 404', async () => {
    const response = await request(server).get('/rota-inexistente');
    expect(response.statusCode).toBe(404);
});

test('Deve responder à rota /users com status 200', async () => {
    const response = await request(server)
        .post('/users')
        .send({ name: 'Alice', email: 'alice@example.com', password: 'secret' });

    expect(response.statusCode).toBe(201);
});

test('Deve responder à rota /users com status 404 por não conter um body', async () => {
    const response = await request(server)
        .post('/users')
        .send({});
    expect(response.statusCode).toBe(400);
});