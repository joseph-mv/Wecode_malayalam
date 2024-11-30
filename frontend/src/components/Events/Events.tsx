import  { useState } from 'react';
import { Event } from './type';
import { SearchBar } from '../SearchBar';
import { FilterSection } from './FilterSections';
import { EventCard } from './EventCard';


const mockEvents: Event[] = [
  {
    id: '1',
    title: 'React Advanced Workshop',
    description: 'Deep dive into advanced React concepts and patterns',
    shortDescription: 'Master advanced React concepts',
    date: '2024-03-25',
    time: '10:00 AM',
    type: 'Workshop',
    category: 'Technology',
    speakers: ['John Doe'],
    isRegistered: false,
  },
  {
    id: '2',
    title: 'Design Systems Seminar',
    description: 'Learn how to build and maintain design systems',
    shortDescription: 'Building scalable design systems',
    date: '2024-03-28',
    time: '2:00 PM',
    type: 'Seminar',
    category: 'Design',
    speakers: ['Jane Smith'],
    isRegistered: false,
  },
];

function Events() {
  const [events, setEvents] = useState<Event[]>(mockEvents);

  const handleSearch = (query: string) => {
    const filtered = mockEvents.filter(event =>
     
      event.title.toLowerCase().includes(query.toLowerCase())
      
    );
    setEvents(filtered);
  };

  const handleFilter = (filters: { type: string; category: string; date: string }) => {
    let filtered = [...mockEvents];
    if (filters.type && filters.type !== 'All') {
      filtered = filtered.filter(event => event.type === filters.type);
    }
    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(event => event.category === filters.category);
    }
    if (filters.date) {
      filtered = filtered.filter(event => event.date === filters.date);
    }
    setEvents(filtered);
  };

  const handleRegister = (eventId: string) => {
    setEvents(events.map(event =>
      event.id === eventId ? { ...event, isRegistered: true } : event
    ));
  };
console.log(events)
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold ">Event Manager</h1>
          <div className="space-x-4">
           
          </div>
        </div>

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
          <FilterSection onFilterChange={handleFilter} />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(event => (
            <EventCard
                key={event.id}
                event={event}
                onRegister={handleRegister}
              />
               
            ))}
          
          </div>
      </div>
    </div>
  );
}

export default Events;