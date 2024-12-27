const express = require('express');
const positionRouter = require("./routes/position_route")
const employeeRouter = require("./routes/employee_route")
const app = express();


app.use("/positions", positionRouter)
app.use("/employees", employeeRouter)
app.listen(8000, ()=>{
    console.log("aplicação iniciada");
});