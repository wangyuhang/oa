//打开或者创建数据库
var db = openDatabase('oaDB', '1.0', 'oaDatebase', 20 * 1024 * 1024);
db.transaction(function (tx) {
	var deletAttachmentSQL = 'DROP TABLE IF EXISTS `attachment`;'
	var deletDepartmentSQL = 'DROP TABLE IF EXISTS `department`;'
	var deleteNoticeSQL = 'DROP TABLE IF EXISTS `notice`;'
	var deleteTagSQL = 'DROP TABLE IF EXISTS `tag`;'
	var deleteUserSQL = 'DROP TABLE IF EXISTS `user`;'
					
	var createAttachmentSQL = 'CREATE TABLE IF NOT EXISTS `attachment` ('+
			  '`id` INTEGER PRIMARY KEY,'+
			  '`name` varchar(100) NOT NULL DEFAULT "",'+
			  '`link` varchar(100) NOT NULL DEFAULT "" ,'+
			  '`type` int(3) NOT NULL DEFAULT 0'+
			');'

	var createDepartmentSQL = 'CREATE TABLE IF NOT EXISTS `department` ('+
			  '`id` INTEGER PRIMARY KEY,'+
			  '`name` varchar(10) NOT NULL DEFAULT "" '+
			');'
	var createNoticeSQL = 'CREATE TABLE IF NOT EXISTS `notice` ('+
			  '`id` INTEGER PRIMARY KEY,'+
			  '`title` varchar(50) NOT NULL DEFAULT "" ,'+
			  '`content` text NOT NULL ,'+
			  '`create_time` int(10) NOT NULL DEFAULT 0 ,'+
			  '`all_users` varchar(200) NOT NULL DEFAULT "",'+
			  '`reply_users` varchar(200) NOT NULL DEFAULT "" ,'+
			  '`user_id` int(10) NOT NULL DEFAULT 0 ,'+
			  '`attachments` varchar(50) NOT NULL DEFAULT ""'+ 
			');'
	var createTagSQL = 'CREATE TABLE IF NOT EXISTS `tag` ('+
			  '`id` INTEGER PRIMARY KEY,'+
			  '`content` varchar(50) NOT NULL DEFAULT "" ,'+
			  '`to_user` int(10) NOT NULL DEFAULT 0 ,'+
			  '`from_user` int(10) NOT NULL DEFAULT 0 ,'+
			  '`status` tinyint(3) NOT NULL DEFAULT 0 '+
			');'
	var createUserSQL = 'CREATE TABLE IF NOT EXISTS `user` ('+
			  '`id` INTEGER PRIMARY KEY,'+
			  '`username` varchar(50) NOT NULL DEFAULT "" ,'+
			  '`sex` tinyint(1) NOT NULL DEFAULT 0 ,'+
			  '`birthday` date DEFAULT NULL ,'+
			  '`name` varchar(20) NOT NULL DEFAULT "" ,'+
			  '`auth_key` varchar(32) NOT NULL DEFAULT "",'+
			  '`cellphone` varchar(20) NOT NULL DEFAULT "" ,'+
			  '`office` varchar(20) NOT NULL DEFAULT "" ,'+
			  '`short_phone` varchar(20) NOT NULL DEFAULT "" ,'+
			  '`email` varchar(200) NOT NULL DEFAULT "" ,'+
			  '`status` tinyint(1) NOT NULL DEFAULT 1 ,'+
			  '`department_id` int(10) NOT NULL ,'+
			  '`role_id` int(10) NOT NULL DEFAULT 1 ,'+
			  '`nickname` varchar(50) NOT NULL DEFAULT "" ,'+
			  '`headimgurl` varchar(255) NOT NULL DEFAULT ""'+
			');'
	
//	tx.executeSql(deletAttachmentSQL);
//	tx.executeSql(deletDepartmentSQL);
//	tx.executeSql(deleteNoticeSQL);
//	tx.executeSql(deleteTagSQL);
//	tx.executeSql(deleteUserSQL);
	
	tx.executeSql(createAttachmentSQL);
	tx.executeSql(createDepartmentSQL);
	tx.executeSql(createNoticeSQL);
	tx.executeSql(createTagSQL);
	tx.executeSql(createUserSQL);
	//tx.executeSql(createIndexAttachmentSql)
	//tx.executeSql('INSERT INTO department (name) values ("产品技术部")');
 });