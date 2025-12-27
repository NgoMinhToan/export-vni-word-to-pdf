FROM debian:bookworm

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    libreoffice \
    libreoffice-writer \
    fontconfig \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Copy font VN
COPY fonts /usr/share/fonts/truetype/custom
RUN fc-cache -f -v

WORKDIR /app
COPY backend/package.json .
RUN npm install

COPY backend .

EXPOSE 3000
CMD ["node", "server.js"]
