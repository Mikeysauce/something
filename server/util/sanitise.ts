const sanitise = (data) => {
  if (Array.isArray(data)) {
    return data.reduce((acc, item) => {
      const { password, ...sanitisedData } = item;
      acc.push(sanitisedData);
      return acc;
    }, []);
  }

  const { password, ...sanitisedData } = data;
  return sanitisedData;
};

export default sanitise;
