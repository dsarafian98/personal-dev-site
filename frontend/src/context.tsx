import {createContext, useState} from 'react';

const [name, setName] = useState('hello world');

const getName = () => {
  return name;
};

const [profilePicSrc, setProfilePicSrc] = useState(undefined);

const getProfilePicSrc = () => {
  return profilePicSrc;
};

export const Context = createContext({
  name,
  setName,
  getName,
  profilePicSrc,
  setProfilePicSrc,
  getProfilePicSrc,
});
