(function($){
	$(function(){
		init();
	});
	$(document).ready(function(){
		draw();
	});

	function init(){
		$('#add').off().on('click', function(e){
			e.preventDefault();

			var value;
			var data = {};
			var errorCount=0;
			$('#fieldset input').each(function(i, el){
				el = $(el);
				value = el.val() ;
				data[el.data('name')] = value;
				if(value === ''){
					errorCount++;
				}
			});

			if(errorCount){
				alert('please input field...');
				return;
			}
			$.ajax({
				type: 'POST',
				data: data,
				url: '/housekeepinglog/add',
				dataType: 'JSON',
				success: function(data){
					if(data.msg === ''){
						draw();
					} else{
						alert(data.msg);
					}
				},
				error: function(jqXHR, status, error){
					alert(error);
				}
			});
		});
	}


	function draw(){
		var html = '';
		$.getJSON('/housekeepinglog/list', function(data){
			$.each(data, function(i, v){
				html += '<tr data-id='+v._id+'>'
				+'<td>' + v.date + '</td>'
				+'<td>' + v.name + '</td>'
				+'<td>' + v.price + '</td>'
				+'<td><a class="delete" data-id='+v._id+'>Delete</a></td></tr>';
			});
			$('#list tbody').html(html).off()
			.on('click', 'tr', function(e){
				e.preventDefault();

				var index = data.map(function(item){
					return item._id;
				}).indexOf($(this).data('id'));
				var obj = data[index];
				$('#info span').each(function(i, el){
					el = $(el);
					el.text(obj[el.data('name')]);
				});
			}).on('click', 'td a.delete', function(e){
				e.stopPropagation();

				$.ajax({
					type: 'DELETE',
					data: data,
					url: '/housekeepinglog/delete/' + $(this).data('id'),
					dataType: 'JSON',
					success: function(data){
						if(data.msg === ''){
							draw();
						} else{
							alert(data.msg);
						}
					},
					error: function(jqXHR, status, error){
						alert(error);
					}
				});
			});
		});
	}
})(jQuery);