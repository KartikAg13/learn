import express from "express";

import pool from "./db";

const app = express();

app.use(express.json());

// API endpoint to receive form data
app.post("/api/submit", async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	try {
		await pool.query(
		"INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
		[firstName, lastName, email, password]
		);
		res.status(200).send("Data inserted successfully");
	} catch (error) {
		console.error("Error inserting data:", error);
		res.status(500).send("Error inserting data");
	}
});

// Start server
app.listen(5000, () => {
  	console.log("Server running on port 5000");
});