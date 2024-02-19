import { CareerGoal } from '../App.tsx';
import MyGoal from './MyGoal.tsx';

type goalsListProps = {
  goals: CareerGoal[];
};

const MyGoalList = function ({ goals }: goalsListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <MyGoal
            title={goal.title}
            description={goal.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default MyGoalList;
