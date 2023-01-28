import express from "express"
const { Router } = express
import { requireAuthentication } from "../auth/require-auth.js"

const routerInfo = new Router()

routerInfo.get("/", requireAuthentication, (req, res) => {

    const args = process.argv.slice(2).join(" ")
    const platform = process.platform
    const version = process.version
    const memory = process.memoryUsage()
    const path = process.execPath
    const id = process.pid
    const projectFolder = process.cwd()

    res.render("info", { layout: "info", args, platform, version, memory, path, id, projectFolder })
})

export { routerInfo }