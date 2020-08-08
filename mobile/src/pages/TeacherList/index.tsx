import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { List } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/core';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  function fetchFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIDs = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })
  
        setFavorites(favoritedTeachersIDs);
      }
    });
  }
  
  useFocusEffect(() => {
    fetchFavorites();
  });

  function handleToggleSearchBar() {
    setIsExpanded(!isExpanded);
  }

  async function handleSubmit(){
    console.log({subject, week_day, time})
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
    fetchFavorites();
    handleToggleSearchBar();
    setTeachers(response.data);
  };

  return (
      <View style={styles.container}>
        <PageHeader title="Proffys disponíveis">
        <List.Accordion 
          title={(
              <>
                <Feather name="filter" size={20} color="#FFF" />
                <Text style={styles.searchText} >  Filtrar por matéria, dia e horário</Text>
              </>
          )} 
          style={styles.expandable}
          expanded={isExpanded}
          onPress={handleToggleSearchBar}
        >
          <View style={styles.searchForm} >
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Matéria"
              value={subject}
              placeholderTextColor="#c1bccc"
              onChangeText={text => setSubject(text)}
            />

            <View style={styles.inputGroup} >
              <View style={styles.inputBlock} >
                <Text style={styles.label}>Matéria</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="Qual dia?"
                  value={week_day}
                  placeholderTextColor="#c1bccc"
                  onChangeText={text => setWeekDay(text)}
                />
              </View>

              <View style={styles.inputBlock} >
                <Text style={styles.label}>Horário</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="Qual hora?"
                  value={time}
                  placeholderTextColor="#c1bccc"
                  onChangeText={text => setTime(text)}
                />
              </View>
            </View>
            
            <View style={styles.buttonContainer} >
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} >
                <Text style={styles.submitButtonText} >Filtrar</Text>
              </TouchableOpacity>
            </View>
          </View>  
          
        </List.Accordion>
        </PageHeader>
        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16
          }}
        >

          { teachers.map((teacher: Teacher) => {
            return (
              <TeacherItem 
                key={teacher.id} 
                teacher={teacher} 
                favorited={favorites.includes(teacher.id)}
              />)}
            )
          }
        </ScrollView>
      </View>
  );
}

export default TeacherList;