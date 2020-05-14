    <template>
        <v-app-bar app height="100px" >
             <v-btn color="error" class="btn-option-list" style="margin:20px">
                    <v-icon >mdi-equalizer</v-icon>
            </v-btn>
             <div class="linha-vertical"></div>
            <div class="container-buttons2">
                <v-btn class="btn-option-list">
                    <v-icon >mdi-security</v-icon>
                </v-btn>
                <v-btn color="error" class="btn-option-list">
                   <v-icon >mdi-account</v-icon> 
                </v-btn> 
            </div>
            <div class="container-search">
                 <v-text-field label="Pesquisar..."></v-text-field>
                   <v-icon class="search-icon" >mdi-magnify</v-icon>
            </div>
           
            <div class="flex-grow-1"></div>
            <div class ="container-buttons">
                <v-btn class="btn-option-list" >
                    <v-icon >mdi-format-list-checkbox</v-icon>
                </v-btn>
                <v-btn  to="/cadastroUsuario" class="btn-usuario" color="error">
                    <v-icon >mdi-account</v-icon> 
                    INCLUIR USUÁRIO
                </v-btn>
            </div>
            
             <div class="linha-vertical"></div>

             <div class="container-icons">
                <v-icon medium>mdi-home</v-icon>
                <v-icon >mdi-cog</v-icon>
                <v-icon medium>mdi-power</v-icon>
            </div>

            <div class="flex-grow"></div>


        </v-app-bar>
    </template>
    
    <style>
        .container-buttons2 {
            margin:30px ;
        }
        .container-buttons {
            margin-right:20px;
        }

        .container-buttons button{
            margin:6px;
        }
        .container-search{
            width:300px;
            margin-top:30px;
            display:flex;
        }
        .search-icon{
            margin-left:-25px;
            margin-top:-25px;
        }
        .linha-vertical{
            height: 35px;/*Altura da linha*/
            border-left: 2px solid;
            border-color: #e8e8e8;
            margin:10px;
        }
        .container-icons i{
            margin: 20px;
        }
        .btn-option-list{
            height: 60px !important;
            width: 53px;
            background-color: #fff !important ;
        }
        .btn-usuario{
            height: 60px !important;
            width: 213px;
        }
    </style>
    
