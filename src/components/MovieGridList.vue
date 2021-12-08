<template>
    <div class="movie-grid-list">
        <div
            class="movie-card p-3 bg-white rounded-3xl flex flex-col"
            v-for="movie in movies"
        >   
            <CardMovieContent :movie="movie" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { IMovie } from '../interfaces/MovieInterface';
    import CardMovieContent from "./Card/CardMovieContent.vue";
    
    // Props
    const props = defineProps({
        movies: Object as () => IMovie[]
    })
</script>

<style lang="scss">
    .movie-grid-list{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
        grid-gap: 20px;

        .movie-card {
            min-width: 100%;
            max-width: 100%;
            box-shadow: 0px 4px 10px #e7e8f1;

            img{
                min-height: 18rem;
                max-height: 26rem;
                box-shadow: 0px 4px 10px #e5e6e9;
            }

        }
    }

    @media screen and(max-width: 500px) {
        .movie-grid-list {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

            .movie-card {
                img {
                    min-height: 204px;
                    max-height: 240px;

                    @media screen and(max-width: 399px) {
                        object-fit: contain;
                        max-height: 205px;
                    }
                }
            }
        }
    }
</style>