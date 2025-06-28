// backend/server.js
import express from "express";
import cors from "cors";
import { Resend } from "resend";
import "dotenv/config"; // untuk memuat .env.local

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors()); // Izinkan request dari domain lain (penting untuk dev)
app.use(express.json()); // Izinkan server menerima JSON

// Buat route API
app.post("/api/send", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received data:", req.body); // Untuk debugging

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["frankywahyuprasetyo29@gmail.com"], // Email Anda
      subject: `New Message from ${name} with email ${email}`,
      reply_to: email,
      html: `<p>${message}</p>`,
    });

    if (error) {
      return res.status(400).json(error);
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// =================================================================
// LOGIKA BARU UNTUK DEVELOPMENT LOKAL & PRODUKSI VERCEL
// =================================================================

// Jalankan server HANYA saat dalam mode development (bukan di Vercel)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Backend server for development listening on port ${PORT}`);
  });
}

// EKSPOR APLIKASI UNTUK DIGUNAKAN OLEH VERCEL DI PRODUKSI
export default app;
