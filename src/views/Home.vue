<template>

  <div>

       <Listagem :pagina='page'></Listagem>
      <div class="text-center">
            <div class="my-4 paginacao">
              <v-btn class="my-button" @click="paginacao(-1)" depressed>Primeiro</v-btn>
              <v-btn class="my-button" @click="paginacao(-1)" depressed >Anterior</v-btn>
              <v-btn color="error" class="my-button-number">{{page}}</v-btn>
              <v-btn class="my-button" @click="paginacao(1)" depressed>Proximo</v-btn>
              <v-btn class="my-button" @click="paginacao(1)" depressed>Último</v-btn>
            </div>
      </div>
    
  </div>
</template>

<script>

import Listagem from '../components/Listagem';
import TopMenu from '../components/navegacao/TopMenu';


export default {
  components: {
    Listagem,
    TopMenu
  
  },
  data: function () {
    return {
      page: 1,
      total:'',
    }
  },
  methods:{
    paginacao:function(dados){
      
        this.page += dados
      
    }
  }  
};
</script>
<style>
  .my-button-number{
    height:55px !important;
    width:40px  !important;
  }
  .my-button{
    color:#b7b7b7 !important;
    height:45px !important;
   
  }
  .paginacao button{
    margin: 0 6px;
  }

</style>
