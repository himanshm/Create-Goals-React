import { useState } from 'react';

import Header from './components/Header.tsx';
import MyGoalList from './components/MyGoalList.tsx';
import goalsImg from './assets/goals.jpg';
import { generateGUID } from './utils/generateGUID.ts';
import { CareerGoal } from './models/my-goals.ts';

export default function App() {
  const [goals, setGoals] = useState<CareerGoal[]>([]);

  const addGoalHandler = function () {
    const newGoal: CareerGoal = {
      id: generateGUID(),
      title: 'Learn React with TypeScript',
      description: 'Learn it in depth!',
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>My Goals</h1>
      </Header>

      <button onClick={addGoalHandler}>Add Goal</button>
      <MyGoalList goals={goals} />
    </main>
  );
}
