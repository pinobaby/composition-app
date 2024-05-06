<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import { pokemonRoute } from '../router/index';
import type { RouterLink } from '@/router/list-routes';




const routeLinks: RouterLink[] = pokemonRoute.children?.map(({ name, path, props }) => {

    const { title, visible } = props as { title: string, visible: boolean };
    return {
        name: name?.toString() ?? '',
        path: path,
        title: title,
        visible: visible,
    }

}) || [];

</script>

<template>
    <NavBar :links="routeLinks" is-secundary />

    <div>
        <!-- <h4>Pokemom Layout</h4> -->
        <RouterView />
        <!-- <Suspense>
            <template #fallback>
                <div>Loading...</div>
            </template>
</Suspense> -->
    </div>
</template>
