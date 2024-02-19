import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = function ({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null); // useRef() by default out of the box contain undefined as a default starting value
  const summary = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset(); // Resets the form after submission
    onAddGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input
          id='goal'
          type='text'
          ref={goal}
        />
      </p>
      <p>
        <label htmlFor='summary'>Short Summary</label>
        <input
          id='summary'
          type='text'
          ref={summary}
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
