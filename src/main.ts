import {NestFactory} from "@nestjs/core";
import AppModule from "./app.module";
import * as csrfDefender from "csurf";
import * as helmetDefender from "helmet";

(async function startServer() {
    const app = await NestFactory.create(AppModule, { cors: true })
    app.use(csrfDefender())
    app.use(helmetDefender())

    await app.listen(3000)
})()