export default [
	{
		name : "홈",
		router : "/",
		img:require("@/assets/sidebar/home.svg"),
	},
	{
		name : "공지",
		router : "/notice",
		img:require("@/assets/sidebar/notification.svg")
	},
	{
		name : "동아리",
		router : "/club",
		img:require("@/assets/sidebar/club.svg")
	},
	{
		name : "게시판",
		router : "/community/public",
		img:require("@/assets/sidebar/community.svg"),
		option:[
			{
				name : "일반",
				path: "/community/public"
			},
			{
				name : "익명",
				path: "/community/anonymous"
			},
		]
	},
];
