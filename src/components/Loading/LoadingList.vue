<template>
    <div class="w-full flex overflow-x-auto pb-4">
        <div
            class="movie-card p-3 bg-white rounded-3xl flex flex-col mr-6"
            v-for="i in 20"
        >   
            
            <div class="skeleton-box skeleton-image w-full h-64 mb-4"></div>
            <div class="skeleton-box w-full h-3 mx-auto"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<script lang="ts">
    export default {
        name: 'LoadingList',
    }
</script>

<style lang="scss" scoped>
    .movie-card {
        min-width: 210px;
        max-width: 210px;
        box-shadow: 0px 4px 10px #e7e8f1;

        .skeleton-image {
            border-radius: 1rem;
        }
    }
</style>