import {createContext, useState} from 'react';

const [name, setName] = useState('hello world');
const getName = () => {
  return name;
};

export const Context = createContext({
  name,
  setName,
  getName,
});
