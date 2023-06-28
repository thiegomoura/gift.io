export interface IRequest {
  params: any;
  query: any;
  headers: any;
  body: any;
}

export interface IResponse {
  statusCode: number;
  data?: any;
}

export interface IController {
  handler(req: IRequest): Promise<IResponse>;
}
