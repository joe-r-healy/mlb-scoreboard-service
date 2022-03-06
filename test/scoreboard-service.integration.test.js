const app = require('../src/app');
const expect = require('chai').expect;
const supertest = require('supertest');

const date = '2021-09-19';
const teamId = 121;

describe('Scoreboard service API integration tests', async () => {
    it('should return 200 with json data', async () => {
        const urlString = `/scoreboard?date=${date}&teamId=${teamId}`;
        try {
            const res = await supertest(app).get(urlString);
            expect(res.status, 'response status: ').to.equal(200);
            expect(res.body.dates[0].games[0].teams.home.team.id, 'response body, first game:').to.equal(teamId);
        } catch(err) {
            throw err;
        }
    });
})