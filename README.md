# sveltekit-keycloak-multitenant-example
Sample SvelteKit app using sveltekit-keycloak-multitenant library in containerized environment.
(Note: docker-compose is for M1 Mac running Arm... just comment platform lines in docker if not needed.)

This sets up a dockerized network where the authentication provider, database, and sveltekit app are sitting behind a Traefik reverse proxy.

1. Install dependencies
```
cd demoapp
npm install
```
2. Build and containerized the sveltekit app
```
npm run containerize
```
3. Run the example
```
cd ..
docker-compose up -d
```

4. Setup tenants


# example logins for traefik and keycloak
username: admin
password: S0meP@ssword
