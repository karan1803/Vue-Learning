<script setup>
    import { ref, defineProps } from 'vue'
    import { RouterLink } from 'vue-router'
    import JobListing from './JobListing.vue'
    import axios from 'axios'
    import { onMounted, reactive } from 'vue';
    import { VueSpinner } from 'vue3-spinners';

    const state = reactive({
        jobs: [],
        loading: true,
        error: null
    });

    defineProps({
        limit: Number,
        showButton: {
            type: Boolean,
            default: false
        }
    })

    onMounted( async () => {
        try {
            const response = await axios.get('http://localhost:5000/jobs');
            state.jobs = response.data;
        } catch (error) {
            console.error('Error fetching jobs:', error);
            state.error = error;
        } finally {
            state.loading = false;
        }
    });

</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 text-center mb-6">Browse Jobs</h2>
            <div v-if="state.loading" class="flex justify-center py-6">
                <VueSpinner type="pulse" color="green" size="50" />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <JobListing v-for="job in state.jobs.slice(0, limit)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

    <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 w-full"
        >View All Jobs</RouterLink
      >
    </section>
</template>