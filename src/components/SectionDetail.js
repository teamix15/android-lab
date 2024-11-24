import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const SectionDetail = ({ section }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <Text style={styles.sectionDescription}>{section.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 15,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default SectionDetail;
