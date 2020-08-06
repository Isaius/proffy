import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8257e5',
      justifyContent: "center",
      padding: 40
    },

    content:{
      flex: 1,
      justifyContent: 'center',
    },

    title: {
      fontFamily: 'Archivo_700Bold',
      fontSize: 32,
      color: '#fff',
      lineHeight: 37,
      maxWidth: 180
    },

    description: {
      maxWidth: 200,
      color: '#d4c2ff',
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Poppins_400Regular'
    },

    button: {
      marginVertical: 40,
      backgroundColor: '#04d361',
      height: 58,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8
    },

    buttonText: {
      color: '#FFF',
      fontSize: 16,
      fontFamily: 'Archivo_700Bold'
    },
});

export default styles;