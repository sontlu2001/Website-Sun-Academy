#Sử dụng image Node.js phiên bản alpine để tối ưu kích thước
FROM node:18.20.4-alpine3.20

# Đặt thư mục làm việc bên trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc (dependencies)
RUN npm install

# Sao chép toàn bộ mã nguồn của ứng dụng vào container
COPY . .

# Biến môi trường, nếu file .env có sẵn, Docker sẽ sử dụng
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Expose cổng mà ứng dụng sẽ chạy (Vite thường chạy trên cổng 3000 hoặc 5173)
EXPOSE 5173

# Lệnh chạy ứng dụng
CMD ["/bin/sh", "-c", "npm run build && npm run preview"]