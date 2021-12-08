<template>
    <div>
        <div class="mb-20" v-for="cat in category" :key="cat.key">
            <h4 class="font-semibold text-xl text-gray-800 capitalize mb-4">{{ cat.title }}</h4>
            <component
                :is="loading && !isHaveList() ? LoadingList : MovieList"
                :movies="cat.list"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useCategoryStore } from '@/store/category';
    import { ICategoryDetail } from '@/interfaces/CategoryInterface';
    import MovieService from '@/services/MovieService';
    import LoadingList from '@/components/Loading/LoadingList.vue';
    import MovieList from '@/components/MovieList.vue';

    // Declare Store
    const categoryStore = useCategoryStore()

    // Variable
    const loading = ref<boolean>(true)
    const type = ref<string>('tv')
    const category = ref<ICategoryDetail[]>(categoryStore.getCategoryTV)

    // Function Get Data
    const getFilm = async () => {
        if (!isHaveList()) {
            loading.value = true

            await category.value.forEach(cat => {
                MovieService.getFilm(type.value, cat.key).then((response) => {
                    categoryStore.setListCategory(type.value, cat.key, response.results)
                    loading.value = false
                })
            })
        }
    }

    // Function check if already have list
    const isHaveList = (): boolean => {
        const checkList: Array<boolean> = []

        category.value.map(cat => {
            checkList.push(cat.list.length > 0)
        })

        const isChecking = (currValue: boolean) => {
            return currValue === true
        }
        return checkList.some(isChecking)
    }

    onMounted(() => {
        getFilm()
    })
</script>

