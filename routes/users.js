module.exports = (app) => {
  app.get("/users", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      users: [
        {
          name: "Maycon",
          email: "maycon-ro@hotmail.com",
          id: 1,
        },
      ],
    });
  });

  app.post("/users/admin", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      users: [],
    });
  });
};
