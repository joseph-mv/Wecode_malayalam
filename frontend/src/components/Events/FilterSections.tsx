
interface FilterSectionProps {
  onFilterChange: (filters: { type: string; category: string; date: string }) => void;
}

export function FilterSection({ onFilterChange }: FilterSectionProps) {
  const eventTypes = ['All', 'Workshop', 'Seminar', 'Webinar', 'Conference'];
  const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing'];

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        onChange={(e) => onFilterChange({ type: e.target.value, category: '', date: '' })}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {eventTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => onFilterChange({ type: '', category: e.target.value, date: '' })}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input
        type="date"
        onChange={(e) => onFilterChange({ type: '', category: '', date: e.target.value })}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}