import { Request, Response } from "express";
import * as teaService from "../services/tea_service";

export const getTea = async (
  req: Request<object, object, object, { teaName: string | undefined }>,
  res: Response
) => {
  const { teaName: teaName } = req.query;
  const coffee = teaService.getTea(teaName);
  res.json(coffee).status(200);
};
