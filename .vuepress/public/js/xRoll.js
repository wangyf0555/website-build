/*
 
    Author:  小鑫
    Date:    2019/4/19
    QQ:      857525554

 */
var xRoll=function(el,fn){xRoll.prototype.init(el,fn)};xRoll.prototype={init:function(_el,fn){_el.attr("data-state",false);this.start(_el,fn);$(window).on("scroll",function(){xRoll.prototype.start(_el,fn)})},start:function(_el,fn){var _this=this;$(_el).each(function(){var _self=$(this);var xRollTop=$(window).scrollTop();var isWindowHeiget=$(window).height();if(_self.data().state){return}if(xRollTop+isWindowHeiget>$(this).offset().top){fn();setTimeout(function(){_self.attr("data-state",true);_self.data().state=true})}})}};