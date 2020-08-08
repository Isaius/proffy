import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f7',
        justifyContent: "center",
    },
    
    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 16
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },

    input: {
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 6
    },

    inputGroup: {
        flexDirection: 'row',
        alignContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
        marginLeft: 4
    },

    expandable: {
        borderWidth: 1,
        borderColor: '#0000',
        borderBottomColor: '#d4c2ff',
        borderRadius: 1,
        marginBottom: 10,
        marginTop: -20,
        height: 45,
        width: 327,
        marginLeft: -23
    },

    searchText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14
    },

    searchBarContent: {
        flexDirection: 'row'
    },

    buttonContainer: {

    },

    submitButton: {
        backgroundColor: '#04d361',
        height: 50,
        flexDirection: 'row',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    submitButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 16,
    },

});

export default styles;