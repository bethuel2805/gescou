<script setup>
import { ref } from "vue"

  var courrierData = ref({})

  function clicky(){
    console.log(courrierData.value)
  }
</script>

<template>
<div class="w-[100%]">
    <h1 class="text-3xl font-bold text-center my-2">Enregistrer Courrier Arriver</h1>
    <div class="flex w-full h-full">
     <div class="bg-white basis-2/4 h-[calc(100vh-130px)] overflow-x-auto ">
     <div class="mb-8">
        <form class="flex justify-center flex-col w-[80%] mx-auto space-y-8" @submit.prevent="clicky">
            <div>
                <label>L'identifiant du courrier</label>
                <input type="text" name="id" placeholder="Entrer l'identifiant du courrier" v-model="courrierData.id" class="w-full px-2 py-3 border-2 rounded-lg">
            </div>
            <div>
                <label>L'objet du courrier</label>
                <input type="text" placeholder="Entrer l'objet du courrier" v-model="courrierData.object" class="w-full px-2 py-3 border-2 rounded-lg">
            </div>
            <div>
                <label>Date de la correspondance du courrier</label>
                <input type="date" class="w-full px-2 py-3 border-2 rounded-lg" v-model="courrierData.date_send">
            </div>
            <div>
                <label>Date d'arrivage du courrier</label>
                <input type="date" class="w-full px-2 py-3 border-2 rounded-lg" v-model="courrierData.date_receive">
            </div>
            <div class="flex flex-col">
                <label>Type de courrier</label>
                <select id="selType" class="border-2 rounded-lg py-2" v-model="courrierData.type">
                    <option value="courrier_interne">Courrier Interne</option>
                    <option value="courrier_externe">Courrier Externe</option>
                </select>
            </div>
            <div class="flex flex-col">
                <label>Qui est l'expediteur ?</label>
                <div class="border-2 px-2 py-3 flex justify-between items-center rounded-lg">
                    <span><input type="radio" name="expediteur" id="agent" v-model="courrierData.quiExp" value="agent"><label for="agent">Agent</label></span>
                    <span><input type="radio" name="expediteur" id="direction" v-model="courrierData.quiExp" value="direction"><label for="direction">Direction</label></span>
                </div>
            </div>
            <div>
                <div v-if="courrierData.quiExp === 'agent'">
                    <div class="flex flex-col">
                        <label>Qui est l'Agent</label>
                        <select id="selAgent" class="border-2 rounded-lg py-2" v-model="courrierData.agentExp">
                            <option value="william">M. William</option>
                            <option value="mia">Mia</option>
                            <option value="ikama">Ikama</option>
                            <option value="massala">Massala</option>
                        </select>
                    </div>
                </div>
                <div v-else-if="courrierData.quiExp === 'direction'">
                    
                    <div class="flex flex-col">
                        <label>Qui est l'Agent</label>
                        <select id="selAgent" class="border-2 rounded-lg py-2" v-model="courrierData.directionExp">
                            <option value="direction_pn">Direction de Pointe-Noire</option>
                            <option value="direction_generale">Direction Générale</option>
                            <option value="hopital_louandjili">Hopital Louandjili</option>
                            <option value="ecole_prive">Ecole Privé</option>
                        </select>
                    </div>
                </div>
                <div v-else></div>
            </div>
            <button class="bg-blue-600 px-3 py-2 rounded-lg text-white shadow-lg">Visualiser</button>
        </form>
     </div>
    </div>
    <div class="bg-red-900 basis-2/4 h-full">
    </div>
    </div>
</div>
</template>
