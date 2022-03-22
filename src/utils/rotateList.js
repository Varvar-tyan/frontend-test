export const rotateList = (initialArray, albumsArray) => {
  let lastElement;

  if (albumsArray.length) {
    initialArray.shift();
    lastElement = albumsArray.shift();
  } else {
    lastElement = initialArray.shift();
  }

  return [...initialArray, lastElement];
};
