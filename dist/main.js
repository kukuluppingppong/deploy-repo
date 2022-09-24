"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const expressBasicAuth = require("express-basic-auth");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./common/exceptions/http-exception.filter");
const app_module_1 = require("./app.module");
class Application {
    constructor(server) {
        this.server = server;
        this.PORT = process.env.PORT || '3000';
        this.MODE = process.env.NODE_ENV || 'local';
        this.corsOriginList = process.env.CORS_ORIGIN_LIST
            ? process.env.CORS_ORIGIN_LIST.split(',').map((origin) => origin.trim())
            : ['*'];
        this.SWAGGER_USER = process.env.SWAGGER_USER || 'admin';
        this.SWAGGER_PASSWORD = process.env.SWAGGER_PASSWORD || '1234';
    }
    setUpGlobalPrefix() {
        this.server.setGlobalPrefix('/api');
    }
    setUpOpenApiAuth() {
        this.server.use(['/docs', 'docs-json'], expressBasicAuth({
            challenge: true,
            users: {
                [this.SWAGGER_USER]: this.SWAGGER_PASSWORD,
            },
        }));
    }
    setUpOpenAPImidleware() {
        swagger_1.SwaggerModule.setup('docs', this.server, swagger_1.SwaggerModule.createDocument(this.server, new swagger_1.DocumentBuilder()
            .setTitle('el backend openAPI')
            .setDescription('EL 서버 API 문서')
            .setVersion('1.0')
            .addTag('el-backend')
            .addBearerAuth()
            .build()));
    }
    async setUpGlobalMiddleware() {
        this.server.enableCors({
            origin: this.corsOriginList,
            credentials: true,
        });
        this.setUpGlobalPrefix();
        this.setUpOpenApiAuth();
        this.setUpOpenAPImidleware();
        this.server.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }));
        this.server.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    }
    async bootstrap() {
        await this.setUpGlobalMiddleware();
        await this.server.listen(this.PORT);
    }
    startLog() {
        common_1.Logger.log(`✅ ${this.MODE} 모드로 서버-사이드 어플리케이션이 실행됩니다. `);
        if (this.MODE === 'development') {
            common_1.Logger.log(`✅ Server on http://localhost:${this.PORT}`);
        }
        else {
            common_1.Logger.log(`✅ Server on port ${this.PORT}...`);
        }
    }
    errorLog(error) {
        common_1.Logger.error(`🆘 Server error ${error}`, 'Bootstrap');
    }
}
async function init() {
    const server = await core_1.NestFactory.create(app_module_1.AppModule);
    const app = new Application(server);
    try {
        await app.bootstrap();
    }
    catch (err) {
        app.errorLog(err);
    }
    app.startLog();
}
init().catch((error) => {
    common_1.Logger.error(`🆘 예기치 못한 서버 에러 : ${error}`, 'Init');
});
//# sourceMappingURL=main.js.map