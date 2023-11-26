<script setup>
 import CardCourrier from '../../components/CardCourrier.vue'
 import DetailCourrier from '../../components/DetailCourrier.vue'
 import {ref} from "vue"

 var dropdownOpen = ref(false)

 function isOpen(){
    dropdownOpen.value = !dropdownOpen.value
   // console.log(dropdownOpen.value);
 }

</script>

<template>
   <div>
        <div class="h-screen w-screen flex fixed">
            <!-- div pour la sidebar -->
            <div class="basis-3/12 bg-slate-200">
               <div class="h-[80px] flex items-center justify-start bg-white">
                
                    <router-link to="/client/dashboard" class="w-full">
                    <span class="flex items-center justify-evenly w-full">
                        <img src="https://acsi.cg/wp-content/uploads/2022/09/logo.png" alt="imageAcsi" class="h-14">
                       <p class="text-4xl text-slate-800 font-bold">Ges-Cou</p>
                       </span>
                    </router-link>
                
               </div>
               <div class="h-[calc(100vh-80px)]">
                 <div class="flex justify-between flex-col h-full">
                    <div class="flex flex-col justify-start space-y-10 pt-10 px-5">
                     
                    <router-link to="/client/dashboard/receive_courrier"
                     active-class="bg-sky-600 text-white shadow-lg" 
                     class="border border-gray-500 py-2 rounded-lg text-center text-black text-lg font-bold hover:bg-sky-600 hover:text-white duration-700">
                        Courrier Arriver
                    </router-link>

                    <router-link to="/client/dashboard/sender_courrier"
                     active-class="bg-sky-600 text-white shadow-lg" 
                     class="border border-gray-500 py-2 rounded-lg text-center text-black text-lg font-bold hover:bg-sky-600 hover:text-white duration-700">
                        Courrier Départ
                    </router-link>
                    
                    <router-link to="/client/dashboard/archive_courrier"
                     active-class="bg-sky-600 text-white shadow-lg" 
                     class="border border-gray-500 py-2 rounded-lg text-center text-black text-lg font-bold hover:bg-sky-600 hover:text-white duration-700">
                        Courrier Archiver
                    </router-link>
                
                 </div>
                    <div>
                        <div class="bg-white p-3 my-3 mx-2 rounded-xl shadow-2sl flex">
                            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="person_img" class="h-12 rounded-full mr-4">
                            <div>
                                <h1 class="font-bold text-lg text-slate-800">Mme Avocadrolinalisation</h1>
                                <p class="text-slate-800">Secrétaire Principale</p>
                            </div>

                        </div>
                        <div class="bg-red-100 font-bold text-center py-3 text-slate-900">
                        Created by : Altaïr VBA
                    </div>
                    </div>
                 </div>
               </div>
            </div>
            <!-- fin div pour la sidebar -->
            
            <!-- div pour la main content -->
            <div class="basis-9/12 bg-gray-300 h-full w-full flex flex-col">
            
               <div class="h-[80px] w-full bg-white shadow-md">
                <div class="flex items-center h-full justify-evenly w-full">
                    <input 
                    class="w-[75%] py-3 rounded-2xl px-3 border-4"
                    type="search" name="search" id="search" placeholder="Recherchez ici par le numéro du courrier">
                    <div>
                        <button @click="isOpen" class="bg-green-600 text-white px-2 py-3 rounded-xl hover:opacity-[0.6]">Enregistrement ici</button>
                        <div v-show="dropdownOpen" class="absolute bg-white w-[9em] px-2 py-3 rounded-lg  duration-500">
                            <ul class="flex space-y-3 flex-col">
                                <li class="hover:bg-blue-500 px-1 py-2 hover:text-white hover:rounded-lg">
                                    <router-link to="/dashboard/save_courrier_arriver" @click="isOpen">
                                        Courrier Arriver
                                    </router-link>
                                </li>
                                <li class="hover:bg-blue-500 px-1 py-2 hover:text-white hover:rounded-lg"><a href="">Courrier Depart</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
               </div>
               <div class="h-[calc(100vh-80px)] w-full flex">
                <router-view></router-view>
               </div>
               <!--<div class="h-[calc(100vh-80px)] w-full flex">
                <div class="basis-2/4 overflow-auto p-2 w-full">
                <router-view>
                    
                </router-view>
                <div class="flex justify-between">
                    <span class="text-xl text-slate-800">Inserer un courrier arrivé</span>
                    <button class="bg-sky-700 py-2 px-3 rounded-md text-white">Insertion</button>
                </div>
                <div v-for="i in 10" :key="i">
                    <CardCourrier/>
                </div>
               </div>

               <div class="basis-2/4 overflow-auto p-2 bg-white m-2 rounded-md shadow-2xl">
               <DetailCourrier/>
               </div>
               </div>-->
            </div>
            <!-- fin div pour la main content -->
        </div>
    </div>

</template>