import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from "@sveltejs/kit";
// import { KeyCloakHandle } from "sveltekit-keyloak-multitenant";
import { KeyCloakHandle } from "$lib/server/keycloakservice";
import { env } from "$env/dynamic/private";

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function

export const handle: Handle = sequence(
  KeyCloakHandle({
    keycloakUrl: env.KEYCLOAK_URL,
    keycloakInternalUrl: env.KEYCLOAK_INTERNAL_URL,
    loginPath: env.LOGIN_PATH,
    logoutPath: env.LOGOUT_PATH,
    postLoginPath: env.POST_LOGIN_PATH,
  }),
  // authorization
);