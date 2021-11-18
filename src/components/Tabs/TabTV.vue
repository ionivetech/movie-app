<template>
    <div>
        <!-- Top Rated List -->
        <div class="mb-20">
            <h4 class="font-semibold text-xl text-gray-800 capitalize mb-4">Popular TV Shows</h4>
            <component
                :is="loading ? LoadingList : MovieList"
                :movies="popularList"
            />
        </div>

        <!-- Upcoming List -->
        <div class="mb-20">
            <h4 class="font-semibold text-xl text-gray-800 capitalize mb-4">Top Rated TV Shows</h4>
            <component
                :is="loading ? LoadingList : MovieList"
                :movies="topRatedist"
            />
        </div>

        <!-- Now Playing List -->
        <div class="mb-20">
            <h4 class="font-semibold text-xl text-gray-800 capitalize mb-4">On The Air TV Shows</h4>
            <component
                :is="loading ? LoadingList : MovieList"
                :movies="onTheAirList"
            />
        </div>

        <!-- Popular List -->
        <div>
            <h4 class="font-semibold text-xl text-gray-800 mb-4">Airing Today TV Shows</h4>
            <component
                :is="loading ? LoadingList : MovieList"
                :movies="airingTodayList"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { IMovie } from '../../interfaces/MovieInterface';
    import MovieService from '../../services/MovieService';
    import LoadingList from '@/components/LoadingList.vue';
    import MovieList from '@/components/MovieList.vue';

    // Variable
    const loading = ref<boolean>(true)
    const category = ref<Array<string>>([
        'popular',
        'top_rated',
        'on_the_air',
        'airing_today',
    ])
    const popularList = ref<IMovie[]>([])
    const topRatedist = ref<IMovie[]>([])
    const onTheAirList = ref<IMovie[]>([])
    const airingTodayList = ref<IMovie[]>([])

    // Function Get Data
    const getFilm = async () => {
        loading.value = true
        
        await category.value.forEach(cat => {
            MovieService.getFilm('tv', cat).then((response) => {
                switch (cat) {
                    case 'popular':
                        popularList.value = response.results
                        break;
                    case 'top_rated':
                        topRatedist.value = response.results
                        break;
                    case 'on_the_air':
                        onTheAirList.value = response.results
                        break;
                    case 'airing_today':
                        airingTodayList.value = response.results
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

<script lang="ts">
    export default {
        name: 'TabTV',
    }
</script>

