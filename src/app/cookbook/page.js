import styles from './page.module.css';
import Nav from '@/components/nav';
import Menu from '@/components/menu';
import menuData from "../menuData"; // Import the data

export default function Cookbook() {
  return (
    <>
    <Nav isProjectPage={false} isAboutPage={true}/>
    {/* <div className="emptySpace"></div> */}
    <div className={styles.tortPlayContainer}>
      <span className={styles.tortPlayTitle}>Cook</span>
      <img src="/images/tortPlay.png" alt="Cookbook Cover" className={styles.tortPlay}/>
      <span className={styles.tortPlayTitle}>Book</span>
    </div>
    <div className={styles.menuContainer}>
      {/* Call Menu for each section */}
      <Menu data={menuData} section="Main Dishes" />
      <Menu data={menuData} section="Side Dishes" />
      <div></div>
      <div></div>
      <Menu data={menuData} section="Breakfast" />
      <Menu data={menuData} section="Desserts" />
    </div>
    {/* <span className={styles.tortPlaySubtitle}>(A collection of recipes I use in my kitchen)</span> */}
    </>
  );
}