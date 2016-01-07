获取公告列表
{
	index//当前最后一条的序列
	count//一次获取多少条公告
	id//当前用户id
}

{
	succ
	data: [
		{
			title//标题
			name//发送人
			id//公告id
			time//发送时间
			reply//未阅读的人数（未阅读人数/全部人数）
		}
	]
}

获取公告详情
{
	id//公告id
}

{
	succ
	title
	attachments: [
		{
			 name//附件名称
			 type//附件类型 0其他1图片2音频3视频
			 link//附件链接
		}
	]
	data: {
		title//文章标题
		create_time//创建时间
		content//正文
		reply//回复状况（未阅读人数/全部人数）
	}
	unreply[
		{
			 id//未阅读人id
		 	name//未阅读人姓名
		 }
	]
}

获取通讯录
{
	succ;
	data[
		{
			name:部门名;
			member[
				{
				     id//成员id；
				     user//成员名称;
				     first//姓名首字母
				}
			]
		}
	]
}

获取员工详细信息
{
	id
}

{
	succ;
	infor[
	    sex：性别
	    name:姓名
	    cellphone:长号
	    short:短号
	    email:邮箱
	    department:部门
	    headimg:头像
	    tag[
	    	  {
	    	  		tid://标签id
	    	  		tag:标签内容
	    	  		from:
	       }
	    ]
	]
}

登录
{
	username
	password
}

{
	succ;
	 data{
	     id:id
	     name:姓名
	     avatar:头像
	}
	 msg
}

添加标签
{
	from
	to
	content
}

{
	succ
	data {
		tid
	}
}
