# hapi-fan-serve

test keycloak plugin


## Usage

```bash
$ cd hapi-fan-serve
$ npm install
$ npm update --save
$ npm test
$ npm start
```

## Supporting keycloak

because server/keycloak-hapi (is untracked content), you need to git clone it.
```bash
$ cd server
$ git clone https://github.com/keycloak/keycloak-hapi.git
```

## Usage for keycloak

download keycloak-3.2.1.Final from http://www.keycloak.org/downloads.html, and upzip it.
```bash
$ cd keycloak-3.2.1.Final
$ bin/standalone.sh
```
or
```bash
$ bin/standalone.sh -Dkeycloak.import=/<YOUR_PAH>/hapi-fan-serve/hapi-example-realm.json
```

## License

MIT
