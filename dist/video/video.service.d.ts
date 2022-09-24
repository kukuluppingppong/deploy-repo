import { MediaEntity } from '../database/entities/media.entity';
import { Repository } from 'typeorm';
import { CreateVideoDto } from './dto/createVideo.dto';
export declare class VideoService {
    private MediaRepository;
    constructor(MediaRepository: Repository<MediaEntity>);
    create(dto: CreateVideoDto): Promise<CreateVideoDto & MediaEntity>;
}
