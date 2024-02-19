import { type ReactNode } from 'react';

import { CareerGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import MyGoal from './MyGoal.tsx';

type goalsListProps = {
  goals: CareerGoal[];
  onDeleteGoal: (id: string) => void;
};

const MyGoalList = function ({ goals, onDeleteGoal }: goalsListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>You have no goals yet! Start setting some!</InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox
        mode='warning'
        severity='medium'
      >
        You're collecting a lot of goals! Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <MyGoal
              onDelete={onDeleteGoal}
              goal={goal}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyGoalList;
