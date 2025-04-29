import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react-native';
import { topics } from '@/constants/topics';
import Colors from '@/constants/colors';
import Button from '@/components/Button';

export default function TopicDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const topic = topics.find(t => t.id === id);
  
  if (!topic) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Konu bulunamadı</Text>
        <Button title="Ana Sayfaya Dön" onPress={() => router.push('/')} />
      </View>
    );
  }

  const getLevelColor = () => {
    switch (topic.level) {
      case 'Başlangıç':
        return '#4CAF50';
      case 'Orta':
        return '#FF9800';
      case 'İleri':
        return '#F44336';
      default:
        return '#4CAF50';
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <ArrowLeft size={24} color={Colors.text} />
            </TouchableOpacity>
          ),
        }} 
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>{topic.title}</Text>
          
          <View style={styles.metaContainer}>
            <View style={[styles.levelBadge, { backgroundColor: getLevelColor() }]}>
              <Text style={styles.levelText}>{topic.level}</Text>
            </View>
            
            <View style={styles.durationContainer}>
              <Clock size={14} color={Colors.textSecondary} />
              <Text style={styles.durationText}>{topic.duration}</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.contentText}>{topic.content}</Text>
        </View>
        
        <View style={styles.actionContainer}>
          <Button 
            title="Konuyu Tamamla" 
            onPress={() => {}} 
            style={styles.completeButton}
          />
          <Button 
            title="Sonraki Konu" 
            variant="outline" 
            onPress={() => {
              const nextTopicId = (parseInt(topic.id) + 1).toString();
              const nextTopic = topics.find(t => t.id === nextTopicId);
              if (nextTopic) {
                router.push(`/topic/${nextTopicId}`);
              }
            }} 
            style={styles.nextButton}
            disabled={!topics.find(t => t.id === (parseInt(topic.id) + 1).toString())}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  backButton: {
    padding: 8,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 12,
  },
  levelText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  contentText: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
  actionContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  completeButton: {
    marginBottom: 12,
  },
  nextButton: {},
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  notFoundText: {
    fontSize: 18,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
});