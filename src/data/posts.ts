
export type Post = {
  id: number;
  username: string;
  title: string;
  caption: string;
  likes: number;
  color: string;
};

const posts: Post[] = [
  {
    id: 1,
    username: 'sarah',
    title: 'Weekend Moments',
    caption: 'Enjoying the little things ✨',
    likes: 248,
    color: '#E9C8D5',
  },
  {
    id: 2,
    username: 'maya',
    title: 'Explore More',
    caption: 'A new day, a new adventure 🌿',
    likes: 132,
    color: '#C8DCCB',
  },
  {
    id: 3,
    username: 'alex',
    title: 'Beautiful Days',
    caption: 'Making memories every day!',
    likes: 315,
    color: '#C9B9D9',
  },
  {
    id: 4,
    username: 'jordan',
    title: 'Little Adventures',
    caption: 'Finding beauty everywhere 🌸',
    likes: 186,
    color: '#D9B8A7',
  },
];

export default posts;
