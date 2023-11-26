<script setup>
  import CardAgent from "../../../components/CardAgent.vue"
</script>
<template>
  <div class="h-full w-full flex">
        <div class="basis-2/4 overflow-auto p-2 bg-white m-2 rounded-md shadow-2xl">
            <div class="flex justify-center">
                    <span class="text-2xl font-medium text-slate-800">La Liste des Agents</span>
            </div>
            <div v-for="i in 10" :key="i">
                <CardAgent/>
            </div>
        </div>

         <div class="basis-2/4 overflow-auto p-2 bg-white m-2 rounded-md shadow-2xl">
               <div>
                  <h1 class="text-2xl text-center font-semibold">Créer un nouvel Agent</h1>
               </div>
               <div class="pt-12">
                <form @action.prevent @submit.prevent="">
                  <input
                   type="text"
                   placeholder="Entrer le nom de l'agent"
                   class="border-2 border-slate-700 rounded-md px-2 py-2 w-full">
                   <br>
                   <br>
                   <button class="w-full py-3 rounded-md bg-green-600 text-white text-lg shadow-md">Créer l'agent</button>
                </form>
               </div>
         </div>
    </div>
</template>