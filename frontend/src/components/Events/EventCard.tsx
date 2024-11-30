
import { Calendar, Clock, ArrowRight } from 'lucide-react';
interface Event {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    date: string;
    time: string;
    type: 'Workshop' | 'Seminar' | 'Webinar' | 'Conference';
    category: string;
    venue?: string;
    speakers: string[];
    isRegistered: boolean;
  }

interface EventCardProps {
  event: Event;
  onRegister: (eventId: string) => void;
}

export function EventCard({ event, onRegister }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl text-black font-semibold mb-2">{event.title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{event.date}</span>
        <Clock className="h-4 w-4 ml-4 mr-2" />
        <span>{event.time}</span>
      </div>
      <p className="text-gray-600 mb-4">{event.shortDescription}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onRegister(event.id)}
          className={`px-4 py-2 rounded-md ${
            event.isRegistered
              ? 'bg-green-100 text-green-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {event.isRegistered ? 'Registered' : 'Register Now'}
        </button>
        <a
          href={`/event/${event.id}`}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          Learn more
          <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
}