import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineICon from '../../assets/images/icons/heart-outline.png';
import unfaveICon from '../../assets/images/icons/unfavorite.png';
import whatsappICon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import api from '../../services/api';

export interface Teacher {
  name: string,
  avatar: string,
  bio: string,
  cost: number,
  id: number,
  subject: string,
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher,
  favorited: boolean,
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    api.post('/connections', { user_id: teacher.id })
  }

  async function handleToggleFavorite() {
    const favoritesTeachers = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if(favoritesTeachers) {
      favoritesArray = JSON.parse(favoritesTeachers);
    }

    if(isFavorited){
      const favoritedIndex = favoritesArray.findIndex((favoritedTeacher: Teacher) => {
        return favoritedTeacher.id === teacher.id;
      });

      favoritesArray.splice(favoritedIndex, 1);
      setIsFavorited(false);
    } else {      
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container} >
      <View style={styles.profile} >
        <Image 
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo} >
          <Text style={styles.name}> { teacher.name } </Text>
          <Text style={styles.subject}> { teacher.subject } </Text>
        </View>
      </View>

      <Text style={styles.bio}> { teacher.bio } </Text>

      <View style={styles.footer} >
        <Text style={styles.price} >
            Preço/hora {`   `}
            <Text style={styles.value}>R$ { teacher.cost } </Text>
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[
              styles.favoriteButton, 
              isFavorited ? styles.isFavorite : {}
            ]}
            onPress={handleToggleFavorite}
            >
            <Image source={ isFavorited ? unfaveICon : heartOutlineICon} />
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.contactButton} onPress={handleLinkToWhatsapp}>
            <Image source={whatsappICon} />
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

export default TeacherItem;