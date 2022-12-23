import { useRef, useEffect } from 'react';
import axios from 'axios';
import styles from './link-input.module.css';

const LinkInput = ({ setShortLinkData, setIsLoading }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const shortenLink = async (inputValue) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      console.log(data);
      const { result } = data;
      setShortLinkData(result);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;

    if (inputValue) {
      shortenLink(inputValue);
    } else {
      alert('URL can not be blank');
    }
  };

  return (
    <section className={styles['linkInput__container']}>
      <div className={styles['circle']}></div>
      <form onSubmit={handleSubmit} className={styles['linkInput__form']}>
        <input
          type='url'
          placeholder='Shorten a link here...'
          className={styles['linkInput__textField']}
          ref={inputRef}
        />
        <button type='submit' className={styles['linkInput__button']}>
          Shorten It!
        </button>
      </form>
    </section>
  );
};

export default LinkInput;
