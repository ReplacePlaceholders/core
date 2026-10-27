const replacePlaceholders = (message, params, pattern) => {
  return message.replace(pattern, (placeholder, name) => {
    return Object.hasOwn(params, name) ? String(params[name]) : placeholder;
  });
};

export default replacePlaceholders;
