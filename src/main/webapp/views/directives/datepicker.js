actionApp.directive('datePicker', function(){
	return { 
		restrict: 'AC', 
		template: '<input class="form-control" data-toggle="datepicker">',
		link: function(scope, elem, attrs) {
			//3
			elem.datepicker({
				autoHide: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		} 
	}; 
});


