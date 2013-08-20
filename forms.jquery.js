;(function( $, window, document, undefined ) {    
	var pluginName = 'forms',
			defaults = {};
	
	function Forms( element, options ) {
		this.el = element;
		this.$el = $(this.el);
		this.options = $.extend( {}, defaults, options) ;
		this.defaults = defaults;
		this.name = pluginName;
		this.init();
	}
	
	$.extend(Forms.prototype, {
		init: function(){
			if(this.options.toggle) this.toggle();
			if(this.options.radios) this.radios();
		},
		
		//toggling code
		toggle: function(){
			var toggle_definitions = this.options.toggle,
					len = toggle_definitions.length,
					i;
					
			for(i = 0; i < len; i++){
				this.setupToggles(toggle_definitions[i]);
			}
		},
		
		setupToggles: function(set){
			var $clickee_results = $(set.clickee);
			
			$clickee_results.each(function(i, clickee_result){
				var $clickee = $(clickee_result),
						$parent = $clickee.parents(set.clickee_parent),
						$target = $parent.nextAll(set.target).first();
						
				if(!$target.length) $target = $parent.find(set.target);
				
				$clickee.attr('checked', false);
				$target.addClass('forms-plugin').removeClass('show');
				
				$clickee.bind('click', {target:$target}, function(e){
					var $clicked = $(this),
							$target = e.data.target;

					if($clicked.is(':checked')){
						$target.addClass('show');
					}else{
						$target.removeClass('show');
					}					
				});
			});
		},
		
		//radios code
		radios: function(){
			var radio_definitions = this.options.radios,
					len = radio_definitions.length,
					i;
					
			for(i = 0; i < len; i++){
				this.setupRadios(radio_definitions[i]);
			}
		},
		
		setupRadios: function(set){
			var $clickee_results = $(set.clickee_parent);

			$clickee_results.each(function(i, clickee_result){
				var $parent = $(clickee_result),
						$target = $parent.nextAll(set.target).first();

				$target.addClass('forms-plugin').removeClass('show');
				
				$parent.delegate('input', 'click', function(e){
					var $clickee = $(e.currentTarget);
					
					if($clickee.val() === 'Yes'){
						$target.addClass('show');					
					}else{
						$target.removeClass('show');		
					}
	
				});				
			});
		}	
	});
	
	
	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, 
				new Forms( this, options ));
			}
		});
	}	
})( jQuery, window, document );