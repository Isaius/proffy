import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257e5',
    },
    
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 22,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 15,
    }
});

export default styles;