import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';


import styles from './styles';
import api from '../../services/api';

const Landing: React.FC = () => {
  const navigation = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useFocusEffect(() => {
    api.get('/connections').then(response => {
      setTotalConnections(response.data.total);
    });
  });
  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }
  
  function handleNavigateToStudyPage() {
    navigation.navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner}/>
      
      <Text style={styles.title} >
        Seja bem-vindo, {'\n'}

        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer} >
        <TouchableOpacity 
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyPage}
        >
          <Image source={studyIcon}/>
          <Text style={styles.buttonText}>
            Estudar
          </Text>
        </TouchableOpacity>
         
        <TouchableOpacity 
          style={[styles.button, styles.buttonSecondary]} 
          onPress={handleNavigateToGiveClassesPage } 
        >
          <Image source={giveClassesIcon}/>
          <Text style={styles.buttonText}>
            Dar aulas
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnections} > 
        Total de { totalConnections } conexões já realizadas {'  '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;