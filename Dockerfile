FROM baseImage
WORKDIR /Turdle
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json .
RUN npm run build
CMD ["npm", "start"]