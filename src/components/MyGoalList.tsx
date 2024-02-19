import { CareerGoal } from '../App.tsx';
import MyGoal from './MyGoal.tsx';

type goalsListProps = {
  goals: CareerGoal[];
  onDeleteGoal: (id: string) => void;
};

const MyGoalList = function ({ goals, onDeleteGoal }: goalsListProps) {
  return (
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
  );
};

export default MyGoalList;
