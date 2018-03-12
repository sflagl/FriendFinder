
// I am creating an array [] of objects {} for the possible matches for the person looking for a friend

var friendMatch = [
	{
		"name":"Ahmed",
		"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
		"scores":[
				5,
				1,
				4,
				4,
				5,
				1,
				2,
				5,
				4,
				1
			]
	},
	{
		"name":"Samantha",
		"photo":"https://www.pexels.com/search/girl/",
		"scores":[
				2,
				1,
				3,
				1,
				2,
				1,
				5,
				3,
				2,
				1
			]
	},

]


module.exports = friendMatch; // This exports the array [] only. So if there were other pieces of code here it wouldn't be visible to other files in your app
