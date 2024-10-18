import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import db from "./db";

export default function AdicionarProdutos({ navigation }){
    const [nome, setNome ] = useState('');
    const [valor, setValor ] = useState('');
    const [quantidade, setQuantidade ] = useState('');

    const salvar_produto = async () => {
        const total = valor * quantidade;
        await db.produtos.add({nome,valor,quantidade,total});
        navigation.navigate('ListaDeProdutos');
    }
    return(
        <View>
            <TextInput placeholder="Nome" value={nome} onChangeText={setNome}/>
            <TextInput placeholder="Valor" value={valor}
                       onChangeText={setValor}
                       keyBoardType="numeric"/>
            <TextInput placeholder="Quantidade"
                       value={quantidade} onChangeText={setQuantidade}
                       keyBoardType="numeric"/>
            <Button title="Adicionar Produto" onPress={salvar_produto}/>
        </View>
    );
}