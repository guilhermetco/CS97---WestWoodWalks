import { StyleSheet } from 'react-native';

const InfoComponents = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: '2%',
        marginVertical: '2%',
        backgroundColor: '#D7EBF4',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        alignSelf: 'flex-start'
    },
    detailsOne: {
        fontSize: 15
    },
    detailsTwo: {
        fontSize: 15,
        fontStyle: 'italic',
        marginTop: '1%',
        marginBottom: '5%'
    }
})

export default InfoComponents;