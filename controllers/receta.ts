import { Request, Response } from "express";
import Receta from "../models/receta";

export const consultReceta = async (req: Request, res: Response) => {
  try {
    const receta = await Receta.findAll();
    res.status(200).json({
      receta,
    });
  } catch (error) {
    console.error(error);
  }
};

export const consultRecetaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const receta = await Receta.findByPk(id);

    res.status(200).json({
      receta,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createReceta = async (req: Request, res: Response) => {
  try {
    let { name, ingredients, description, userId } = req.body;
    const receta = await Receta.create({ name, ingredients, description, userId });
    res.status(200).json({
      msg: "Receta creada",
      receta,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateReceta = async (req: Request, res: Response) => {
  try {
    let { id, name, ingredients, description } = req.body;
    await Receta.update(
      { name, ingredients, description },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({
      msg: `la receta con el id ${id} ah sido actualizada`,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteReceta = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    await Receta.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      msg: "Receta eliminada correctamente",
    });
  } catch (error) {
    let resp = console.error(error);
    res.status(404).json({
      resp,
    });
  }
};
