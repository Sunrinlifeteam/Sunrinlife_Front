import home from "/src/assets/sidebar/home.svg"
import notice from "/src/assets/sidebar/notification.svg"
import club from "/src/assets/sidebar/club.svg"
import community from "/src/assets/sidebar/community.svg"

export default [
	{
		name : "홈",
		router : "/",
		img:home,
	},
	{
		name : "공지",
		router : "/notice",
		img:notice
	},
	{
		name : "동아리",
		router : "/club",
		img:club
	},
	{
		name : "게시판",
		router : "/community/public",
		img:community,
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
