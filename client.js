const { processRequests, requestInterval, workerPath } = require('./config');
const request = require(workerPath);
function worker() {
  for (let i = 0; i < processRequests; i++) {
    request(); 
  }
}
worker();
setInterval(() => {
  worker(); 
}, requestInterval);
