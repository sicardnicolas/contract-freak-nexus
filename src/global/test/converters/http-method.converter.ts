import {HttpMethod} from "../../../contract/domain/contract";

export function HttpMethodConverter(value: string): HttpMethod {
  if (Object.keys(HttpMethod).includes(value)) {
    return HttpMethod[value as keyof typeof HttpMethod];
  }

  throw new Error(`Unknown http method ${value}`)
}