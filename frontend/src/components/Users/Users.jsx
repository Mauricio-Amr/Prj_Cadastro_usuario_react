import React, { Component } from "react";
import Main from "../template/Main";

const headerProps ={
    icon: 'users',
    titles : 'usuarios',
    subtitles: 'Cadastro de usuarios : Incluir, Listar, Alterar, Excluir'

}

export default class UserCrud extends Component{
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de usuarios
            </Main>
        )
    }
}