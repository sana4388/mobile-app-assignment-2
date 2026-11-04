
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/AppNavigator';
import posts from '../data/posts';
import { useTheme } from '../context/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'PostDetails'>;

export default function PostDetailsScreen({ route }: Props) {
  const { postId, username } = route.params;
  const { colors } = useTheme();

  const post = posts.find(
    (item) => item.id === postId && item.username === username
  );

  if (!post) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.heading, { color: colors.text }]}>
          Post not found.
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.heading, { color: colors.text }]}>
        Post Details
      </Text>

      <View style={styles.postHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {post.username[0].toUpperCase()}
          </Text>
        </View>

        <Text style={[styles.username, { color: colors.text }]}>
          @{post.username}
        </Text>
      </View>

      <View style={[styles.photo, { backgroundColor: post.color }]}>
        <Text style={styles.photoText}>{post.title}</Text>
      </View>

      <View style={styles.actions}>
        <Ionicons name="heart-outline" size={27} color="#E1306C" />
        <Ionicons name="chatbubble-outline" size={25} color={colors.text} />
        <Ionicons name="paper-plane-outline" size={25} color={colors.text} />
      </View>

      <Text style={[styles.likes, { color: colors.text }]}>
        {post.likes.toLocaleString()} likes
      </Text>

      <Text style={[styles.caption, { color: colors.text }]}>
        <Text style={styles.captionUsername}>@{post.username} </Text>
        {post.caption}
      </Text>

      <Text style={[styles.details, { color: colors.secondaryText }]}>
        Post ID: {post.id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FCE4EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E1306C',
  },
  avatarText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#E1306C',
  },
  photo: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  photoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333333',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  actions: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 15,
  },
  likes: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  caption: {
    fontSize: 15,
    marginTop: 10,
    lineHeight: 22,
  },
  captionUsername: {
    fontWeight: 'bold',
  },
  details: {
    marginTop: 12,
    fontSize: 12,
  },
});
