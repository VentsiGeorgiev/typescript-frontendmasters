/**
 * A class that represents a deferred operation.
 * @class
 */
export class Deferred<T = unknown> {
  // The promise object associated with the deferred operation.
  #_promise: Promise<T>
  /**
   * The function to call to resolve the deferred operation.
   */
  #_resolve!: Parameters<ConstructorParameters<typeof Promise<T>>[0]>[0]
  /**
   * The function to call to reject the deferred operation.
   */
  #_reject!: Parameters<ConstructorParameters<typeof Promise<T>>[0]>[1]
  /**
   * Creates a new instance of the Deferred class.
   * @constructor
   * @param description - A description of the deferred operation.
   */
  constructor(description?: unknown) {
    void description
    this.#_promise = new Promise<T>((resolve, reject) => {
      this.#_resolve = resolve
      this.#_reject = reject
    })
  }

  /**
   * Gets the promise object associated with the deferred operation.
   * @type {Promise}
   */
  get promise() {
    return this.#_promise
  }

  /**
   * Gets the function to call to resolve the deferred operation.
   * @type {function}
   */
  get resolve() {
    return this.#_resolve
  }

  /**
   * Gets the function to call to reject the deferred operation.
   * @type {function}
   */
  get reject() {
    return this.#_reject
  }
}
