FROM node:alpine
WORKDIR '/app/client'

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/client/build /usr/share/nginx/html