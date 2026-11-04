
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type PostCardProps = {
  username: string;
  title: string;
  caption: string;
  likes: number;
  color: string;
  onPress?: () => void;
};

export default function PostCard({
  username,
  title,
  caption,
  likes,
  color,
  onPress,
}: PostCardProps) {
  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Pressable style={styles.userInfo} onPress={onPress}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {username[0].toUpperCase()}
            </Text>
          </View>

          <Text style={styles.username}>@{username}</Text>
        </Pressable>

        <Pressable style={styles.menuButton}>
          <Ionicons name="ellipsis-horizontal" size={23} color="#222222" />
        </Pressable>
      </View>

      {/* Post Image */}
      <Pressable onPress={onPress}>
        <View style={[styles.photo, { backgroundColor: color }]}>
          <Text style={styles.photoTitle}>{title}</Text>
        </View>
      </Pressable>

      {/* Post Actions */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Pressable style={styles.actionButton}>
            <Ionicons name="heart-outline" size={27} color="#222222" />
          </Pressable>

          <Pressable style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={25} color="#222222" />
          </Pressable>

          <Pressable style={styles.actionButton}>
            <Ionicons name="paper-plane-outline" size={25} color="#222222" />
          </Pressable>
        </View>

        <Pressable>
          <Ionicons name="bookmark-outline" size={25} color="#222222" />
        </Pressable>
      </View>

      {/* Post Information */}
      <View style={styles.postInfo}>
        <Text style={styles.likes}>{likes.toLocaleString()} likes</Text>

        <Text style={styles.caption}>
          <Text style={styles.captionUsername}>@{username} </Text>
          {caption}
        </Text>

        <Pressable onPress={onPress}>
          <Text style={styles.tapText}>View post details</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 12,
  },

  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FCE4EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E1306C',
  },

  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E1306C',
  },

  username: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#222222',
  },

  menuButton: {
    padding: 5,
  },

  photo: {
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333333',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 12,
  },

  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },

  actionButton: {
    padding: 2,
  },

  postInfo: {
    paddingHorizontal: 14,
    paddingTop: 8,
  },

  likes: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222222',
  },

  caption: {
    fontSize: 14,
    marginTop: 5,
    lineHeight: 20,
    color: '#333333',
  },

  captionUsername: {
    fontWeight: 'bold',
  },

  tapText: {
    paddingTop: 7,
    color: '#888888',
    fontSize: 12,
  },
});
