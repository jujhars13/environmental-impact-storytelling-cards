# Environmental Impact Storytelling Cards

Static HTML site which presents sards to help stimulate fictional stories about the environment to explore the individual impact of various climate crisis around the world.

[https://environment-story-cards.jujhar.com/](https://environment-story-cards.jujhar.com/)

## Local Dev

```bash
# OPTIONAL use the awesome `reload` which auto-refreshes your browser on change using websockets
# `npm install -g webpack webpack-cli reload`

# install dev and app deps
npm install

# in the root of the repo
node_modules/.bin/webpack --watch
(cd build && reload -e "html|js|css|json|yml")

# browse to http://localhost:8080/
```

## Deployment

Deploys automatically to github pages [https://environment-story-cards.jujhar.com/](https://environment-story-cards.jujhar.com/) using Github actions: `.github/workflows/publish.yaml`

## TODO

- [ ] Add websockets capability so that stories can be written live by individuals against the card (Google docs style)
