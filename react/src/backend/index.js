import express from "express";
import fs from "node:fs/promises";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, "data", "expenses.json");

app.use(cors());
app.use(express.json());

app.get("/expenses", async (req, res) => {
  try {
    const fileContent = await fs.readFile(DATA_PATH, "utf-8");

    if (!fileContent || fileContent.trim() === "") {
      console.log("VIGA: expenses.json on tühi!");
      return res.status(200).json([]);
    }
    const expensesData = JSON.parse(fileContent);
    res.status(200).json(expensesData);
  } catch (error) {
    console.log("BACKENDI TERMINALIS NÄED SEDA VIGA:", error.message);
    res.status(500).json({ message: "Serveri viga" });
  }
});

app.post("/expenses", async (req, res) => {
  try {
    const newExpense = req.body;
    const fileContent = await fs.readFile(DATA_PATH, "utf-8");
    const expensesData = JSON.parse(fileContent);

    expensesData.push(newExpense);

    await fs.writeFile(DATA_PATH, JSON.stringify(expensesData, null, 2));
    res.status(201).json({ message: "Kulu lisatud!" });
  } catch (error) {
    console.error("SALVESTAMISE VIGA:", error.message);
    res.status(500).json({ message: "Salvestamine ebaõnnestus." });
  }
});

app.listen(3001, () => {
  console.log("Server jookseb pordil 3001");
  console.log("Andmefail peaks asuma siin:", DATA_PATH);
});
