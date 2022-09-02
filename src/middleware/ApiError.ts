class ApiError extends Error {
  private _code: number;
  private _safe: boolean;
  private _message: string;

  constructor(message: string, code: number, safe = false) {
    super(message);
    this._message = message;
    this._code = code;
    this._safe = safe;
  }

  get message() {
    return this._safe ? this._message : 'An unknown error occurred.';
  }

  get code() {
    return this._code;
  }

  get safe() {
    return this._safe;
  }
}

export default ApiError;
