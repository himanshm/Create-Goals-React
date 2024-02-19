import { FC } from 'react';
import { CareerGoal } from '../models/my-goals';

const MyGoal: FC<CareerGoal> = function (props) {
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
