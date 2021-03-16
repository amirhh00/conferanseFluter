FROM mhart/alpine-node:14.15.3

WORKDIR /app
# RUN apk add  --no-cache ffmpeg
RUN yarn global add serve
COPY package.json /app
RUN yarn install
COPY . /app
RUN yarn build
CMD ["serve","app","-s","-p","80"]