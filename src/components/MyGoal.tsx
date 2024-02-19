import { CareerGoal } from '../App.tsx';

type MyGoalProps = {
  goal: CareerGoal;
  onDelete: (id: string) => void;
};

const MyGoal = function ({ goal, onDelete }: MyGoalProps) {
  return (
    <article>
      <div>
        <h2>{goal.title}</h2>
        <p>{goal.description}</p>
      </div>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </article>
  );
};

export default MyGoal;
