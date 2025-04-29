import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Code, Layers, RefreshCw, Navigation, Palette, Server, Smartphone, Zap } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { Topic } from '@/constants/topics';

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  const router = useRouter();

  const getIcon = () => {
    switch (topic.icon) {
      case 'code':
        return <Code size={24} color={Colors.primary} />;
      case 'layers':
        return <Layers size={24} color={Colors.primary} />;
      case 'refresh-cw':
        return <RefreshCw size={24} color={Colors.primary} />;
      case 'navigation':
        return <Navigation size={24} color={Colors.primary} />;
      case 'palette':
        return <Palette size={24} color={Colors.primary} />;
      case 'server':
        return <Server size={24} color={Colors.primary} />;
      case 'smartphone':
        return <Smartphone size={24} color={Colors.primary} />;
      case 'zap':
        return <Zap size={24} color={Colors.primary} />;
      default:
        return <Code size={24} color={Colors.primary} />;
    }
  };

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

  const handlePress = () => {
    router.push(`/topic/${topic.id}`);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        {getIcon()}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{topic.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{topic.description}</Text>
        <View style={styles.metaContainer}>
          <View style={[styles.levelBadge, { backgroundColor: getLevelColor() }]}>
            <Text style={styles.levelText}>{topic.level}</Text>
          </View>
          <Text style={styles.duration}>{topic.duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  levelText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  duration: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
});