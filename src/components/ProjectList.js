import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const ProjectList = ({ projects, onSelectProject }) => {
  return (
    <FlatList
      data={projects}
      keyExtractor={project => project.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectProject(item)}>
          <View style={styles.projectItem}>
            <Text style={styles.projectName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  projectItem: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProjectList;
