import { Router } from "express";
import { artWorkSchema } from "../schemas/artworks.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";

const artworksRoutes = Router();

artworksRoutes.post("/", schemaValidation(artWorkSchema));

export default artworksRoutes;