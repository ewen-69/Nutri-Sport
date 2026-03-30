import React, { useState, useEffect } from 'react';

const JokeGenerator: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  const fetchJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    setJoke(data.value);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default JokeGenerator;