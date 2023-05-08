"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const session = require("express-session");
const passport = require("passport");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: ['http://localhost:5500', 'https://travgo.my.id'],
            credentials: true,
        },
    });
    app.set('trust proxy', 1);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(session({
        secret: 'super-secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 2 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(3000);
    console.log('this project running on environment: ' + process.env.NODE_ENV);
}
bootstrap();
//# sourceMappingURL=main.js.map