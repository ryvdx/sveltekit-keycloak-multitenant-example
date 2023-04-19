import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from "@sveltejs/kit";
import { KeyCloakHandle } from "sveltekit-keyloak-multitenant";
import { env } from "$env/dynamic/private";

export const handle: Handle = sequence(
  KeyCloakHandle({
    keycloakUrl: env.KEYCLOAK_URL,
    keycloakInternalUrl: env.KEYCLOAK_INTERNAL_URL,
    loginPath: env.LOGIN_PATH,
    logoutPath: env.LOGOUT_PATH,
    postLoginPath: env.POST_LOGIN_PATH,
  }),
);