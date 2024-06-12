interface UserDetailsProps {
  name: string;
  bio: string;
  location: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ name, bio, location }) => {
  return (
    <div className="text-center mt-4">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-gray-600">{bio}</p>
      <p className="text-gray-600 mt-2">{location}</p>
    </div>
  );
};

export default UserDetails;