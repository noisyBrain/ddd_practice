type BaseValueObjectProps = {
  [index: string]: any;
}

/*

  Implemented BaseValueObject following this article:
  https://khalilstemmler.com/articles/typescript-value-object/#Value-Object-class

*/
export abstract class BaseValueObject<T extends BaseValueObjectProps> {
  private readonly props: T;

  constructor(props: T) {
    this.props = props;
  }

  abstract isValid(props: T): boolean;

  equal(value: T): boolean {
    if (!(value instanceof BaseValueObject<T>)) return false;
    if (value === null || value === undefined) return false
    if (value.props === undefined) return false;

    return JSON.stringify(value) == JSON.stringify(this.props)
  }
}
