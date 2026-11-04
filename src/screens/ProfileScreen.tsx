
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

const profilePosts = [
  { id: '1', label: 'Travel', color: '#D9B8A7' },
  { id: '2', label: 'Friends', color: '#B8C9B2' },
  { id: '3', label: 'Nature', color: '#E8C4D2' },
  { id: '4', label: 'Moments', color: '#B7C9D9' },
  { id: '5', label: 'Style', color: '#E7D3A5' },
  { id: '6', label: 'Life', color: '#C9B9D9' },
];

export default function ProfileScreen() {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.heading, { color: colors.text }]}>
          sanjana
        </Text>
        <Ionicons name="menu-outline" size={28} color={colors.text} />
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profileTop}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>

          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={[styles.statNumber, { color: colors.text }]}>24</Text>
              <Text style={[styles.statLabel, { color: colors.secondaryText }]}>Posts</Text>
            </View>

            <View style={styles.stat}>
              <Text style={[styles.statNumber, { color: colors.text }]}>1.2K</Text>
              <Text style={[styles.statLabel, { color: colors.secondaryText }]}>Followers</Text>
            </View>

            <View style={styles.stat}>
              <Text style={[styles.statNumber, { color: colors.text }]}>680</Text>
              <Text style={[styles.statLabel, { color: colors.secondaryText }]}>Following</Text>
            </View>
          </View>
        </View>

        <View style={styles.bioSection}>
          <Text style={[styles.displayName, { color: colors.text }]}>
            Sanjana Dhaka
          </Text>
          <Text style={[styles.bio, { color: colors.secondaryText }]}>
            Creating memories ✨ | Everyday moments
          </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <Pressable style={[styles.profileButton, { backgroundColor: colors.card }]}>
          <Text style={[styles.buttonText, { color: colors.text }]}>Edit Profile</Text>
        </Pressable>

        <Pressable style={[styles.profileButton, { backgroundColor: colors.card }]}>
          <Text style={[styles.buttonText, { color: colors.text }]}>Share Profile</Text>
        </Pressable>

        <Pressable style={[styles.addButton, { backgroundColor: colors.card }]}>
          <Ionicons name="person-add-outline" size={18} color={colors.text} />
        </Pressable>
      </View>

      {/* Theme Toggle */}
      <Pressable
        style={[styles.themeButton, { backgroundColor: colors.card }]}
        onPress={toggleTheme}
      >
        <Ionicons
          name={isDark ? 'moon' : 'sunny'}
          size={21}
          color={colors.primary}
        />

        <Text style={[styles.themeText, { color: colors.text }]}>
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </Text>

        <View style={styles.themeSpacer} />

        <Text style={[styles.themeAction, { color: colors.primary }]}>
          Switch to {isDark ? 'Light' : 'Dark'}
        </Text>
      </Pressable>

      <View style={[styles.sectionHeader, { borderColor: colors.border }]}>
        <Ionicons name="grid-outline" size={25} color={colors.primary} />
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Your Posts
        </Text>
      </View>

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
  },
  statLabel: {
    marginTop: 4,
    fontSize: 12,
  },
  bioSection: {
    marginTop: 14,
  },
  displayName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 13,
    marginTop: 5,
  },
  buttons: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 18,
    gap: 8,
  },
  profileButton: {
    flex: 1,
    padding: 11,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButton: {
    paddingHorizontal: 13,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  themeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 13,
    borderRadius: 9,
    gap: 10,
  },
  themeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  themeSpacer: {
    flex: 1,
  },
  themeAction: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 22,
    marginBottom: 12,
    borderTopWidth: 1,
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
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

