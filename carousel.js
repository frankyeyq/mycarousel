/*
 *  jQuery Carousel v1.0.0
 *
 *  Copyright (c) 2016 Frank
 *  http://iwerechild.com/
 *
 *  Licensed under MIT
 *
 */
;(function($,window,document,undefined){
	var defaults = {
		id : 'carousel',
		autoPlay : false,
		pagination : false,
		navigation : false
	}
	var Carousel = function(options){
		this.init(options);
	}
	var left = 0;
	Carousel.prototype = {
		init : function(options){
			this.opts = $.extend({},defaults,options);
			// this.renderDom();
			if(this.opts.autoPlay != false){
					this.autoPlay();
				}
			this.navigation();
		},


		autoPlay : function(){
			var me = this;
			var interval = 3000;
			console.log(typeof this.opts.autoPlay == 'number');
			if(typeof this.opts.autoPlay == 'number' ){
				interval = this.opts.autoPlay;
			}
			var timer = setInterval(function(){
				me.left()
			},interval);
		},

		left : function(){
			var len = $('#'+this.opts.id+' ul li').length;
			if(left <= -500*(len-1)){
				left = 0;
				$('#'+this.opts.id+' ul').css('transition','left 0s');
				$('#'+this.opts.id+' ul').css('left',0)
			}else{
				left-=500;
				$('#'+this.opts.id+' ul').css('transition','left 0.5s');
				$('#'+this.opts.id+' ul').css('left',(left)+'px')
			}
		},
		pagiNation : function(){
			// var html = "<div class='pa'"
		},
		navigation : function(){
			var me = this;
			var html = "<div class='navigation'><ul></ul></div>"
			var len = $('#'+this.opts.id+' ul li').length;
			$('#'+this.opts.id).append(html);
			for(var i = 0;i < len; i++){
				var li = "<li></li>";
				$('.navigation ul').append(li);
			}
			$(document).on('click','.navigation ul li',function(){
				var index = $(this).index();
				left = (1-index) * 500;
				me.left();
				console.log($(this).index());
				$('.navigation ul li').removeClass('active');
				$(this).addClass('active');
			});
		}	

	}
	
	$.fn.carousel = function(options){
		var carousel = new Carousel(options);
		return this.each(function(){});
	}
})(jQuery,window,document);