const request = require("supertest");

const apiURL = "https://oyku-perf-api.herokuapp.com/api/analytics";

describe('GET RESPONSES', function() {
  it('getbymin respond last 30 minute data with json', function(done) {
    request(apiURL)
      .get('/getbymin/30')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('getbymin respond last random 1-45 minute data with json', function(done) {
    const minute = Math.floor(Math.random() * 45) + 1;
    request(apiURL)
      .get('/getbymin/'+minute)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST RESPONSES', function() {
  it('Post data', function(done) {
    request(apiURL)
      .post("/")
      .send(
        {
          url: "JEST",
          ttfb: 1,
          fcp: 1,
          domLoad: 1,
          windowLoad: 1,
          networkTiming: 1
        }
      )
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it('Get 1 week ago and today data', function(done) {
    var today = new Date();
    var weekago = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);

    request(apiURL)
      .post("/getByDate")
      .send(
        {
          start: weekago,
          end: today
        }
      )
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });
});