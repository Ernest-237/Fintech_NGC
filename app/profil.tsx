import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Thomas Dupont</Text>
        <Text style={styles.email}>thomas.dupont@example.com</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>248</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>583</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>129</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>À propos</Text>
        <Text style={styles.bio}>
          Développeur React Native passionné par la création d'applications mobiles. 
          J'aime explorer de nouvelles technologies et partager mes connaissances avec la communauté.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mes Intérêts</Text>
        <View style={styles.interestsContainer}>
          <View style={styles.interestBadge}>
            <Text style={styles.interestText}>React Native</Text>
          </View>
          <View style={styles.interestBadge}>
            <Text style={styles.interestText}>JavaScript</Text>
          </View>
          <View style={styles.interestBadge}>
            <Text style={styles.interestText}>UI/UX</Text>
          </View>
          <View style={styles.interestBadge}>
            <Text style={styles.interestText}>Mobile</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Retour</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  stats: {
    flexDirection: 'row',
    marginTop: 10,
    width: '80%',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interestBadge: {
    backgroundColor: '#e0e0ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  interestText: {
    color: '#6200ee',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});