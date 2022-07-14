import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    batterySection: {
        marginTop: 10,
        flexDirection: 'row',
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 10,
    },

    parkState: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    batteryImage: {
        width: 70,
        height: 26,
        marginRight: 14,
    },

    batteryText: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },

    parkStateText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }

})

export default styles;