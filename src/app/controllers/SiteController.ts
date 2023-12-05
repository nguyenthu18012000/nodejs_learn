
class SiteController {
    index = (req: any, res: any) => {
        console.log("aljskfajkld")
        return res.send("home");
    }

    index1 = (req: any, res: any) => {
        console.log(req.params, req.query, req.body)
        return res.send("test home");
    }
}

module.exports = new SiteController;