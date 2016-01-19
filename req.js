function getNewNoticeList(sinceId, userId) {
	mui.ajax('http://192.168.200.215/directory/frontend/web/index.php?r=site/receive-new-notice', {
		data:{
			since_id: sinceId,
			user_id: userId
		},
		dataType:'json',
		type:'get',
		timeout:10000,
		success:function(result){
			if(result.succ) {
				index = result.data.length;
				var html = '';
				mui.each(result.data, function() {
					html += '<li class="mui-table-view-cell" rel="'+this.id+'">'+
						            '<div class="mui-table">'+
						                '<div class="mui-table-cell mui-col-xs-10">'+
						                    '<h4 class="mui-ellipsis-2">'+this.title+'</h4>'+
						                    '<h5>发送人：'+this.name+'<span class="c-reply">'+this.reply+'</span></h5>'+
						                '</div>'+
						                '<div class="mui-table-cell mui-col-xs-2 mui-text-right">'+
						                    '<span class="mui-h5">'+this.time+'</span>'+
						                '</div>'+
						            '</div>'+
						        '</li>'
				});
			}else {
				mui.toast('获取数据失败');
			}
			$('#noticeList').html(html);
			mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
		},
		error:function(xhr,type,errorThrown){
			mui.toast('请检查网络');
			mui('#pullrefresh').pullRefresh().endPulldownToRefresh();						 
		}
	})
}