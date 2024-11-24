import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Импорт иконки "плюс"
import ProjectList from '../components/ProjectList';

const HomeScreen = ({ navigation }) => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project 1', sections: [{ id: 1, title: 'Section 1', description: 'Description for section 1' }] },
    { id: 2, name: 'Project 2', sections: [{ id: 2, title: 'Section 1', description: 'Description for section 1' }] },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newSectionTitle, setNewSectionTitle] = useState('');
  const [newSectionDescription, setNewSectionDescription] = useState('');
  const [editingProject, setEditingProject] = useState(null);
  const [editingSection, setEditingSection] = useState(null);
  
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const handleAddProject = () => {
    setProjects([...projects, { id: projects.length + 1, name: newProjectName, sections: [] }]);
    setNewProjectName('');
    toggleModal();
  };

  const handleAddSection = (projectId) => {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        project.sections.push({ id: project.sections.length + 1, title: newSectionTitle, description: newSectionDescription });
      }
      return project;
    });
    setProjects(updatedProjects);
    setNewSectionTitle('');
    setNewSectionDescription('');
    toggleModal();
  };

  const handleEditProject = () => {
    const updatedProjects = projects.map(project => {
      if (project.id === editingProject.id) {
        project.name = newProjectName;
      }
      return project;
    });
    setProjects(updatedProjects);
    setNewProjectName('');
    setEditingProject(null);
  };

  const handleEditSection = () => {
    const updatedProjects = projects.map(project => {
      project.sections = project.sections.map(section => {
        if (section.id === editingSection.id) {
          section.title = newSectionTitle;
          section.description = newSectionDescription;
        }
        return section;
      });
      return project;
    });
    setProjects(updatedProjects);
    setNewSectionTitle('');
    setNewSectionDescription('');
    setEditingSection(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Projects</Text>
        <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
          <Icon name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <ProjectList
        projects={projects}
        onSelectProject={(project) => navigation.navigate('Project', { project })}
        onAddSection={(projectId) => {
          setEditingProject(projectId);
          toggleModal();
        }}
      />

      {/* Модальное окно для добавления проекта или секции */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {editingProject ? (
              <>
                <Text style={styles.modalTitle}>Add Section</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Section Title"
                  value={newSectionTitle}
                  onChangeText={setNewSectionTitle}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Section Description"
                  value={newSectionDescription}
                  onChangeText={setNewSectionDescription}
                />
                <Button title="Add Section" onPress={() => handleAddSection(editingProject)} />
              </>
            ) : editingSection ? (
              <>
                <Text style={styles.modalTitle}>Edit Section</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Section Title"
                  value={newSectionTitle}
                  onChangeText={setNewSectionTitle}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Section Description"
                  value={newSectionDescription}
                  onChangeText={setNewSectionDescription}
                />
                <Button title="Save Changes" onPress={handleEditSection} />
              </>
            ) : (
              <>
                <Text style={styles.modalTitle}>Add Project</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Project Name"
                  value={newProjectName}
                  onChangeText={setNewProjectName}
                />
                <Button title="Add Project" onPress={handleAddProject} />
              </>
            )}
            <Button title="Cancel" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 50,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
  },
});

export default HomeScreen;
