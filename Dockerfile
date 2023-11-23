# Этап 1: Установка зависимостей
FROM node:20.5.0 as dependencies
WORKDIR /app
COPY package*.json ./
RUN npm i --force

# Этап 2: Сборка приложения
FROM node:20.5.0 as builder
WORKDIR /app
COPY .. .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build:ssr

# Этап 3: Настройка среды выполнения для приложения
FROM node:20.5.0 as runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
