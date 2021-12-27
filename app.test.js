const request = require("supertest")

const app = require("./app")
const db = require("./db")

test("not existing route",async function(){
  const resp = await request(app).get("/no-such-route")
  expect(resp.statusCode).toEqual(404)
})

afterAll(function(){
  db.end()
})

