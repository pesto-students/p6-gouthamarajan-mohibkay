import axios from 'axios';
import styles from './link-input.module.css';

const LinkInput = ({ setShortLinkData }) => {
  const shortenLink = async (inputValue) => {
    try {
      const { data } = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      console.log(data);
      const { result } = data;
      setShortLinkData(result);
    } catch (error) {
      alert(error);
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
      <form onSubmit={handleSubmit} className={styles['linkInput__form']}>
        <input
          type='url'
          placeholder='Shorten a link here...'
          className={styles['linkInput__textField']}
        />
        <button type='submit'>Shorten It!</button>
      </form>
    </section>
  );
};

export default LinkInput;
