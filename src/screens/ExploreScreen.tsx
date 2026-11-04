
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

const posts = [
  { id: '1', title: 'Travel', color: '#D9B8A7' },
  { id: '2', title: 'Lifestyle', color: '#B8C9B2' },
  { id: '3', title: 'Fashion', color: '#E8C4D2' },
  { id: '4', title: 'Nature', color: '#B7C9D9' },
  { id: '5', title: 'Food', color: '#E7D3A5' },
  { id: '6', title: 'Photography', color: '#C9B9D9' },
  { id: '7', title: 'Art', color: '#D8BDA8' },
  { id: '8', title: 'Daily Life', color: '#B8D5D0' },
  { id: '9', title: 'Inspiration', color: '#E6C3B7' },
];

export default function ExploreScreen() {
  const [search, setSearch] = useState('');
  const { colors } = useTheme();

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Text style={[styles.heading, { color: colors.text }]}>
        Explore
      </Text>

      <Text style={[styles.description, { color: colors.secondaryText }]}>
        Discover new interests and inspiration.
      </Text>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.input }]}>
        <Ionicons name="search" size={21} color={colors.secondaryText} />

        <TextInput
          style={[styles.search, { color: colors.text }]}
          placeholder="Search topics..."
          placeholderTextColor={colors.secondaryText}
          value={search}
          onChangeText={setSearch}
        />

        {search.length > 0 && (
          <Ionicons
            name="close-circle"
            size={20}
            color={colors.secondaryText}
            onPress={() => setSearch('')}
          />
        )}
      </View>

      {/* Categories */}
      <View style={styles.sectionHeader}>
        <Text style={[styles.subheading, { color: colors.text }]}>
          Discover something new
        </Text>

        <Text style={[styles.categoryCount, { color: colors.secondaryText }]}>
          {filteredPosts.length} topics
        </Text>
      </View>

      <FlatList
        data={filteredPosts}
        numColumns={3}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.tile, { backgroundColor: item.color }]}>
            <View style={styles.tileIcon}>
              <Ionicons name="sparkles-outline" size={23} color="#333333" />
            </View>

            <Text style={styles.tileText}>{item.title}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: colors.secondaryText }]}>
            No topics found. Try another search.
          </Text>
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  heading: {
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 13,
    height: 48,
  },
  search: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 18,
  },
  subheading: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  categoryCount: {
    fontSize: 12,
  },
  tile: {
    flex: 1,
    height: 125,
    margin: 4,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  tileIcon: {
    marginBottom: 9,
  },
  tileText: {
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    fontSize: 13,
  },
  empty: {
    padding: 15,
    textAlign: 'center',
  },
});
