const request = require('supertest');
const app = require('../app'); // Adjust the path as needed

describe('GET /api', () => {
    it('should return 200 and appropriate data', async () => {
        const response = await request(app).get('/api');
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            // Expected data structure
            // Add your expected properties here
        }));
    });

    it('should return 404 for non-existing endpoint', async () => {
        const response = await request(app).get('/api/nonexistent');
        
        expect(response.status).toBe(404);
    });
});