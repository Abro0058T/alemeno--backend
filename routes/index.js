const express = require("express");
const router = express.Router();
const coursesRoute=require("./courses.route.js")
const userRoute=require("./user.route.js")

const defaultRoutes = [
  {
    path: "/courses",
    route: coursesRoute,
  },
  {
    path:"/user",
    route:userRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
