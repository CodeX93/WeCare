import express, { json } from "express";
import category from "../models/categories_model.js";
const adminRouter = express.Router();
import inventory from "../models/inventory_model.js";
import order from "../models/order_model.js";
import type from "../models/types_models.js";

adminRouter.get("/getingredientdata", (req, res) => {
  inventory
    .find()
    .then((ingredients) => res.json(ingredients))
    .catch(() => {
      console.log("error occured");
    });
});

adminRouter.get("/getorderdata", (req, res) => {
  order
    .find()
    .then((orders) => {
      res.json(orders);
    })
    .catch(() => {
      console.log("error occured");
    });
});

/* adminRouter.post("/postingredientdata", (req, res) => {
  console.log("In post ");
  const { type, category, quantity } = req.body;
  IngredientsData.ingredients.push({
    IngredientId: IngredientsData.ingredients.length,
    Type: type,
    Category: category,
    quantity: quantity,
  });
}); */

adminRouter.post("/postingredientdata", (req, res) => {
  //const ItemId = Number(req.body.ItemId);
  const Type = req.body.Type;
  const Product = req.body.Product;
  const Quantity = Number(req.body.Quantity);

  const newInventory = new inventory({
    Type,
    Product,
    Quantity,
  });

  newInventory
    .save()
    .then(() => res.json("Inventory added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

adminRouter.get("/getInventory", (req, res) => {
  inventory
    .find()
    .then((ingredients) => {
      res.json(ingredients);
    })
    .catch((err) => {
      res.json("Error has occured while fetching ingredients");
    });
});

adminRouter.get("/getCategory", (req, res) => {
  category
    .find()
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      console.log("Error while getting categories");
    });
});

adminRouter.get("/getType", (req, res) => {
  type
    .find()
    .then((types) => {
      res.json(types);
    })
    .catch((err) => {
      console.log("Error while getting types");
    });
});

adminRouter.post("/addCategory", (req, res) => {
  const category = new category("Ice Cream");
  category
    .save()
    .then(() => {
      console.log("saved");
    })
    .catch((err) => {
      console.log("Error");
    });
});

adminRouter.post("/addType", (req, res) => {
  const type = new type("Drink");
  type
    .save()
    .then(() => {
      console.log("saved type");
    })
    .catch((err) => {
      console.log("Error in type");
    });
});

export default adminRouter;
