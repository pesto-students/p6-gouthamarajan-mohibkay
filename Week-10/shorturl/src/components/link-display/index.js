import { useState } from 'react';

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
    <section>
      <p>
        <a href={originalLink} target='blank'>
          {originalLink}
        </a>
        <a href={shortenedLink} target='blank'>
          {shortenedLink}
        </a>
        <button onClick={copyToClipboard}>{copyButtonTitle}</button>
      </p>
    </section>
  );
};

export default LinkDisplay;
