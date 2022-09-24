import { CreateVideoDto } from './dto/createVideo.dto';
import { VideoService } from './video.service';
export declare class VideoController {
    private videoService;
    constructor(videoService: VideoService);
    create(dto: CreateVideoDto): Promise<CreateVideoDto & import("../database/entities/media.entity").MediaEntity>;
}
