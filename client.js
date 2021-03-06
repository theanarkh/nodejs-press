const { processRequests, requestInterval, workerPath } = require('./config');
const request = require(workerPath);
let nextStart; 
function worker() {
  const start = Date.now();
  for (let i = 0; i < processRequests; i++) {
    request(); 
  }
  const detal = Date.now() - start;
  nextStart = requestInterval - detal;
  next();
}
worker();
next();
function next() {
   setTimeout(() => {
      worker(); 
   }, nextStart);
}
