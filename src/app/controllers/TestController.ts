
class TestController {
    index = (req: any, res: any) => {
        return res.send("test");
    }

    indexs = (req: any, res: any) => {
        console.log(req.params, req.query, req.body)
        return res.send("test");
    }
}

module.exports = new TestController;