function handleChange(e, type, setUsername, setEmail, setPassword) {
  switch (type) {
    case 'username': {
      setUsername(e.target.value);
      break;
    }
    case 'email': {
      setEmail(e.target.value);
      break;
    }
    case 'password': {
      setPassword(e.target.value);
      break;
    }
    default: {
      return null;
    }
  }
  return null;
}

export default handleChange;
