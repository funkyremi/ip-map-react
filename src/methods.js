import fetch from "node-fetch";

export const getCurrentIp = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.ipify.org?format=json`)
      .then(res => res.json())
      .then(res => {
        resolve(res);
      })
      .catch(reject);
  });
};

export const getIpData = (ip, width, height) => {
  return new Promise((resolve, reject) => {
    fetch(`https://ipapi.co/${ip}/json/`)
      .then(res => res.json())
      .then(res => {
        res.mapUrl = `https://static-maps.yandex.ru/1.x/?lang=en-US&ll=${
          res.longitude
        },${res.latitude}&z=10&l=map&size=${width},${height}`;
        resolve(res);
      })
      .catch(reject);
  });
};
