import React, { useState } from 'react';
import axios from 'axios';

const Translate = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('en'); // Default is English
  const [toLanguage, setToLanguage] = useState('id'); // Default is Indonesian

  const translateText = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('source_language', fromLanguage);
    encodedParams.set('target_language', toLanguage);
    encodedParams.set('text', inputText);

    const translationOptions = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'c7bff3fd00msh5df8a237f307fabp164f80jsn09f702401ee8',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(translationOptions);
      setTranslatedText(response.data.translation);
    } catch (error) {
      console.error(error);
      setTranslatedText('Error translating text.');
    }
  };

  return (
    <div>
      <label>
        Input Text:
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </label>

      <label>
        Translate From:
        <select
          value={fromLanguage}
          onChange={(e) => setFromLanguage(e.target.value)}
        >
          <option value="en">English</option>
          {/* Add other language options as needed */}
        </select>
      </label>

      <label>
        Translate To:
        <select
          value={toLanguage}
          onChange={(e) => setToLanguage(e.target.value)}
        >
          <option value="id">Indonesian</option>
          {/* Add other language options as needed */}
        </select>
      </label>

      <button onClick={translateText}>Translate</button>

      <div>
        <label>
          Translated Text:
          <textarea value={translatedText} readOnly />
        </label>
      </div>
    </div>
  );
};

export default Translate;
