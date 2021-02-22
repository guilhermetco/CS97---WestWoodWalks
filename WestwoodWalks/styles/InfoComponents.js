import { StyleSheet } from 'react-native';

const InfoComponents = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        width: 400,
        marginVertical: 8,
        backgroundColor: '#D7EBF4',
        justifyContent: 'flex-start'
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
        marginTop: 5,
        marginBottom: 15
    }
})

export default InfoComponents;