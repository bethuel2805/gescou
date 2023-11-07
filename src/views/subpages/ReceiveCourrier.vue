<script setup>
import CardCourrier from "../../components/CardCourrier.vue";
import DetailCourrier from "../../components/DetailCourrier.vue";
</script>

<template>
    <div class="h-full w-full flex">
        <div class="basis-2/4 overflow-auto p-2 w-full">
                <div class="flex justify-center">
                    <span class="text-2xl font-medium text-slate-800">Arrivé Courrier</span>
                </div>
                <div v-for="i in 4" :key="i">
                    <CardCourrier/>
                </div>
               </div>

               <div class="basis-2/4 overflow-auto p-2 bg-white m-2 rounded-md shadow-2xl">
               <DetailCourrier/>
        </div>
    </div>
</template>