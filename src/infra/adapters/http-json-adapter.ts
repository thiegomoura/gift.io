import { IController, IRequest } from "@/app/http";
import { Request, Response } from "express";

export default function adaptHttp(controller: IController) {
  return async (req: Request, res: Response) => {
    console.log("body: ", req.body);
    console.log("params: ", req.params);
    console.log("query: ", req.query);
    const request: IRequest = {
      params: req.params,
      query: req.query,
      headers: req.headers,
      body: req.body,
    };
    try {
      const { data, statusCode } = await controller.handler(request);
      res.status(statusCode).json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}
