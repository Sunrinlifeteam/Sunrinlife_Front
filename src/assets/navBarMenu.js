export default [
	{
		name : "홈",
		router : "/",
		img:"/src/assets/sidebar/home.svg",
	},
	{
		name : "공지",
		router : "/notice",
		img:"/src/assets/sidebar/notification.svg"
	},
	{
		name : "동아리",
		router : "/club",
		img:"/src/assets/sidebar/club.svg"
	},
	{
		name : "게시판",
		router : "/community/public",
		img:"/src/assets/sidebar/community.svg",
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
