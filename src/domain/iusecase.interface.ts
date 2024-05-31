export interface IUseCase<Input, Output> {
  run(input: Input): Promise<Output>;
}

export default interface IPetCase<Input, Output> {
  run(input: Input): Promise<Output>;
}
