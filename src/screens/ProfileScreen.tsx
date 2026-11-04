
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const profilePosts = [
  { id: '1', label: 'Travel', color: '#D9B8A7' },
  { id: '2', label: 'Friends', color: '#B8C9B2' },
  { id: '3', label: 'Nature', color: '#E8C4D2' },
  { id: '4', label: 'Moments', color: '#B7C9D9' },
  { id: '5', label: 'Style', color: '#E7D3A5' },
  { id: '6', label: 'Life', color: '#C9B9D9' },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Heading */}
      <View style={styles.header}>
        <Text style={styles.heading}>sanjana</Text>
        <Ionicons name="menu-outline" size={28} color="#222222" />
      </View>

      {/* Profile Information */}
      <View style={styles.profileSection}>
        <View style={styles.profileTop}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>

          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>1.2K</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>680</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        <View style={styles.bioSection}>
          <Text style={styles.displayName}>Sanjana Dhaka</Text>
          <Text style={styles.bio}>
            Creating memories ✨ | Everyday moments
          </Text>
        </View>
      </View>

      {/* Profile Buttons */}
      <View style={styles.buttons}>
        <Pressable style={styles.editButton}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </Pressable>

        <Pressable style={styles.shareButton}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </Pressable>

        <Pressable style={styles.addButton}>
          <Ionicons name="person-add-outline" size={18} color="#222222" />
        </Pressable>
      </View>

      {/* Post Grid Heading */}
      <View style={styles.sectionHeader}>
        <Ionicons name="grid-outline" size={25} color="#E1306C" />
        <Text style={styles.sectionTitle}>Your Posts</Text>
      </View>

      {/* Posts Grid */}
      <View style={styles.grid}>
        {profilePosts.map((post) => (
          <View
            key={post.id}
            style={[styles.postTile, { backgroundColor: post.color }]}
          >
            <Ionicons name="image-outline" size={24} color="#555555" />
            <Text style={styles.postText}>{post.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 15,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222',
  },

  profileSection: {
    paddingHorizontal: 18,
    paddingTop: 12,
  },

  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FCE4EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#E1306C',
  },

  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#E1306C',
  },

  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 12,
  },

  stat: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },

  statLabel: {
    color: '#777777',
    marginTop: 4,
    fontSize: 12,
  },

  bioSection: {
    marginTop: 14,
  },

  displayName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222222',
  },

  bio: {
    fontSize: 13,
    marginTop: 5,
    color: '#666666',
  },

  buttons: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 18,
    gap: 8,
  },

  editButton: {
    flex: 1,
    padding: 11,
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    alignItems: 'center',
  },

  shareButton: {
    flex: 1,
    padding: 11,
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    alignItems: 'center',
  },

  addButton: {
    paddingHorizontal: 13,
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#222222',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 22,
    marginBottom: 12,
    borderTopWidth: 1,
    borderColor: '#EEEEEE',
    paddingTop: 15,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
  },

  postTile: {
    width: '31.5%',
    height: 115,
    margin: '0.9%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  postText: {
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 7,
    fontSize: 12,
  },
});

