export default class GetUserByIdUseCaseInput {
    id: number

    constructor(data: Partial<GetUserByIdUseCaseInput>) {
        Object.assign(this, data);
    }
}
