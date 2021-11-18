<template>
    <div class="w-full h-full relative flex">
        <Sidebar/>

        <div class="flex flex-col w-full relative p-5">
            <Header />
            <slot />
        </div>
        
        <!-- Blur background if sidebar active -->
        <div id="blurBackground" class="blur-background hidden" @click="closeSidebar()"></div>
    </div>
</template>

<script setup lang="ts">
    import Header from "@/components/Header.vue"
    import Sidebar from "@/components/Sidebar.vue";

    // Close Sidebar Function
    const closeSidebar = () => {
        const sidebar = document.getElementById('sidebar')
        const blurBackground = document.getElementById('blurBackground')
        
        if(sidebar) {
            sidebar.classList.add('-left-72')
            sidebar.classList.remove('left-0')
        }
        if(blurBackground) blurBackground.classList.add('hidden')
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        left: 0;

        @media screen and (max-width: 1023px) {
            left: -18rem;
        }
    }
    .blur-background {
        @apply z-10 fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 transition-all duration-500 ease-in-out;
    }
</style>