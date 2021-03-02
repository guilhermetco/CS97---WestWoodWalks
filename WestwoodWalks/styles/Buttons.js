import { StyleSheet } from 'react-native';
import Colors from './Colors.js'

const Buttons = StyleSheet.create({
    brownbutton: {
        backgroundColor: '#675a5a',
        color: 'white',
        marginTop: '8%',
        width: 110,
        borderRadius: 19,
        overflow: 'hidden',
        textAlign: 'center',
        fontSize: 20,
        padding: '2%',
        borderWidth: 1,
        borderColor: '#675a5a'
    },
    profilebutton: {
        backgroundColor: '#D7EBF4',
        justifyContent: 'center',
        color: '#675a5a',
        marginVertical: '2%',
        marginHorizontal: '2%',
        width: '40%',
        height: '95%',
        borderRadius: 19,
        overflow: 'hidden',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 15,
        padding: '2%',
        borderWidth: 1,
        borderColor: '#675a5a'
    },
    categorybutton: {
        backgroundColor: Colors.lightyellow,
        justifyContent: 'center',
        color: 'brown',
        marginVertical: '1%',
        marginHorizontal: '2%',
        width: '21%',
        height: '80%',
        overflow: 'hidden',
        borderRadius: 19,
        textAlign: "center",
        alignItems: "center",
        fontSize: 12,
        padding: "2%",
        borderWidth: 1,
        borderColor: Colors.brown
    }
})

export default Buttons;