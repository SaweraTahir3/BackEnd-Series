import express from "express"

const app = express();



app.get('/', (req, res) => {
    res.send('server is Runing')
})

app.get("/api/data", (req, res) => {
    const data = [{
        "id" : "1" ,
        "name": "sawera",
        "Course": "Backend ",
        "paid": "unpaid",
        "duration": "2 months",
    },
    {
         "id" : "1" ,
        "name": "Fatima Ali",
        "Course": " Sale Executive",
        "paid": "unpaid",
        "duration": "3 months"
    },
    ]
    res.send(data)
});


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is runing PORT ${port}`);

})

