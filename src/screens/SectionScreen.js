import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import SectionDetail from '../components/SectionDetail';

const SectionScreen = ({ route }) => {
  const { section } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <SectionDetail section={section} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default SectionScreen;
