FROM node:latest AS build
WORKDIR /Kubedemo
COPY package*.json /Kubedemo/
RUN npm install
COPY ./ /Kubedemo/
ARG configuration=prod

RUN npm run build:$configuration

FROM nginx:latest
COPY --from=build /Kubedemo/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /Kubedemo/dist/kubedemo-app /usr/share/nginx/html
