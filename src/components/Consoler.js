export const LOG_DIVIDER = "====================================================="

export const callConsole = (view, logItem) => {
    console.log(LOG_DIVIDER)
    console.log(`View name: ${view}`)
    console.log(logItem)
}