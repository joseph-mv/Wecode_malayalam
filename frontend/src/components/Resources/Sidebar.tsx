interface SidebarProps {
    tags: string[];
    }
  
  export function Sidebar({ tags }: SidebarProps) {
    return (
      <div className="w-64 space-y-8 text-black">
        <div className="bg-white  p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Filters</h3>
          <div className="space-y-2">
            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <label key={level} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-500" />
                <span className="text-sm">{level}</span>
              </label>
            ))}
          </div>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Top Contributors</h3>
         
        </div>
      </div>
    );
  }