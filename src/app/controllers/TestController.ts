const Test = require("../models/Test");

class TestController {
	index = (req: any, res: any) => {
		return res.send("test");
	};

	indexs = async (req: any, res: any) => {
		let data = await Test.findById("6571391f7e50f2106b8f7e21");
		return res.json(data);
		console.log(data);
	};
}

module.exports = new TestController();
