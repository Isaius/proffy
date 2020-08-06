import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import giveClassesBgImg from '../../assets/images/give-classes-background.png'

import styles from './styles';
import { useNavigation } from '@react-navigation/core';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleOkButton(){
    goBack();
  }

  return (
      <View style={styles.container}>
          <ImageBackground 
            resizeMode='contain' 
            source={giveClassesBgImg} 
            style={styles.content} 
          >
          <Text style={styles.title} >Quer ser um Proffy?</Text>
          <Text style={styles.description} >
            Se cadastra lá na nossa plataforma web!
          </Text>
          </ImageBackground>

          <TouchableOpacity style={styles.button} onPress={handleOkButton} >
            <Text style={styles.buttonText} >Vamos lá!</Text>
          </TouchableOpacity>
      </View>
  );
}

export default GiveClasses;