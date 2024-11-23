# build:

`npm run build`

# publish to local:

## Run verdaccio server:

`docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio`

`npm adduser --registry http://localhost:4873/`

and then run:

`npm publish --registry http://localhost:4873`

## install Local package:

`npm install --registry http://localhost:4873 matrix-library`
