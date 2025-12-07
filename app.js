const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Mi App DevOps</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                height: 100vh;
                background: linear-gradient(135deg, #0f172a, #1e293b);
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Arial, sans-serif;
            }

            .card {
                background: #0f172a;
                border-radius: 20px;
                padding: 35px 45px;
                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
                color: white;
                text-align: center;
                animation: fadeIn 1s ease-in-out;
            }

            .card h1 {
                margin: 0;
                font-size: 32px;
                background: linear-gradient(135deg, #38bdf8, #22c55e);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .card p {
                margin-top: 15px;
                font-size: 16px;
                color: #cbd5f5;
            }

            .chip {
                margin-top: 20px;
                display: inline-block;
                padding: 8px 18px;
                background: rgba(56, 189, 248, 0.15);
                border: 1px solid #38bdf8;
                border-radius: 999px;
                font-size: 14px;
                color: #38bdf8;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(15px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🚀 DevOps Deploy Exitoso</h1>
            <p>Tu aplicación ya está corriendo en Render usando Docker + GitHub Actions</p>
            <div class="chip">CI/CD funcionando</div>
        </div>
    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});
