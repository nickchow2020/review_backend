"use strict"

const request = require("supertest");

const app = require("../app");

const {
  commonAfterAll,
  commonBeforeEach,
  commonAfterEach,
  commonBeforeAll

} = require("./_testCommon");


beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

describe("Register /register", function(){
  test("register user", async function(){

    const resp = await request(app)
        .post("/auth/register")
        .send({
          username:"test3",
          password:"passwordTest3",
          first_name:"test3First",
          last_name:"test3Last",
          email:"test3@gamil.com",
          is_admin:false,
          avatar_url:"test3.com"
        })

    expect(resp.statusCode).toEqual(201)
    expect(resp.body).toEqual({"token": expect.any(String)});
  })

  test("check duplicate user",async function(){
    const resp = await request(app)
    .post("/auth/register")
    .send({
      username:"test2",
      password:"passwordTest3",
      first_name:"test3First",
      last_name:"test3Last",
      email:"test3@gamil.com",
      is_admin:false,
      avatar_url:"test3.com"
    })

    expect(resp.statusCode).toEqual(400)
  })
})


describe("getting Token /token", function(){
  test("getting token",async function(){
    const resp = await request(app)
          .post("/auth/token")
          .send({
            username:"test1",
            password:"passwordTest1"
          })

    expect(resp.body).toEqual({"token": expect.any(String)});
  })

  test("Test fake user", async function(){
    const resp = await request(app)
      .post("/auth/token")
      .send({
        username:"test-un-auth",
        password:"passwordTest1"
      })

    expect(resp.statusCode).toEqual(401)
  })
})