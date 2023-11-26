<script setup>
  import CardUser from "../../../components/CardUser.vue"
</script>
<template>
  <div class="h-full w-full flex">
        <div class="basis-2/4 overflow-auto p-2 bg-white m-2 rounded-md shadow-2xl">
            <div class="flex justify-center">
                    <span class="text-2xl font-medium text-slate-800">La Liste des Utilisateurs</span>
            </div>
            <div v-for="i in 10" :key="i">
                <CardUser/>
            </div>
        </div>

         <div class="basis-2/4 overflow-auto p-2 bg-white m-2 rounded-md shadow-2xl">
               <div>
                  <h1 class="text-2xl text-center font-semibold">Créer un nouvel Utilisateur</h1>
               </div>
               <div class="pt-12">
                <form @action.prevent @submit.prevent class="flex flex-col gap-4">
                  <input
                   type="text"
                   placeholder="Entrer le nom de l'utilisateur"
                   class="border-2 border-slate-700 rounded-md px-2 py-3 w-full">
                  <input
                   type="text"
                   placeholder="Entrer le prenom de l'utilisateur"
                   class="border-2 border-slate-700 rounded-md px-2 py-3 w-full">
                  <input
                   type="text"
                   placeholder="L'utilisateur entre son Mot de passe"
                   class="border-2 border-slate-700 rounded-md px-2 py-3 w-full">
                  <input
                   type="text"
                   placeholder="L'utilisateur repète son Mot de passe"
                   class="border-2 border-slate-700 rounded-md px-2 py-3 w-full">
                   <label class="text-slate-500 text-lg">
                    Si vous souhaitez accorder des droits d'accès à cet utilisateur, veuillez cocher les cas ci-dessous
                   </label>
                   <div class="flex flex-col gap-4">
                      <div>
                        <input type="checkbox" id="sp">
                        <label for="sp">Secrétaire Principale</label>
                      </div>
                      <div>
                        <input type="checkbox" id="ss">
                        <label for="ss">Secrétaire Secondaire</label>
                      </div>
                      <div>
                        <input type="checkbox" id="ad">
                        <label for="ad">Administrateur</label>
                      </div>
                   </div>
                   <button class="w-full py-3 rounded-md bg-green-600 text-white text-lg shadow-md">Créer l'utilisateur</button>
                </form>
               </div>
         </div>
    </div>
</template>