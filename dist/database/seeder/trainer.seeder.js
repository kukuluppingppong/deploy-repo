"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const app_module_1 = require("../../../src/app.module");
const media_entity_1 = require("../entities/media.entity");
const trainer_entity_1 = require("../entities/trainer.entity");
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
    const mediaForTrainer1 = await mediaRepository.save(mediaRepository.create({
        path: 'trainer_profile/trainer01.jpg',
        media_type: 'image',
    }));
    const mediaForTrainer2 = await mediaRepository.save(mediaRepository.create({
        path: 'trainer_profile/trainer02.jpg',
        media_type: 'image',
    }));
    const mediaForTrainer3 = await mediaRepository.save(mediaRepository.create({
        path: 'trainer_profile/trainer03.jpg',
        media_type: 'image',
    }));
    const trainer1 = trainerRepository.create({
        id: `kimtrainer`,
        password: `trainer1234`,
        phone_number: `010-6666-8888`,
        name: `김트레이너`,
        award: '동양근육자랑대회 준우승',
        career: '트레이너 전문 자격증 소유, OO헬스장 근무경력 2년',
        self_introduction: `안녕하세요. 여러분을 건강하게 관리해드리겠습니다!`,
        profile_image: mediaForTrainer1,
    });
    const trainer2 = trainerRepository.create({
        id: `leetrainer`,
        password: `tt1234!`,
        phone_number: `010-2222-1111`,
        name: `이지우`,
        award: '동양체육대회 최우승, 서울 피트니스 대회 2등',
        career: '헬스 트레이너 10년차',
        profile_image: mediaForTrainer2,
    });
    const trainer3 = trainerRepository.create({
        id: `parkpark`,
        password: `jmtygt`,
        phone_number: `010-2221-1112`,
        name: `박지성`,
        career: '영양사 자격증 취득, 트레이너 자격증 취득',
        self_introduction: `안녕하세요. 저는 영양사 자격증도 있습니다. 여러분의 식단을 보다 건강하게 관리해드릴 수 있습니다 ^^!`,
        profile_image: mediaForTrainer3,
    });
    seeds.push(trainer1, trainer2, trainer3);
    await trainerRepository.save(seeds);
    await appDataSource.destroy();
    common_1.Logger.log('트레이너 seeding을 종료합니다.');
    process.exit();
})();
//# sourceMappingURL=trainer.seeder.js.map