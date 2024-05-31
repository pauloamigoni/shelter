export default class GetPetByIdUseCaseInput {
    id: number

    constructor(data: Partial<GetPetByIdUseCaseInput>) {
        Object.assign(this, data);
    }
}
