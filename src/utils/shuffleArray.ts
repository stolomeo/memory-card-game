const shuffleArray = (arr: {}[]) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

export default shuffleArray;
