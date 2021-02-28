/**
 * Read-only token
 * See https://github.com/Borewit/strtok3 for more information
 */
export interface IGetToken<T> {

  /**
   * Length of encoded token in bytes
   */
  len: number;

  /**
   * Decode value from buffer at offset
   * @param array - Uint8Array to read the decoded value from
   * @param offset - Decode offset
   * @return decoded value
   */
  get(array: Uint8Array, offset: number): T;
}

export interface IToken<T> extends IGetToken<T> {
  /**
   * Encode value to buffer
   * @param array - Uint8Array to write the encoded value to
   * @param offset - Buffer write offset
   * @param value - Value to decode of type T
   * @return offset plus number of bytes written
   */
  put(array: Uint8Array, offset: number, value: T): number
}
