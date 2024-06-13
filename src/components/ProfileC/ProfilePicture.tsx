interface ProfilePictureProps {
    imageUrl: string;
}
  
const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl }) => {
    return (
      <div className="flex justify-center mt-4">
        <img
          className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          src={imageUrl}
          alt="Profile"
        />
      </div>
    );
};
  
export default ProfilePicture;