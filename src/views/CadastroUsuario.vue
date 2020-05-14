<template>
  <div class="about">
   
     
  <v-flex xs12 sm6 offset-sm3>
    
   <form>
     
      <v-row>
          <v-text-field
            v-model="post.name"
            label="Nome "
            required
           
          ></v-text-field>
      </v-row>

      <v-row>
          <v-text-field
            v-model="post.email"
            label="Email"
            required
           
          ></v-text-field>
      </v-row>

      <v-row>
          <v-text-field
            v-model="post.regras"
            label="Regra"
            required
           
          ></v-text-field>
      </v-row>
      
     
      <v-row>
          <v-col>
            <v-btn :loading="loading.envia"  class="mr-4" @click="enviaUsuario" >Enviar</v-btn>
          </v-col>
          <v-col>
            <v-btn  to="/"  class="mr-4" @click="enviaUsuario" >Voltar</v-btn>
          </v-col>
          
      </v-row>
  </form>
   
 </v-flex>

  </div>
</template>

<script>
import api from '../services/api';
import { constants } from 'crypto';
export default {

    data:()=>({
       post:{
          name:'',
          email :'',
          regras:''

       },
       itemSelect:[],
       loading :{
         envia:false,
         select:false
       }
    }),
    

    methods:{

        enviaUsuario(){
            this.loading.envia = true

            let regras =parseInt(this.post.regras)
           
           const data = {
             'name':this.post.name,
             'email':this.post.email,
             'texto': regras ,
           }
           
            api.post('users',data)
            .then(response=>{
                console.log(response.data)
                this.loading.envia = false
                this.$router.push({ path: '/', name:'home' })
            })
            .catch(err=>{
                console.log(err);
                alert("Erro na Api")
            })
        },

    }

}
</script>

<style>
 .about{
   margin:60px;
 }
</style>
