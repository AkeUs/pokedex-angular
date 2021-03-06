FROM node:15.2-alpine AS build
WORKDIR /app
COPY . .
RUN npm install \
    && npx ng build --prod

FROM nginx:1.19-alpine AS release
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/pokedex-angular/. .
