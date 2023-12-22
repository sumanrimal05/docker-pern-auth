FROM node:lts-alpine
# ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci --no-audit || npm ci --no-audit --maxsockets 1
COPY . .
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]
