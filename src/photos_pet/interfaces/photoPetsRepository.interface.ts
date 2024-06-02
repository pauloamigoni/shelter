import { PhotosEntity } from './photoPets.entity';

export default interface IPhotosPetRepository {
    createPhotoPets(photos: Partial<PhotosEntity>): Promise<PhotosEntity>;
    getPhotoPetsById(id: number): Promise<PhotosEntity | null>;
    getAllPhotoPets(): Promise<PhotosEntity[]>;
}
