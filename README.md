# sveltekit-keycloak-multitenant-example
Sample SvelteKit app using sveltekit-keycloak-multitenant library in containerized environment.
Example has SvelteKit app, Keycloak, Postgres DB for Keycloak behind Traefik reverse proxy.
(Note: docker-compose is for M1 Mac, comment platform lines if not needed.)

1. Build the SvelteKit app
```
cd demoapp
yarn run containerize
```

2. Run the monorepo
```
cd ..
docker-compose up -d
```

3. Setup tenants in keycloak
Open in browser: https://keycloak.localhost
login:
- username: admin
- password: S0meP@ssword

Create realms (tenants).
For each realm:
- create a client
- Configure redirect for client back to app
- create some testing roles, groups, users in KeyCloak

4. Update tenants.yaml and restart docker-compose

5. Test the app:
Open in browser: https://portal.localhost
login with any users and their tenants created in step 3...


# Build a new app from scratch with library
Here is a video how to build a new SvelteKit app from scratch using the library.  You can containerize it following along this example.
https://youtu.be/c60uTal3_lU
