export default function SupportBox() {
  return (
    <div className="bg-purple-800 p-4 rounded-lg text-sm space-y-2 relative">
      <div className="flex items-center space-x-2">
        <span className="text-lg">🎧</span>
        <p className="font-medium">Need Support?</p>
      </div>
      <p className="text-gray-300">
        Contact with one of our experts to get support.
      </p>
      <button className="absolute top-2 right-2 text-gray-300 text-sm">
        ×
      </button>
    </div>
  );
}
