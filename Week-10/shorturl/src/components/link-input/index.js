import React from 'react';
import axios from 'axios';

const LinkInput = ({ setShortLinkData }) => {
  const shortenLink = async (inputValue) => {
    const { data } = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${inputValue}`
    );
    console.log(data);
    const { result } = data;
    setShortLinkData(result);
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
    <section>
      <form onSubmit={handleSubmit}>
        <input type='url' placeholder='Shorten a link here...' />
        <button type='submit'>Shorten It!</button>
      </form>
    </section>
  );
};

export default LinkInput;
