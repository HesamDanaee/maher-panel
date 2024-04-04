# First layer
FROM node:18-alpine AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY . .



# Second layer
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
ARG NODE_ENV
ENV NODE_ENV="${NODE_ENV}"
RUN npm run build



# third layer
FROM mhart/alpine-node:slim-14 AS runner
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 
COPY --from=builder /app/.next/standalone ./standalone
COPY --from=builder /app/public /app/standalone/public
COPY --from=builder /app/.next/static /app/standalone/.next/static
EXPOSE 3000
ENV PORT 3000
CMD [“node”, “./standalone/server.js”]
