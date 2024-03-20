import Papa from 'papaparse';

async function loader(csvData) {
  return new Promise((resolve, reject) => {
    Papa.parse(csvData, {
      download: true,
      dynamicTyping: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
}

export default loader;
