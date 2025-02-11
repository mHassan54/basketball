import Image from "next/image";

interface UserProfileProps {
  name: string;
  email: string;
}

export default function UserProfile({ name, email }: UserProfileProps) {
  return (
    <div className="flex items-center space-x-3 border-t border-gray-700 pt-3">
      <Image
        src="/icons/avatar-placeholder.png"
        alt="User"
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-400">{email}</p>
      </div>
      <span className="text-lg">➡️</span>
    </div>
  );
}
