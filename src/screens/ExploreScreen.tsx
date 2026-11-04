
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

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Explore</Text>
      <Text style={styles.description}>
        Discover new interests and inspiration.
      </Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={21} color="#888888" />

        <TextInput
          style={styles.search}
          placeholder="Search topics..."
          placeholderTextColor="#999999"
          value={search}
          onChangeText={setSearch}
        />

        {search.length > 0 && (
          <Ionicons
            name="close-circle"
            size={20}
            color="#888888"
            onPress={() => setSearch('')}
          />
        )}
      </View>

      {/* Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.subheading}>Discover something new</Text>
        <Text style={styles.categoryCount}>
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
          <Text style={styles.empty}>No topics found. Try another search.</Text>
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },

  heading: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 10,
  },

  description: {
    fontSize: 14,
    color: '#777777',
    marginTop: 5,
    marginBottom: 20,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    paddingHorizontal: 13,
    height: 48,
  },

  search: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 15,
    color: '#222222',
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
    color: '#222222',
  },

  categoryCount: {
    fontSize: 12,
    color: '#888888',
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
    color: '#777777',
    textAlign: 'center',
  },
});

