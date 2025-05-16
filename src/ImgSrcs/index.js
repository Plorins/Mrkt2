// index.js in ImgSrcs folder
const importAll = (r) => {
  return r.keys().reduce((acc, key) => {
    // Extract just the filename without path or extension
    const name = key.replace('./', '').replace(/\.(png|jpe?g|webp)$/, '');
    acc[name] = r(key);
    return acc;
  }, {});
};

// Import all images from the current directory
const images = importAll(require.context('./', false, /\.(png|jpe?g|webp)$/));

export default images;
