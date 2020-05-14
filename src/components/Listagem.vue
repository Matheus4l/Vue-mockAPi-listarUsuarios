<template>

  <v-data-table
    :headers="headers"
    :items="usuario"
    :items-per-page="5"
    :single-select="singleSelect"
    show-select
    hide-default-footer
    class="elevation-1 category-table"
    style="margin:20px"
    loading=true
    :page="pagina"
  >

<template v-slot:top>

  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on }">
    </template>
          <v-card>
            <v-card-title>
              <span style="margin-bottom: 40px;" class="headline">Editar Usuario</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="8" md="12">
                    <v-text-field
                      style="width: 440px;"
                      v-model="editedItem.name"
                      label="Usuário:"
                      outlined
                    ></v-text-field>
                      <v-text-field
                       style="width: 840px;"
                      v-model="editedItem.email"
                      label="Email"
                      outlined
                    ></v-text-field>
                      <v-text-field
                      style="width: 440px;"
                      v-model="editedItem.regras"
                      label=" Regras:"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
                <div>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </div>
            </v-card-actions>
          </v-card>
        </v-dialog>
     
    </template>
  
    <template v-slot:item.status="{ item }">
        <v-icon small color="success"  >Ativo</v-icon>
    </template>

    <template v-slot:item.action="{ item }">
      <v-icon  @click="editItem(item)">mdi-dots-horizontal</v-icon>
    </template>
  
  </v-data-table>
</template>

<script>
import api from '../services/api';
export default {

  props:['pagina'],

  data: () => ({
    
    pages:4,
    singleSelect: true,
    dialog: false,
    loading: true,


    headers: [
      { text: "USUARIO", sortable: false, value: "name", width:"11%" },
      { text: "EMAIL", sortable: false, value: "email",  },
      { text: "DATA DE INCLUSÃO",align: "center", sortable: false, value: "dataInclusao" , width: "17%"},
      { text: "DATA DE ALTERAÇÃO",align: "center", sortable: false, value: "dataAlteracao" , width: "15%"},
      { text: "REGRAS", sortable: false, align: "center", value: "regras", width: "8%"  },
      { text: "STATUS", value: "status", sortable: false, width: "13%"  },
      { text: "AÇÕES", value: "action",align: "center", sortable: false, width: "8%" }
    ],


    usuario: [],
    editedIndex: -1,  // New Category
   
    editedItem: {
      name: "",
      email:"",
      dataInclusao:"",
      dataAlteracao:"",
      regras:1
    },
    
    defaultItem: {
      name: "",
      email:"",
      dataInclusao:"",
      dataAlteracao:"",
      regras:1
    }
  }),

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
       api.get('users')
          .then(response=>{
             this.usuario = response.data; 
             console.log(response)

          })
          .catch(err=>{
            console.log(err);
            alert("Erro na Api")
          })
     
    },

    editItem(item) {
      this.dialogDelete = false;
      this.editedIndex = this.usuario.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },


    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.dialogDelete = false;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {  // Edited save
        Object.assign(this.usuario[this.editedIndex], this.editedItem);
      } else {  // New save
        this.usuario.push(this.editedItem);
      }
      this.close();
    },

    remove() {
      this.usuario.splice(this.editedIndex, 1);
      this.close();
    }
  }
};
</script>

<style>
.category-table table th {
  background-color: #fff;
  font-size: 16px;
  color:#404040 !important;
  padding: 20px 0;
  padding-left:40px;
}
.category-table table td{
 font-size: 17px;
 color:#3f3f3f !important;
 padding: 17px 0;
 padding-left:40px;
}
.category-table table tbody tr:nth-child(even) {background: #e8e8e8}
.category-table table tbody tr:nth-child(odd) {background: #fafafa}
</style>