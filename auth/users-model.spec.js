const request = require('supertest');

const Users = require('../auth/users-model');
const db = require('../database/dbConfig');
const server = require('../api/server');


    
    // Login endpoint
    describe('/api/auth/login', () => {
        it('should return status 200', async () => {
            await request(server).post('/api/auth/register').send({username: 'testUser', password: '1234'})
            return request(server).post('/api/auth/login').send({username: 'testUser', password: '1234'})
            .then(res => {
                expect(res.status).toBe(200)
            })
        });
        it('should return a token upon successful login', async () => {
            await request(server).post('/api/auth/register').send({username: 'testUser', password: '1234'})
            return request(server).post('/api/auth/login').send({username: 'testUser', password: '1234'})
            .then(res => {
                expect(res.body.token).toBeUndefined
            })
        });
    });
