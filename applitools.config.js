module.exports = {
    concurrency: 1,
    browser: [
        {width: 1200, height: 800, name: 'chrome'},
        {width: 1080, height: 640, name: 'firefox'},
        {width: 1200, height: 800, name: 'edge'},
        {width: 1200, height: 800, name: 'safari'},
        {deviceName: 'iPhone X', screenOrientation: 'portrait'}
    ],
    batchName: 'Testing Demo'
}
