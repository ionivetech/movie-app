<template>
    <div class="w-full flex overflow-x-auto pb-4">
        <div
            class="movie-card p-3 bg-white rounded-3xl flex flex-col mr-6"
            v-for="movie in movies"
        >   
            <CardMovieContent :movie="movie" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { IMovie } from '@/interfaces/MovieInterface';
    import CardMovieContent from "./Card/CardMovieContent.vue";
    
    // Props
    const props = defineProps({
        movies: Object as () => IMovie[]
    })
</script>

<style lang="scss">
    .movie-list{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        grid-gap: 40px;
    }
    .movie-card {
        min-width: 210px;
        max-width: 210px;
        box-shadow: 0px 4px 10px #e7e8f1;

        img{
            height: 17rem;
            box-shadow: 0px 4px 10px #e5e6e9;
        }
    }
</style>