//获取修改的信息
function getModifyDate() {
	var modifySinceId = plus.storage.getItem('modifySinceId');
	console.log('modifyId'+modifySinceId)
	modifySinceId = modifySinceId == null? 0:modifySinceId;
	mui.ajax('http://192.168.200.215/directory/frontend/web/index.php?r=site/get-updates', {
		data:{
			since_id: modifySinceId
		},
		dataType:'json',
		type:'get',
		timeout:10000,
		success:function(result){
			if(result.succ) {
				if(result.data != '') {
					plus.storage.setItem('modifySinceId',result.data[0].sinceId.toString());
					db.transaction(function (tx) {
						mui.each(result.data, function() {
							var updateSQL = '';
							if(this.info == 'delete'){
								console.log('delete from '+this.type+' where id = '+this.modifyId)
								updateSQL = 'delete from '+this.type+' where id = '+this.modifyId;	
							}else {
								console.log('update or ignore '+this.type+' set '+this.info+' where id = '+this.modifyId)
								var updateSQL = 'update or ignore '+this.type+' set '+this.info+' where id = '+this.modifyId;	
							}
							tx.executeSql(updateSQL, [], function() {})
						})
					}, function() {console.log('获取修改数据事务执行失败')}, function() {
					})
				}else {
					
				}
			
			}else {
				mui.toast('获取数据失败');
			}
		},
		error:function(xhr,type,errorThrown){
			mui.toast('请检查网络');					 
		}
	})
}