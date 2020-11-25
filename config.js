const path = require('path');
module.exports = {
    // 进程数
    processes: 20,
    // 每个进程每隔requestInterval时间发送的请求数
    processRequests: 1,
    // 毫秒
    requestInterval: 1000,
    workerPath: path.resolve(__dirname, 'worker.js'),
}
