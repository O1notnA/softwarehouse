const express = require('express');
const positionRouter = require("./routes/position_route")
const employeeRouter = require("./routes/employee_route")
const userRouter = require("./routes/user_router")


const app = express();

app.use(express.json());

app.use("/positions", positionRouter);
app.use("/employees", employeeRouter);
app.use("/user", userRouter);


app.listen(8000, ()=>{
    console.log("aplicação iniciada");
});