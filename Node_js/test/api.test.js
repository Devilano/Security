const request = require("supertest");
const app = require("../index");

// individual file for each model.
// describe collection of test cases
// it => defines a test cases
// index ma

describe("API Testings", () => {
  // Testing the test route '/test'
  it("GET /test | Response with valid text Hello", async () => {
    const response = await request(app).get("/test");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello from experess server");
  });

  // testing get all products route  /api/product/get_products
  it("GET /api/party/get_party | Response with valid json", async () => {
    const response = await request(app).get("/api/party/get_party");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Fetched");
  });

  it('GET Party  | Fetch All Party' , async()=>{
    const response = await request(app).get("/api/party/get_party")
    expect(response.body.success).toBe(true);
    expect(response.body).toHaveProperty("party")
  })

  // testing user registration route /api/use/create
  it("POST /api/user/create | Response with valid json", async () => {
    const response = await request(app).post("/api/user/create").send({
      firstName: "Test",
    lastName: "User",
    age: "30",
    address: "123 Test Street",
    party: ["UML"], // Representing party as an array with multiple values
    citizenno: "37027700800",
    email: "kumara@gmail.com",
    password: "password123"
    });
    console.log(response.body);
    if (response.body.success) {
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("user created sucessfully");
    } else {
      // expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("User Already Exists");
    }
  });

  it('GET Party  | Fetch All Party' , async()=>{
    const response = await request(app).get("/api/party/get_party")
    expect(response.body.success).toBe(true);
    expect(response.body).toHaveProperty("party")
  })

  it('GET Party  | Fetch All Party' , async()=>{
    const response = await request(app).get("/api/party/get_party")
    expect(response.body.success).toBe(true);
    expect(response.body).toHaveProperty("party")
  })

  it('GET Party  | Fetch All Party' , async()=>{
    const response = await request(app).get("/api/party/get_party")
    expect(response.body.success).toBe(true);
    expect(response.body).toHaveProperty("party")
  })

    // testing user registration route /api/use/create
    it("POST /api/user/login | Response with valid json", async () => {
        const response = await request(app).post("/api/user/login").send({
          email: "admin@gmail.com",
          password: "admin",
        });
        console.log(response.body);
          // expect(response.body.success).toBe(true);
          expect(response.body.message).toBe("User Logged in Sucessful.");

        //   
        expect(response.body.token).toBeDefined()
      });

      it('GET Party  | Fetch Single Party' , async()=>{
        const response = await request(app).get("/api/party/get_party/65e498ae0514796f53f9e9ed")
        expect(response.body.success).toBe(true);
        // expect(response.body).toHaveProperty("party")
      })

      it('GET Party  | Fetch All Party' , async()=>{
        const response = await request(app).get("/api/party/get_party")
        expect(response.body.success).toBe(true);
        expect(response.body).toHaveProperty("party")
      })

      
});