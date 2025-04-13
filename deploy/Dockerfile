FROM node:22-alpine AS build-base
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install

FROM build-base AS build
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS runtime
RUN rm -f /usr/share/nginx/html/index.html
COPY ./deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
