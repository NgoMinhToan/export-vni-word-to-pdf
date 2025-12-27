import express from "express";
import multer from "multer";
import { execFile } from "child_process";
import path from "path";
import fs from "fs";

const app = express();
const upload = multer({ dest: "/tmp/uploads" });

app.post("/upload", upload.single("file"), (req, res) => {
    const input = req.file.path;
    const outputDir = "/tmp/output";

    fs.mkdirSync(outputDir, { recursive: true });

    execFile(
        "soffice",
        [
            "--headless",
            "--nologo",
            "--nolockcheck",
            "--nodefault",
            "--nofirststartwizard",
            "--convert-to",
            "pdf",
            "--outdir",
            outputDir,
            input,
        ],
        (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Convert failed");
            }

            const pdfPath = path.join(
                outputDir,
                path.basename(input).replace(/\.(docx|doc)$/i, ".pdf")
            );

            res.download(pdfPath, "result.pdf");
        }
    );
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
