import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles['footer']}>
    <ul className={styles['footer__content']}>
      <li>Features</li>
      <li>Link Shortening</li>
      <li>Brand Links</li>
      <li>Analytics</li>
    </ul>
    <ul className={styles['footer__content']}>
      <li>Resources</li>
      <li>Blog</li>
      <li>Developers</li>
      <li>Support</li>
    </ul>
    <ul className={styles['footer__content']}>
      <li>Company</li>
      <li>About</li>
      <li>Our Team</li>
      <li>Careers</li>
      <li>Contact</li>
    </ul>
  </footer>
);

export default Footer;
