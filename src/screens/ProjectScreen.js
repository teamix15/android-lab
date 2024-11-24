import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import SectionList from '../components/SectionList';

const ProjectScreen = ({ route, navigation }) => {
  const { project } = route.params;

  const handleSelectSection = (section) => {
    navigation.navigate('Section', { section });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.projectTitle}>{project.name}</Text>
      <SectionList sections={project.sections} onSelectSection={handleSelectSection} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  projectTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default ProjectScreen;
