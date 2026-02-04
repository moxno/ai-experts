
const https = require('https');

const BASE_URL = 'https://ai-experts-co-il.web.app';
const ENDPOINTS = [
    '/he',
    '/he/experts',
    '/he/tasks',
    '/he/how-it-works'
];

const CONCURRENT_REQUESTS = 20; // Number of concurrent requests
const TOTAL_REQUESTS = 100;    // Total requests to make

async function makeRequest(path) {
    const start = Date.now();
    return new Promise((resolve) => {
        https.get(`${BASE_URL}${path}`, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                const duration = Date.now() - start;
                resolve({
                    path,
                    statusCode: res.statusCode,
                    duration,
                    size: data.length
                });
            });
        }).on('error', (e) => {
            resolve({
                path,
                error: e.message,
                duration: Date.now() - start
            });
        });
    });
}

async function runLoadTest() {
    console.log(`🚀 Starting Load Test on ${BASE_URL}`);
    console.log(`📊 Concurrency: ${CONCURRENT_REQUESTS}, Total: ${TOTAL_REQUESTS}`);
    console.log('--------------------------------------------------');

    const results = [];
    let completed = 0;

    const runBatch = async () => {
        const batch = [];
        for (let i = 0; i < CONCURRENT_REQUESTS && (completed + batch.length) < TOTAL_REQUESTS; i++) {
            const path = ENDPOINTS[Math.floor(Math.random() * ENDPOINTS.length)];
            batch.push(makeRequest(path));
        }

        const batchResults = await Promise.all(batch);
        results.push(...batchResults);
        completed += batchResults.length;

        process.stdout.write(`\rProgress: ${completed}/${TOTAL_REQUESTS} requests completed...`);

        if (completed < TOTAL_REQUESTS) {
            await runBatch();
        }
    };

    const startTime = Date.now();
    await runBatch();
    const totalTime = Date.now() - startTime;

    console.log('\n--------------------------------------------------');
    console.log(`✅ Test Complete in ${Math.round(totalTime / 1000)}s`);

    const successful = results.filter(r => r.statusCode === 200);
    const failed = results.filter(r => !r.statusCode || r.statusCode !== 200);

    const avgDuration = successful.reduce((acc, r) => acc + r.duration, 0) / successful.length;
    const maxDuration = Math.max(...results.map(r => r.duration));
    const minDuration = Math.min(...results.map(r => r.duration));

    console.log(`📈 Success Rate: ${successful.length}/${TOTAL_REQUESTS}`);
    console.log(`⏱️ Average Response Time: ${Math.round(avgDuration)}ms`);
    console.log(`🚀 Min/Max Response Time: ${minDuration}ms / ${maxDuration}ms`);

    if (failed.length > 0) {
        console.log(`❌ Failures: ${failed.length}`);
        failed.slice(0, 5).forEach(f => console.log(`   - ${f.path}: ${f.error || f.statusCode}`));
    }
}

runLoadTest();
