import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    controls: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 155,
        marginBottom: 10,
    },

    controlsIconWrapper: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        padding: 18,
        margin: 10,
    },

    controlsIcon: {
        color: 'white',
    },


    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        // flex: 1,
    },

    menuIcon: {
        color: 'white',
        
    },

    menuIconArrow: {
        color:'#4D4D4E',
    },

    iconInfo: {
        flexDirection: 'row',
        alignItems: 'center',


    },

    iconTextWrapper: {
        marginLeft: 15,
    },

    iconText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    iconTextSub: {
        color: 'gray',
    }

})

export default styles;