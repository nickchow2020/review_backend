"use strict";

const db = require("../db");
const User = require("../models/user");
const dogPlace = require("../models/dogPlace");
const { createToken } = require("../helpers/tokens");

async function commonBeforeAll(){
  // initial all user to empty
  await db.query("DELETE FROM users")

  await User.register({
    username:"test1",
    password:"passwordTest1",
    first_name:"test1First",
    last_name:"test1Last",
    email:"test1@gamil.com",
    is_admin:false,
    avatar_url:"test1.com"
  })

  await User.register({
    username:"test2",
    password:"passwordTest2",
    first_name:"test2First",
    last_name:"test2Last",
    email:"test2@gamil.com",
    is_admin:false,
    avatar_url:"test2.com"
  })
}

async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}

const u1Token = createToken({ username: "test1", isAdmin: false });
const u2Token = createToken({ username: "test2", isAdmin: false });
const adminToken = createToken({ username: "adminTest", isAdmin: true });

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  u1Token,
  u2Token,
  adminToken
}

