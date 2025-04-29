import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { User, BookOpen, Award, Settings, Heart } from 'lucide-react-native';
import Colors from '@/constants/colors';
import Button from '@/components/Button';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <User size={40} color={Colors.primary} />
          </View>
          <Text style={styles.name}>Kullanıcı</Text>
          <Text style={styles.email}>kullanici@example.com</Text>
          <Button 
            title="Profili Düzenle" 
            variant="outline" 
            onPress={() => {}} 
            style={styles.editButton}
          />
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Tamamlanan</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Devam Eden</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Sertifikalar</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hesap</Text>
          <View style={styles.menuItem}>
            <BookOpen size={20} color={Colors.primary} />
            <Text style={styles.menuText}>Öğrenim Geçmişi</Text>
          </View>
          <View style={styles.menuItem}>
            <Award size={20} color={Colors.primary} />
            <Text style={styles.menuText}>Sertifikalarım</Text>
          </View>
          <View style={styles.menuItem}>
            <Heart size={20} color={Colors.primary} />
            <Text style={styles.menuText}>Favori Konular</Text>
          </View>
          <View style={styles.menuItem}>
            <Settings size={20} color={Colors.primary} />
            <Text style={styles.menuText}>Ayarlar</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hakkında</Text>
          <Text style={styles.aboutText}>
            React Native Öğrenim Kılavuzu, React Native ile mobil uygulama geliştirmeyi öğrenmek isteyenler için kapsamlı bir kaynaktır. Temel kavramlardan ileri düzey konulara kadar geniş bir içerik yelpazesi sunar.
          </Text>
          <Text style={styles.versionText}>Versiyon 1.0.0</Text>
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
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 24,
    paddingVertical: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.border,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuText: {
    fontSize: 16,
    color: Colors.text,
    marginLeft: 12,
  },
  aboutText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  versionText: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});