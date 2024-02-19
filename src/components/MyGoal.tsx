import { FC } from 'react';

const MyGoal: FC<{ title: string; description: string }> = (props) => {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};

export default MyGoal;
