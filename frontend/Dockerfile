FROM node:lts

WORKDIR /usr/build

ADD frontend /usr/src
ADD start.sh /usr/run/start.sh

RUN npm install --location=global npm@8.19.2 && \
    npm install --location=global serve && \
    cd /usr/src && mv .env.production .env && \
    npx browserslist@latest --update-db && \
    npm install && \
    NODE_ENV=production && npm run build && \
    mkdir -p /usr/build && \
    cp -a build /usr/build/ttm && \
    cd /usr/build && \
    rm -rf /usr/src

CMD ["/bin/bash", "/usr/run/start.sh"]
