const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
    console.log(`Params Server on port ${port}`);
});

// Root -> redirect to /home
app.get("/", (req, res) => {
    res.redirect("/home");
});

// Static routes first (higher specificity)
app.get("/home", (req, res) => {
    res.send("I am the Home page");
});

// Exact /doggy
app.get("/doggy", (req, res) => {
    res.send("I am the doggy route");
});

// Exact /doggy/cat
app.get("/doggy/cat", (req, res) => {
    res.send("I am the doggy/cat route");
});

// Param with suffix: /:doggy/cat (must come after exact /doggy/cat)
app.get("/:doggy/cat", (req, res) => {
    res.send("I am the doggy/cat route");
});

// Generic single-param route last to avoid catching specific routes
app.get("/:doggy", (req, res) => {
    res.type("text/plain").send(req.params.doggy);
});

// Bank route with validation
app.get("/bank/:name/account/:money", (req, res) => {
    const { name, money } = req.params;
    const amount = Number(money);

    if (Number.isNaN(amount)) {
        return res.status(400).send("Please submit again with a numerical value");
    }

    res.send(`${name} has $${amount + 10}`);
});

