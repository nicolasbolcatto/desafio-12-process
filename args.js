import parseArgs from "yargs/yargs"

const yargs = parseArgs(process.argv.slice(2))

const {PORT, _ } = yargs
    .alias({
        p: "PORT"
    })
    .default({
        PORT: 8080
    }).argv


export default PORT