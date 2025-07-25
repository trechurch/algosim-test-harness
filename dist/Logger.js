export const failList = [];
export let testCount = 0;
export let successCount = 0;
export let failCount = 0;
export function log(entry) {
    console.log(entry.success
        ? `Test passed at line ${entry.line}: ${entry.expr}`
        : `Test failed at line ${entry.line}: ${entry.expr}\n  Expected: ${JSON.stringify(entry.expected)}\n  Actual: ${entry.result.toString()}`);
}
export function updateProgress(success) {
    testCount++;
    if (success)
        successCount++;
    else
        failCount++;
    console.log(`Progress: ${testCount} tests, ${successCount} passed, ${failCount} failed`);
}
export function resetProgress() {
    testCount = 0;
    successCount = 0;
    failCount = 0;
    failList.length = 0;
}
//--- End of Logger.ts ---  
// This file provides logging functionality for test results, including tracking the number of tests, successes, and failures.
// It also allows for resetting the progress and logging detailed information about each test case.
// The `failList` array is used to store failed test items for further analysis.
// The `log` function formats and outputs the results of each test, while `updateProgress` updates the counts and prints the current progress.
// The `resetProgress` function clears all counts and the fail list, allowing for a fresh start in testing.
