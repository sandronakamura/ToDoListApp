import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles";

export default function ListItem({data, onRemove}){
    return (
        <View style={styles.itens}>
        <Text style={styles.itensText}> {data.value}</Text>
        <TouchableOpacity
        onPress={() => {
            onRemove(data.id)
        }} >
        <Image 
        source={require('../../assets/excluir.png')}
        style={styles.deleteButton}
        />
        </TouchableOpacity>
        </View>
   )
}

