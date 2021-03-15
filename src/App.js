import React, {useState} from "react";
import {
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    StyleSheet,
} from "react-native";

const App = ()=>{

    const [numero, setNumero] = useState(10)

    function handleNumero(){
        const novoNumero = Math.floor(Math.random() * 10);
        setNumero(novoNumero + novoNumero)
    }
    return(

        <SafeAreaView style={style.container}>
            <Text style={style.botao}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} >
                <Text style={style.botao2}>Gerar numero</Text>  
            </TouchableOpacity>
        </SafeAreaView>
        
    );
}
const style = StyleSheet.create({
    container:{
        backgroundColor:'#ffffee',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    botao:{
        fontWeight:"bold",
        fontSize:38,
    },
    botao2:{
        fontSize:20,
        backgroundColor:"#111111",
        color:"#eeeeee",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:6,
        marginTop:10
    }
})


export default App;