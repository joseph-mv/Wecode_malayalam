import { Calendar } from 'lucide-react';
import { Resource } from './types';


interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="bg-white  p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg text-black font-semibold">{resource.title}</h3>
        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
          {resource.type}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{resource.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{resource.author}</span>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {resource.dateAdded}
        </div>
      </div>
    </div>
  );
}