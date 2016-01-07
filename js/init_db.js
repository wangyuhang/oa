//打开或者创建数据库
var db = openDatabase('oaDB', '1.0', 'oaDatebase', 20 * 1024 * 1024);
db.transaction(function (tx) {
	var deletAttachment = 'DROP TABLE IF EXISTS `attachment`;'
	var deletDepartment = 'DROP TABLE IF EXISTS `department`;'
	var deleteNotice = 'DROP TABLE IF EXISTS `notice`;'
	var deleteTag = 'DROP TABLE IF EXISTS `tag`;'
	var deleteUser = 'DROP TABLE IF EXISTS `user`;'
					
	var createAttachment = 'CREATE TABLE `attachment` ('+
			  '`id` INTEGER PRIMARY KEY AUTOINCREMENT,'+
			  '`name` varchar(100) NOT NULL DEFAULT "",'+
			  '`link` varchar(100) NOT NULL DEFAULT "" ,'+
			  '`type` tinyint(3) NOT NULL DEFAULT 0'+
			');'
	var createDepartment = 'CREATE TABLE `department` ('+
			  '`id` INTEGER PRIMARY KEY AUTOINCREMENT,'+
			  '`name` varchar(10) NOT NULL DEFAULT "" '+
			');'
	var createNotice = 'CREATE TABLE `notice` ('+
			  '`id` INTEGER PRIMARY KEY AUTOINCREMENT,'+
			  '`title` varchar(50) NOT NULL DEFAULT "" ,'+
			  '`content` text NOT NULL ,'+
			  '`create_time` int(10) NOT NULL DEFAULT 0 ,'+
			  '`all_users` varchar(200) NOT NULL DEFAULT "",'+
			  '`reply_users` varchar(200) NOT NULL DEFAULT "" ,'+
			  '`user_id` int(10) NOT NULL DEFAULT 0 ,'+
			  '`attachments` varchar(50) NOT NULL DEFAULT ""'+ 
			');'
	var createTag = 'CREATE TABLE `tag` ('+
			  '`id` INTEGER PRIMARY KEY AUTOINCREMENT,'+
			  '`content` varchar(50) NOT NULL DEFAULT "" ,'+
			  '`to_user` int(10) NOT NULL DEFAULT 0 ,'+
			  '`from_user` int(10) NOT NULL DEFAULT 0 ,'+
			  '`status` tinyint(3) NOT NULL DEFAULT 0 '+
			');'
	var createUser = 'CREATE TABLE `user` ('+
			  '`id` INTEGER PRIMARY KEY AUTOINCREMENT,'+
			  '`username` varchar(50) NOT NULL DEFAULT "" ,'+
			  '`sex` tinyint(1) NOT NULL DEFAULT 0 ,'+
			  '`birthday` date DEFAULT NULL ,'+
			  '`name` varchar(20) NOT NULL DEFAULT "" ,'+
			  '`auth_key` varchar(32) NOT NULL DEFAULT "",'+
			  '`cellphone` varchar(20) NOT NULL DEFAULT "" ,'+
			  '`office` varchar(20) NOT NULL DEFAULT "" ,'+
			  '`short_phone` varchar(20) NOT NULL DEFAULT "" ,'+
			  '`email` varchar(200) NOT NULL DEFAULT "" ,'+
			  '`status` tinyint(1) NOT NULL DEFAULT 0 ,'+
			  '`department_id` int(10) NOT NULL ,'+
			  '`role_id` int(10) NOT NULL DEFAULT 1 ,'+
			  '`password` varchar(200) NOT NULL DEFAULT "" ,'+
			  '`nickname` varchar(50) NOT NULL DEFAULT "" ,'+
			  '`headimgurl` varchar(255) NOT NULL DEFAULT ""'+
			');'
	tx.executeSql(createAttachment);
	tx.executeSql(createDepartment);
	tx.executeSql(createNotice);
	tx.executeSql(createTag);
	tx.executeSql(createUser);
 });