<template>
    <div>
        <!-- Top Rated List -->
        <div class="mb-20">
            <h4 class="font-semibold text-xl text-gray-800 capitalize mb-4">Top Rated Movie</h4>
            <component
                :is="loading ? LoadingList : MovieList"
                :movies="topRatedist"
            />
        </div>

        <!-- Upcoming List -->
        <div class="mb-20">
            <h4 class="font-semibold text-xl text-gray-800 capitalize mb-4">Upcoming Movie</h4>
            <component
                :is="loading ? LoadingList : MovieList"
                :movies="upcomingList"
            />
        </div>

        <!-- Now Playing List -->
        <div class="mb-20">
            <h4 class="font-semibold text-xl text-gray-800 capitalize mb-4">Now Playing Movie</h4>
            <component
                :is="loading ? LoadingList : MovieList"
                :movies="nowPlayingList"
            />
        </div>

        <!-- Popular List -->
        <div>
            <h4 class="font-semibold text-xl text-gray-800 mb-4">Popular Movie</h4>
            <component
                :is="loading ? LoadingList : MovieList"
                :movies="popularList"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { IMovie } from '@/interfaces/MovieInterface';
    import MovieService from '@/services/MovieService';
    import LoadingList from '@/components/Loading/LoadingList.vue';
    import MovieList from '@/components/MovieList.vue';

    // Variable
    const loading = ref<boolean>(true)
    const category = ref<Array<string>>([
        'top_rated',
        'upcoming',
        'now_playing',
        'popular'
    ])
    const topRatedist = ref<IMovie[]>([])
    const upcomingList = ref<IMovie[]>([])
    const nowPlayingList = ref<IMovie[]>([])
    const popularList = ref<IMovie[]>([])

    // Function Get Data
    const getFilm = async () => {
        loading.value = true
        
        await category.value.forEach(cat => {
            MovieService.getFilm('movie', cat).then((response) => {
                switch (cat) {
                    case 'top_rated':
                        topRatedist.value = response.results
                        break;
                    case 'upcoming':
                        upcomingList.value = response.results
                        break;
                    case 'now_playing':
                        nowPlayingList.value = response.results
                        break;
                    case 'popular':
                        popularList.value = response.results
                        break;
                }
                loading.value = false
            })
        })
    }

    onMounted(() => {
        getFilm()
    })
</script>

