import React from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const SectionList = ({ sections, onSelectSection }) => {
  return (
    <FlatList
      data={sections}
      keyExtractor={section => section.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectSection(item)}>
          <View style={styles.sectionItem}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <Text style={styles.sectionDescription}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  sectionItem: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  sectionDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default SectionList;
