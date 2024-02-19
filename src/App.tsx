import Header from './components/Header.tsx';
import MyGoal from './components/MyGoal.tsx';

import goalsImg from './assets/goals.jpg';

export default function App() {
  return (
    <>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>My Goals</h1>
      </Header>
      <main>
        <MyGoal
          title='Learn React'
          description='Learn it from the ground up!'
        />
      </main>
    </>
  );
}
