import styles from './app.module.css';
import Another from './Another'

const App = () => {
  return (
    <div className={styles.anotherContainer}>
       <h1 className={styles.headerTitle}>H1</h1>
       <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit maxime in harum aut perferendis itaque est, architecto labore ipsum possimus ab officia necessitatibus nihil voluptate ad, sint sed voluptatem asperiores.</p>

       {/* another Container */}
       < Another/>
       Another
    </div>
  )
}

export default App
