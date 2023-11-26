
<template>
   <div>
        <div class="h-screen w-screen flex fixed">
            <!-- div pour la sidebar -->
            <div class="basis-3/12 bg-slate-200">
               <div class="h-[80px] flex items-center justify-start bg-white">
                
                    <router-link to="/admin/dashboard" class="w-full">
                    <span class="flex items-center justify-evenly w-full">
                        <img src="https://acsi.cg/wp-content/uploads/2022/09/logo.png" alt="imageAcsi" class="h-14">
                       <p class="text-4xl text-slate-800 font-bold">Ges-Cou</p>
                       </span>
                    </router-link>
                
               </div>
               <div class="h-[calc(100vh-80px)]">
                 <div class="flex justify-between flex-col h-full">
                    <div class="flex flex-col justify-start space-y-10 pt-10 px-5">
                    
                    <router-link to="/admin/dashboard/users"
                     active-class="bg-green-600 text-white shadow-lg" 
                     class="border border-gray-500 py-2 rounded-lg text-center text-black text-lg font-bold hover:bg-green-700 hover:text-white duration-700">
                       Utilisateurs
                    </router-link>

                    <router-link to="/admin/dashboard/agents"
                     active-class="bg-green-600 text-white shadow-lg" 
                     class="border border-gray-500 py-2 rounded-lg text-center text-black text-lg font-bold hover:bg-green-700 hover:text-white duration-700">
                       Agents
                    </router-link>

                    <router-link to="/admin/dashboard/directions"
                     active-class="bg-green-600 text-white shadow-lg" 
                     class="border border-gray-500 py-2 rounded-lg text-center text-black text-lg font-bold hover:bg-green-700 hover:text-white duration-700">
                        Directions
                    </router-link>
                
                 </div>
                    <div>
                        <div class="bg-white p-3 my-3 mx-2 rounded-xl shadow-2sl flex">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="person_img" class="h-12 rounded-full mr-4">
                            <div>
                                <h1 class="font-bold text-lg text-slate-800">Mr Fynyn Mou Sauter</h1>
                                <p class="text-slate-800">Administrateur de GESCOU</p>
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
            
               <div class="h-[80px] w-full bg-white flex items-center justify-center">
                <p class="text-xl">Vous etes connecter en tant que <span class="font-bold text-green-400">Administrateur de GESCOU</span></p>
                <!--<div class="flex items-center h-full justify-evenly w-full">
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
                </div>-->
               </div>
               <div class="h-[calc(100vh-80px)] w-full flex">
                <router-view>

                </router-view>
               </div>
            </div>
            <!-- fin div pour la main content -->
        </div>
    </div>

</template>