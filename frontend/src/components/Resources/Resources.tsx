import { useState } from "react";
import { Resource } from "./types";
// import { SearchBar } from "./SearchBar";
import { CategorySection } from "./CategorySection";
import { Sidebar } from "./Sidebar";
import { ResourceCard } from "./ResourceCard";
import { SearchBar } from "../SearchBar";


const mockResources: Resource[] = [
  {
    id: '1',
    title: 'React Hooks Deep Dive',
    description: 'Master React Hooks with practical examples and best practices',
    type: 'tutorial',
    difficulty: 'intermediate',
    tags: ['react', 'hooks', 'javascript'],
    author: 'Joseph M V',
    dateAdded: '2024-03-15',
  },
  {
    id: '2',
    title: 'Data Structures in TypeScript',
    description: 'Implementation of common data structures using TypeScript',
    type: 'challenge',
    difficulty: 'advanced',
    tags: ['typescript', 'algorithms', 'data-structures'],
    author: 'Vipin',
    dateAdded: '2024-03-14',
  },
];

const mockTags = ['react', 'typescript', 'javascript', 'algorithms', 'web-dev', 'css'];


function Resources() {
  const [resources, setResources] = useState(mockResources);
  const onSearch=(query:string)=>{
    console.log(query)
  const filtered=  mockResources.filter((resource)=>resource.title.toLowerCase().includes(query.toLowerCase()))
  setResources(filtered)
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 py-8 text-mainText">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Learning Resources Hub
        </h1>
        
        <div className="mb-8">
          <SearchBar onSearch={onSearch} />
        </div>

        <div className="mb-12">
          <CategorySection />
        </div>

        <div className="flex gap-8">
          <Sidebar tags={mockTags} />
          
          <div className="flex-1">
            <div className="grid gap-6">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;