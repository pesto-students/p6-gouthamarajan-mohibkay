import { useState } from 'react';
import styles from './link-display.module.css';

const LinkDisplay = ({ shortLinkData }) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const copyButtonTitle = isLinkCopied ? 'Copied' : 'Copy';
  const { original_link: originalLink, full_short_link: shortenedLink } =
    shortLinkData;

  const copyToClipboard = () => {
    if (!isLinkCopied) {
      navigator.clipboard.writeText(shortenedLink);
      setIsLinkCopied(true);
    }
  };

  return (
    <section className={styles['linkDisplay__container']}>
      <div className={styles['linkDisplay__wrapper']}>
        <div>
          <a href={originalLink} target='blank'>
            {originalLink}
          </a>
        </div>

        <div className={styles['linkDisplay__shortenedLinkWrapper']}>
          <a
            href={shortenedLink}
            target='blank'
            className={styles['linkDisplay__shortenedLink']}
          >
            {shortenedLink}
          </a>
          <button
            onClick={copyToClipboard}
            className={styles['linkDisplay__button']}
          >
            {copyButtonTitle}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LinkDisplay;
