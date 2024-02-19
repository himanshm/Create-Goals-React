import { useState } from 'react';

import Header from './components/Header.tsx';
import MyGoalList from './components/MyGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';
import goalsImg from './assets/goals.jpg';
import { generateGUID } from './utils/generateGUID.ts';

export type CareerGoal = {
  title: string;
  description: string;
  id: string;
};

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

  const deleteGoalHandler = function (goalId: string) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId);
    });
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>My Goals</h1>
      </Header>

      <NewGoal />
      <MyGoalList
        goals={goals}
        onDeleteGoal={deleteGoalHandler}
      />
    </main>
  );
}
