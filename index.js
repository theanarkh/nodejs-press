const childProcess = require('child_process');
const path = require('path');
const { processes } = require('./config');
function fork() {
  const worker = childProcess.fork(path.resolve(__dirname, 'client.js'));
  worker.on('exit', function(status) {
    status && fork();
  });
}
for (let i = 0; i < processes; i++) {
  fork();
}
