import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Allow POST method
export async function POST(req: NextRequest) {
  try {
    // Parse form data from request
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Read file contents
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Set upload path
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadDir, file.name);

    // Ensure directory exists
    fs.mkdirSync(uploadDir, { recursive: true });

    // Save file to disk
    fs.writeFileSync(filePath, buffer);

    // Respond with file URL
    const fileUrl = `/uploads/${file.name}`;
    return NextResponse.json({ success: true, url: fileUrl });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Failed to upload" }, { status: 500 });
  }
}
