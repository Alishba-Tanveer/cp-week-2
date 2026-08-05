import { initials } from "../utils/helpers";

interface AvatarProps {
  name: string;
  image?: string;
}

function Avatar({ name, image }: AvatarProps) {
  const userInitials = initials(name);

  return (
    <div className="avatar">
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <div className="avatar-placeholder">
          {userInitials}
        </div>
      )}

      <h3>{name}</h3>
    </div>
  );
}

export default Avatar;