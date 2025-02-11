interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

export default function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <li
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition ${
        active ? "bg-purple-600" : "hover:bg-gray-800"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </li>
  );
}
