<template>
    <div class="container px-5 py-20 md:px-0 mx-auto">
        <!-- Header Text -->
        <div class="mb-20">
            <h1 class="font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-3">
                Movie & TV Show Website
            </h1>
            <h2 class="font-normal text-lg md:text-xl lg:text-2xl text-gray-800">
                Millions of movies, TV shows and people to discover. Explore now.
            </h2>
        </div>

        <!-- Tab Menu -->
        <div class="flex overflow-x-auto mb-4 pb-4">
            <div
                class="tab-menu mr-3"
                :class="{'tab-active': tabActive == 'movie'}"
                @click="changeTab('movie')"
            >Movies</div>
            <div
                class="tab-menu mr-3"
                :class="{'tab-active': tabActive == 'tv'}"
                @click="changeTab('tv')"
            >TV Show</div>
        </div>
        
        <!-- Search Input -->
        <div class="relative mb-10">
            <input
                class="input-search w-full pl-6 pr-14 py-3 bg-white rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="text"
                :placeholder="`Search for a ${tabActive}...`"
                v-model="search"
                @keyup="searchFilm()"
            >
            <div class="absolute top-0 right-0 px-6 py-3 flex justify-center items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>

        <!-- Tab Active Data -->
        <div v-if="!isSearch">
            <component :is="tabActive === 'movie' ? TabMovie : TabTV"/>
        </div>

        <div v-if="isSearch">
            <p class="text-lg font-medium text-gray-800 mb-6">Search result <b>"{{search}}"</b></p>
            <MovieGridList :movies ="searchResult" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import TabMovie from '@/components/Tabs/TabMovie.vue';
    import TabTV from '@/components/Tabs/TabTV.vue';
    import MovieService from '../services/MovieService';
    import { IMovie } from '../interfaces/MovieInterface';
import MovieGridList from '../components/MovieGridList.vue';

    // Variable
    const tabActive = ref<string>('movie')
    const isSearch = ref<boolean>(false)
    const search = ref<string>('')
    const searchResult = ref<IMovie[]>([])

    // Function change tab
    const changeTab = (tab: string): void => {
        tabActive.value = tab
    }

    // Function Search
    const searchFilm = () => {
        if(search.value.length > 2) {
            MovieService.searchFilm(tabActive.value, search.value).then((response) => {
                isSearch.value = true
                searchResult.value = response.results
            })
        }else {
            isSearch.value = false
        }
    }
</script>

<style lang="scss" scoped>
    .tab-menu {
        @apply px-5 py-2 bg-gray-200 text-gray-800 font-medium tracking-wider whitespace-nowrap rounded-full cursor-pointer;
    }
    .tab-active {
        @apply bg-blue-600 text-white;
    }
    .input-search {
        box-shadow: 0px 4px 10px #e7e8f1;
    }
</style>
