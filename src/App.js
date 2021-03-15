import React from "react";
import {
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    StyleSheet,
} from "react-native";

const App = ()=>{ 
    return(
        <SafeAreaView style={style.container}>
            <Text>0</Text>
            <TouchableOpacity>
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