type BaseValueObjectProps = {
  [index: string]: any;
}

export abstract class BaseValueObject<T extends BaseValueObjectProps> {
  private readonly props: T;

  constructor(props: T) {
    this.props = props;
  }

  equal(value: T): boolean {
    if (!(value instanceof BaseValueObject<T>)) return false;
    return JSON.stringify(value) == JSON.stringify(this.props)
  }
}
