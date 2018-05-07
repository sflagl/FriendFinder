var path = require('path')
function home (req, res) {
	var index = path.join(__dirname, '../public', 'home.html')

	res.sendFile(index)

}

module.exports = {
	home
}