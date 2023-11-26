<template>
    <div class="bg-slate-300 min-h-screen flex items-center justify-center">
        <div class="w-[50%] p-2  flex flex-col items-center justify-center">
            <div class="my-5">
                <img src="https://acsi.cg/wp-content/uploads/2022/09/logo.png" alt="imageAcsi">
            </div>
            <div class="bg-white rounded-lg p-5 shadow-3xl">
                <h1 class="text-center text-3xl font-bold py-5">Gestion de Courrier(Ges-Cou)</h1>
                <div>
                    <form @submit.prevent="">
                        <input type="text" name="id" id="id" placeholder="Entrer votre numéro matricule"
                         class="border border-2 border-gray-600 w-full py-2 px-2 rounded-lg my-5"><br>

                        <input type="password" name="mdp" id="mdp" placeholder="Entrer votre mot de passe"
                         class="border border-2 border-gray-600 w-full py-2 px-2 rounded-lg my-5"><br>
                       
                        <router-link to="/client/dashboard">
                            <button class="bg-sky-800 text-white w-full py-3 rounded-lg my-5 hover:opacity-[0.7]">Confirmer</button>
                        </router-link>
                        <router-link to="/admin/dashboard">
                            <button class="bg-green-800 text-white w-full py-3 rounded-lg my-1 hover:opacity-[0.7]">Administrateur</button>
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>