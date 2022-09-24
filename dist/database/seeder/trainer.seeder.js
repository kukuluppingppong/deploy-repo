"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const app_module_1 = require("../../../src/app.module");
const media_entity_1 = require("../entities/media.entity");
const trainer_entity_1 = require("../entities/trainer.entity");
async function saveMedia(repository) {
    return await repository.save(repository.create({
        path: 'trainer_profile/trainer.jpg',
        media_type: 'image',
    }));
}
(async () => {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const appDataSource = new typeorm_1.DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'el',
        entities: ['**/*.entity{.ts,.js}'],
    });
    await appDataSource.initialize();
    await appDataSource.synchronize();
    const trainerRepository = appDataSource.getRepository(trainer_entity_1.TrainerEntity);
    const mediaRepository = appDataSource.getRepository(media_entity_1.MediaEntity);
    const seeds = [];
    for (let i = 1; i < 10; i++) {
        const media = await saveMedia(mediaRepository);
        const trainer = trainerRepository.create({
            id: `test${i}`,
            password: `test${i}`,
            phone_number: `010-${String(i).repeat(4)}-${String(i).repeat(4)}`,
            name: `테스트트레이너${i}`,
            award: '수상 없음',
            career: '경력 없음',
            self_introduction: `잘부탁드립니다. 테스트 트레이너 ${i}번 입니다.`,
            profile_image: media,
        });
        seeds.push(trainer);
    }
    await trainerRepository.save(seeds);
    await appDataSource.destroy();
    common_1.Logger.log('트레이너 seeding을 종료합니다.');
    process.exit();
})();
//# sourceMappingURL=trainer.seeder.js.map