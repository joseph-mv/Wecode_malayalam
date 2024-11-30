import { BookText, Code, Video, Wrench, MessageSquare } from 'lucide-react';

const categories = [
  { name: 'Tutorials', icon: BookText, color: 'bg-blue-500' },
  { name: 'Challenges', icon: Code, color: 'bg-green-500' },
  { name: 'Interviews', icon: MessageSquare, color: 'bg-purple-500' },
  { name: 'Videos', icon: Video, color: 'bg-red-500' },
  { name: 'Tools', icon: Wrench, color: 'bg-yellow-500' },
];

export function CategorySection() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
      {categories.map(({ name, icon: Icon, color }) => (
        <button
          key={name}
          className="flex flex-col items-center p-4 rounded-lg text-black bg-white hover:shadow-lg hover:scale-105 transition-shadow"
        >
          <div className={`p-3 rounded-full ${color} bg-opacity-10 mb-2`}>
            <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
          </div>
          <span className="text-sm font-medium">{name}</span>
        </button>
      ))}
    </div>
  );
}