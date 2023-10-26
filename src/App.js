import React, { useEffect, useState } from 'react';
import './App.css';
import {Puff} from 'react-loader-spinner';
import './Loader.css'
import Card from './components/Card';

function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopStories() {
      try {
        const response = await fetch('http://localhost:5000/api/top-stories');
        const data = await response.json();
        setStories(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching top stories', error);
        setLoading(false); 
      }
    }

    fetchTopStories();
  }, []);

  return (
    <div className="App">
      <h1>New York Times Top Stories</h1>
      {loading ? ( 
        <Puff
          color="#007BFF"
          height={100}
          width={100}
        />
      ) : (
        <div className="story-container">
          {stories.map((story, index) => (
           <Card key={index} story={story} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
