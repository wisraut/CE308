import { View, Text, StyleSheet, TextInput,Button} from "react-native";

export default function Cart() {
    return (
        <View style={styles.container}>
            <TextInput placeholder="ชื่อสินค้า" />
            <TextInput placeholder="จำนวน" />
            <TextInput placeholder="ราคา" />
            <Button title="เพิ่มสินค้า" onPress={() => {}} />
        </View>
    );
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
}); 
