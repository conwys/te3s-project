import request from "supertest";
import app from "../app.js";
import { expect, test } from "@jest/globals";
import { resetTable } from "../db/helpers.js";
import { pool } from "../db/index.js";

// Reset tables before each test
beforeEach(async () => {
  await resetTable();
});

// Test for GET by name
test("GET card by name", async () => {
  const response = await request(app).get("/api/cards/?name=roman");
  expect(response.status).toStrictEqual(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: [
      {
        card_id: 1,
        first_name: "Roman",
        last_name: "Hadjisergis",
        image:
          "https://media-exp1.licdn.com/dms/image/C4E03AQESW-XZpUTkag/profile-displayphoto-shrink_200_200/0/1661709031700?e=1674691200&v=beta&t=GleE5LiuX5BTiHAnzckNXRh-twL17PN533avRDHUHWM",
        profession: "DevOps Engineer",
        linkedin_username: "roman-hadjisergis",
        github_username: "romanhadjisergis",
        email: "roman@roman.com",
        phone: "+44 7000 0000",
        password: "pass",
      },
    ],
  });
});

// Test for GET by email
test("GET card by email", async () => {
  const response = await request(app).get("/api/cards/?email=ben@ben.com");
  expect(response.status).toStrictEqual(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      card_id: 5,
      first_name: "Ben",
      last_name: "Lloyd",
      image:
        "https://media-exp1.licdn.com/dms/image/D4E03AQGAm-_-96TjdQ/profile-displayphoto-shrink_200_200/0/1669112547798?e=1674691200&v=beta&t=VCofBoCgez1pWbi1LbA9N_C7w_7RHUN0cx53NEGiEQI",
      profession: "Full Stack Engineer",
      linkedin_username: "benll6yd",
      github_username: "conwys",
      email: "ben@ben.com",
      phone: "+44 7000 0000",
      password: "pass",
    },
  });
});

// Test to make a new card
test("POST card by name", async () => {
  const response = await request(app).post("/api/cards/").send({
    first_name: "Jane",
    last_name: "Doe",
    image: null,
    profession: "Director of Business",
    linkedin_username: "jane-doe",
    github_username: "janedoe",
    email: "jane@jane.com",
    phone: "+44 7000 0000",
    password: "pass",
  });
  expect(response.status).toStrictEqual(201);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      card_id: expect.any(Number),
      first_name: "Jane",
      last_name: "Doe",
      image: null,
      profession: "Director of Business",
      linkedin_username: "jane-doe",
      github_username: "janedoe",
      email: "jane@jane.com",
      phone: "+44 7000 0000",
      password: "pass",
    },
  });
});

// Test to edit card by id
test("PATCH card by id", async () => {
  const response = await request(app).patch("/api/cards/1").send({
    first_name: "Rob",
    last_name: "Lloyd",
    image:
      "https://media-exp1.licdn.com/dms/image/D4E03AQGAm-_-96TjdQ/profile-displayphoto-shrink_200_200/0/1669112547798?e=1674691200&v=beta&t=VCofBoCgez1pWbi1LbA9N_C7w_7RHUN0cx53NEGiEQI",
    profession: "DevOps Engineer",
    linkedin_username: "benll6yd",
    github_username: "conwys",
    email: "ben@ben.com",
    phone: "+44 7000 0000",
    password: "pass",
  });
  expect(response.status).toStrictEqual(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      card_id: 1,
      first_name: "Rob",
      last_name: "Lloyd",
      image:
        "https://media-exp1.licdn.com/dms/image/D4E03AQGAm-_-96TjdQ/profile-displayphoto-shrink_200_200/0/1669112547798?e=1674691200&v=beta&t=VCofBoCgez1pWbi1LbA9N_C7w_7RHUN0cx53NEGiEQI",
      profession: "DevOps Engineer",
      linkedin_username: "benll6yd",
      github_username: "conwys",
      email: "ben@ben.com",
      phone: "+44 7000 0000",
      password: "pass",
    },
  });
});

// Test to delete card by id
test("DELETE card by id", async () => {
  const response = await request(app).delete("/api/cards/5");
  expect(response.status).toStrictEqual(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      card_id: 5,
      first_name: "Ben",
      last_name: "Lloyd",
      image:
        "https://media-exp1.licdn.com/dms/image/D4E03AQGAm-_-96TjdQ/profile-displayphoto-shrink_200_200/0/1669112547798?e=1674691200&v=beta&t=VCofBoCgez1pWbi1LbA9N_C7w_7RHUN0cx53NEGiEQI",
      profession: "Full Stack Engineer",
      linkedin_username: "benll6yd",
      github_username: "conwys",
      email: "ben@ben.com",
      phone: "+44 7000 0000",
      password: "pass",
    },
  });
  const getResponse = await request(app).get("/api/cards/?name=e");
  expect(getResponse.status).toStrictEqual(200);
  expect(getResponse.body.payload.length).toStrictEqual(4);
});

// Kill the pool when tests done (doesn't work properly)
afterAll(async () => {
  await resetTable();
  pool.end();
});
