# 📄 DOC/DOCX to PDF Converter (VNI / Legacy Font Support)

Web service đơn giản giúp **chuyển file `.doc` / `.docx` sang `.pdf`**  
hỗ trợ **font VNI / font legacy tiếng Việt**, chạy ổn định trên **Linux + Docker**.

👉 Phù hợp cho tài liệu Word cũ bị lỗi font khi mở trên máy khác.

---

## ✨ Tính năng

- ✅ Upload **một hoặc nhiều file Word**
- ✅ Chuyển sang PDF bằng **LibreOffice headless**
- ✅ Hỗ trợ **font VNI / VGA / Wingdings / Webdings**
- ✅ Không mất giao diện khi convert xong
- ✅ Tải PDF riêng cho từng file
- ✅ Tự động dọn cache sau khi xử lý
- ✅ Chạy hoàn toàn trong **Docker**

---

## 🧱 Công nghệ sử dụng

- **Backend**: Node.js + Express
- **Upload**: Multer
- **Convert**: LibreOffice (headless)
- **Frontend**: HTML / CSS / JS thuần
- **Container**: Docker, Docker Compose

---

## 🚀 Chạy nhanh bằng Docker Compose

### 1️⃣ Pull image từ Docker Hub

```bash
docker pull mtoan/doc2pdf
```

---
### 2️⃣ docker-compose.yaml
```yaml
version: "3.8"

services:
  doc2pdf:
    image: <dockerhub-username>/doc2pdf:latest
    ports:
      - "3000:3000"
    restart: unless-stopped
```
Chạy:
```bash
docker compose up -d
```

---
### 3️⃣ Mở trình duyệt
```bash
http://localhost:3000
```