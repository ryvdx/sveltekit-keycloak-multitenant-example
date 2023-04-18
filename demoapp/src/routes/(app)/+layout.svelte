<script lang="ts">
    import type { LayoutData } from './$types';
    export let data: LayoutData;
</script>

{#if data.user}
    <p>Welcome {data.user.username}</p>
    <p>Tenant: {data.user.tenant}</p>
    <p>email: {data.user.email}</p>
    <p>roles: {data.user.roles.join(', ')}</p>

    <a href="/">Home</a>
    <a href="/somepage">Some Page</a>
    <!-- disabling data preload for logout critical to ensure SSR response.
    This enabled handle hook to terminate session and clear user session metadata for layout re-render after logout. -->
    <a href="/auth/logout" data-sveltekit-preload-data="off">Logout</a>

    {#if data.user.roles.includes('admin')}
        <p>{data.user.username} is an admin... i.e render special layout routes, etc.</p>
    {:else}
        <p>{data.user.username} is a general user</p>
    {/if}

    

{/if}

<slot />