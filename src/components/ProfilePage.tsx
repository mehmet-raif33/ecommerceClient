import ProfilePicture from './ProfileC/ProfilePicture';
import UserDetails from './ProfileC/UserDetails';
import UserPosts from './ProfileC/UserPosts';

const ProfilePage = () => {
  const user = {
    imageUrl: 'https://via.placeholder.com/150',
    name: 'John Doe',
    bio: 'Software Engineer at XYZ',
    location: 'San Francisco, CA',
    posts: [
      { id: 1, content: 'Had a great day at the park!' },
      { id: 2, content: 'Loving the new React features!' },
      { id: 3, content: 'Just finished a great book.' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <ProfilePicture imageUrl={user.imageUrl} />
      <UserDetails name={user.name} bio={user.bio} location={user.location} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;