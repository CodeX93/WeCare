const ProjectUser = require("../Models/ProjectUser");
const ProjectProduct = require("../Models/ProjectProduct");
const jwt = require("jsonwebtoken");

let signup = (req, res) => {
  const { Name, Email, Password, AccountNumber, Activestatus } = req.body;
  let newProjectUser = new ProjectUser({
    Name: Name,
    Email: Email,
    Password: Password,
    AccountNumber: AccountNumber,
    ActiveStatus: Activestatus,
  });
  newProjectUser
    .save()
    .then((user) => {
      res
        .status(200)
        .json({ Success: true, Message: "user added successfully" });
    })
    .catch((err) => {
      res
        .status(400)
        .send({ Success: false, Message: "adding new user failed", err });
    });
};

let login = async (req, res) => {
  let email = req.body.Email;
  let password = req.body.Password;
  let activeStatus = req.body.ActiveStatus;

  ProjectUser.findOne({ Email: email })
    .then((user) => {
      if (
        user &&
        user.Password === password &&
        user.ActiveStatus === activeStatus
      ) {
        let token = jwt.sign(
          {
            Email: user.email,
            _id: user._id,
          },
          process.env.json_secret_token,
          { expiresIn: "1h" }
        );

        res.status(200).json({
          Success: true,
          user,
          token,
          Message: "user logged in successfully",
        });
      } else {
        res.status(400).json({ Success: false, Message: "user login failed" });
      }
    })
    .catch((err) => {
      res.status(400).json({ Success: false, Message: "user login failed" });
    });
};

let uploadProject = async (req, res) => {
  let Title = req.body.ProjectTitle;
  let Description = req.body.ProjectDescription;
  let Email = req.body.UserEmail;
  let City = req.body.ProjectCity;
  let State = req.body.ProjectState;
  let Country = req.body.ProjectCountry;
  let file = req.file;
  let ProjectProductData = {
    Title,
    Description,
    Email,
    City,
    State,
    Country,
    file,
  };
  //console.log(ProjectProductData);
  let Product = new ProjectProduct({
    ...ProjectProductData,
  });
  Product.save()
    .then((product) => {
      res.status(201).send({ message: "Project  Saved", product });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error", err });
    });
};

let updateProjectProduct = (req, res) => {
  let { Title, Description, Email, City, State, Country } = req.body;

  let filter = { Title: Title };
  let update = {
    Description: Description,
    Email: Email,
    City: City,
    State: State,
    Country: Country,
  };

  ProjectProduct.updateOne(filter, update)
    .then((product) => {
      if (product.modifiedCount > 0) {
        res.status(200).json({
          Success: true,
          Message: "Succefully updated project product",
          product: product,
        });
      } else {
        res
          .status(400)
          .json({ Success: false, Message: "No such product exist in db" });
      }
    })
    .catch((err) => {
      res.status(400).json({
        Success: false,
        Message: "Could not update project product",
        err: err,
      });
    });
};

let deleteProjectProduct = (req, res) => {
  let { Title } = req.body;

  let filter = { Title: Title };

  ProjectUser.deleteOne(filter)
    .then((HousingScheme) => {
      if (HousingScheme.modifiedCount > 0) {
        res
          .status(200)
          .json({ Success: true, Message: "Succefully deleted project user" });
      } else {
        res
          .status(400)
          .json({
            Success: false,
            Message: "No such housing scheme exist in db",
          });
      }
    })
    .catch((err) => {
      res
        .status(400)
        .json({
          Success: false,
          Message: "Could not delete project user",
          err: err,
        });
    });
};

module.exports = {
  signup,
  login,
  uploadProject,
  updateProjectProduct,
  deleteProjectProduct,
};
