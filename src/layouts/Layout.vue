<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script setup lang="ts">
    import { watch, ref, markRaw } from 'vue'
    import { useRoute } from 'vue-router'
    import LayoutAuth from './LayoutAuth.vue'

    const layout = ref()
    const route = useRoute()

    watch(() =>
        route.meta?.layout as string | undefined,
        async (metaLayout) => {
            try {
                const component = metaLayout && await import(`../layouts/${metaLayout}.vue`)
                layout.value = markRaw(component?.default || LayoutAuth)
            } catch (error) {
                layout.value = markRaw(LayoutAuth)
            }
        },
        { immediate: true }
    )
</script>

