import React, {useEffect, useState} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import db from './db';

export default function ListaDeProdutos ({ navigation }){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        carregarProdutos();
    }, []);

    const carregarProdutos = async () => {
        const todosProdutos = await db.produtos.toArray();
        setProdutos(todosProdutos);
    }

    const excluirProduto = async (id) => {
        await db.produtos.delete(id);
        carregarProdutos();
    }

    return (
        <View>
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View>
                    <Text>{item.nome} - {item.valor}
                          x {item.quantidade} = {item.total}
                    </Text>
                        <Button title="Editar" onPress={() => navigation.navigate('EditarProduto', {id: item.id})}/>
                        <Button title="Excluir" onPress={() => excluirProduto(item.id)}/>
                    </View>
                )}
            />
            <Button title="Adicionar Produto"
            onPress={() => navigation.navigate('AdicionarProduto')}
            />
        </View>
    );
};