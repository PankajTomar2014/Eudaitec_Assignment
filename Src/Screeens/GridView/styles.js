import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    itemText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 60
    },
    twoBoxContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "47%",
        margin: 5,
        backgroundColor: Colors.red
    },
    twoBoxSubContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    twoBoxTextSyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.white,
    },
    oneBoxContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "97%",
        margin: 5,
        backgroundColor: Colors.red
    },
    oneBoxSubContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        paddingVertical: 62,
        backgroundColor: Colors.mediumGreen
    },
    oneBoxTextStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.red,
    }
});