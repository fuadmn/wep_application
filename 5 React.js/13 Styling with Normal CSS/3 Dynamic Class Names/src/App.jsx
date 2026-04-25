import styles from './app.module.css';
import Another from './Another'
import { useState } from 'react';

const App = () => {

  const [active,setActive] = useState(false);

  return (
    <div className={`$styles.appContainer ${styles.darkMode}`}>
       <h1 className={active ? activeHeaderTitle : styles.inactiveHeaderTitle }>Hi Mom!</h1>
       <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit maxime in harum aut perferendis itaque est, architecto labore ipsum possimus ab officia necessitatibus nihil voluptate ad, sint sed voluptatem asperiores.</p>

       {/* another Container */}
       < Another/>
       Another
    </div>
  )
}

export default App
