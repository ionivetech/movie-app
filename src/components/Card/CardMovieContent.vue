<template>
    <div class="relative">
        <VLazyImage
            class="w-full object-cover rounded-2xl"
            :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path || movie.poster_path}`"
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
</template>

<script setup lang="ts">
    import { PropType } from 'vue';
    import VLazyImage from "v-lazy-image";
    import { IMovie } from '@/interfaces/MovieInterface';

    // Props
    const props = defineProps({
        movie: {
            type: Object as PropType<IMovie>,
            default: () => ({})
        }
    })
</script>