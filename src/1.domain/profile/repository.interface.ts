export interface IProfileRepository {
  create<T, U>(param: T): Promise<U>;

  find<T>(param: T): Promise<T>;

  update<T, U>(param: T): Promise<U>;

  delete<T>(param: T): Promise<void>;
}
