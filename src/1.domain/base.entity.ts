import { DiscardedEntityError } from './errors/discarded.entity.error';

export abstract class BaseEntity {
  private _entityId: string;
  private _entityVersion: string;
  private _discarded: boolean;
  private _instanceId: number;

  private _instanceIdGenerator: number;

  constructor(entityId: string, entityVersion: string) {
    this._entityId = entityId;
    this._entityVersion = entityVersion;
    this._discarded = false;
    this._instanceId = this._instanceIdGenerator++;
  }

  private _incrementVersion(): void {
    this._entityVersion += 1;
  }

  private _checkNotDiscarded() {
    if (this._discarded)
      throw new DiscardedEntityError('TODO: Add error message!');
  }

  get instanceId(): number {
    return this._instanceId;
  }

  get entityId(): string {
    this._checkNotDiscarded();
    return this._entityId;
  }

  get entityVersion(): string {
    this._checkNotDiscarded();
    return this._entityVersion;
  }

  get isDiscarded(): boolean {
    return this._discarded;
  }
}
