"use strict"

describe("test config with env",function(){
  test ("it works",function(){
    process.env.SECRET_KEY = "abc";
    process.env.PORT = "5000";
    process.env.DATABASE_URL = "db_for_abc";
    process.env.NODE_ENV = "other";

    const config = require("./config");

    expect(config.SECRET_KEY).toEqual("abc");
    expect(config.PORT).toEqual(5000);
    expect(config.getDatabaseUri()).toEqual("db_for_abc");

    delete process.env.SECRET_KEY;
    delete process.env.PORT;
    delete process.env.DATABASE_URL;

    expect(config.getDatabaseUri()).toEqual("animal_parts_hospitals")
    
    process.env.NODE_ENV = "test"

    expect(config.getDatabaseUri()).toEqual('animal_parts_hospitals_test')
  })
})