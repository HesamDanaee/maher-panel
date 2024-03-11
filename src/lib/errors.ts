class NetworkErr extends Error {
  name: string;
  message: string;
  url: string;
  status: number;
  ok: boolean;

  constructor(
    name: string,
    message: string,
    url: string,
    status: number,
    ok: boolean,
  ) {
    super();

    this.name = name;
    this.message = message;
    this.url = url;
    this.status = status;
    this.ok = ok;
  }

  toString() {
    return `NetworkErr: status: ${this.status}, message: ${this.message}, url:${this.url}`;
  }
}

export { NetworkErr };
