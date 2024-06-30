import ProfilePicture from './ProfileC/ProfilePicture';
import UserDetails from './ProfileC/UserDetails';
import UserPosts from './ProfileC/UserPosts';

const ProfilePage = () => {

  const user = {
    imageUrl: 'public/images/profileImage.jpg',
    name: 'John Doe',
    bio: 'Software Engineer at XYZ',
    location: 'San Francisco, CA',
    posts: [
      { id: 1, content: 'Had a great day at the park!' },
      { id: 2, content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
      { id: 3, content: 'Just finished a great book.' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <ProfilePicture imageUrl={user.imageUrl} />
      <UserDetails name={user.name} bio={user.bio} location={user.location} />
      <UserPosts posts={user.posts} userImage={user.imageUrl} />
    </div>
  );
};

export default ProfilePage;