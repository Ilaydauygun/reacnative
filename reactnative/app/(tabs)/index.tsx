import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { topics } from '@/constants/topics';
import TopicCard from '@/components/TopicCard';
import SearchBar from '@/components/SearchBar';
import Header from '@/components/Header';
import Colors from '@/constants/colors';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTopics, setFilteredTopics] = useState(topics);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredTopics(topics);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = topics.filter(
        topic => 
          topic.title.toLowerCase().includes(lowercaseQuery) || 
          topic.description.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredTopics(filtered);
    }
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <Header 
          title="React Native Öğrenim Kılavuzu" 
          subtitle="Mobil uygulama geliştirmeyi adım adım öğrenin"
        />
        
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        
        {filteredTopics.length > 0 ? (
          <FlatList
            data={filteredTopics}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TopicCard topic={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Arama sonucu bulunamadı</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
});