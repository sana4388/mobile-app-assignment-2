
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import PostCard from '../components/PostCard';
import posts from '../data/posts';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      {/* App Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Everyday</Text>

        <View style={styles.headerIcons}>
          <Pressable style={styles.iconButton}>
            <Ionicons name="heart-outline" size={26} color="#222222" />
          </Pressable>

          <Pressable style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={25} color="#222222" />
          </Pressable>
        </View>
      </View>

      <Text style={styles.heading}>Your Feed</Text>

      {/* Stories */}
      <View style={styles.storyRow}>
        {['Your Story', 'sarah', 'maya', 'alex'].map((name) => (
          <View style={styles.story} key={name}>
            <View style={styles.storyCircle}>
              <Text style={styles.storyInitial}>
                {name[0].toUpperCase()}
              </Text>
            </View>

            <Text style={styles.storyName}>{name}</Text>
          </View>
        ))}
      </View>

      {/* Dynamic Posts */}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          title={post.title}
          caption={post.caption}
          likes={post.likes}
          color={post.color}
          onPress={() =>
            navigation.navigate('PostDetails', {
              postId: post.id,
              username: post.username,
            })
          }
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
  },

  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E1306C',
  },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 18,
  },

  iconButton: {
    padding: 4,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 18,
    marginTop: 8,
  },

  storyRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 18,
  },

  story: {
    alignItems: 'center',
  },

  storyCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#FCE4EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E1306C',
  },

  storyInitial: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E1306C',
  },

  storyName: {
    marginTop: 5,
    fontSize: 12,
  },
});
