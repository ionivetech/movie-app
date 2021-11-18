<template>
    <div class="w-full flex overflow-x-auto pb-4">
        <div
            class="movie-card p-3 bg-white rounded-3xl flex flex-col mr-6"
            v-for="movie in movies"
        >   
            <div class="relative">
                <VLazyImage
                    class="w-full object-cover rounded-2xl"
                    :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`"
                    :alt="movie.title"
                />

                <!-- Button Favorite -->
                <div class="absolute w-8 h-8 flex justify-center items-center bg-white text-red-500 bottom-2 right-2 rounded-full shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <p class="mt-4 font-normal text-gray-800 truncate ...">{{movie.title || movie.name}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import VLazyImage from "v-lazy-image";
    import { IMovie } from '../interfaces/MovieInterface';
    
    // Props
    const props = defineProps({
        movies: Object as () => IMovie[]
    })
</script>

<script lang="ts">

    export default {
        name: 'MovieList',
    }
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