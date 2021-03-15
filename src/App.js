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
            <Text>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} >
                <Text>Gerar numero</Text>  
            </TouchableOpacity>
        </SafeAreaView>
        
    );
}
const style = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default App;