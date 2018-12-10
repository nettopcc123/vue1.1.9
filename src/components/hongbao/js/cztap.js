(function($){
 $.fn.czTap=function(options){
  var initialnum=0, 
      initialnumCompared=0,
      initialtime=0,
      startnum=0,
      czTapthis=$(this),
      defaluts={
      time:5,
      speed:2,
      multiple:2,
      loadingJudge:true,
      hrefland:'javascript:;',
      hrefregister:'javascript:;'
     },
     pillarchild=$('.pillar').find('span'),
     pillarchildHeight=pillarchild.height(),
     ops=$.extend({},defaluts,options),
     czTapFun = function(ops){
       var self = this,
           ops=ops;
       self.el = {
        loading : $('.loading'),
        oldFinger:$('.old-finger'),
        oldFingerQuan:$('.old-finger-quan'),
        oldHead:$('.old-head'),
        pillar:$('.pillar'),
        oldEye:$('.old-eye'),
        oldMouth:$('.old-mouth'),
        oldLeftArm:$('.old-leftArm'),
        oldRightArm:$('.old-rightArm'),
        oldLeftArmTwo:$('.old-leftArm-two'),
        oldRightArmTwo:$('.old-rightArm-two'),
        oldHellow:$('.old-hellow'),
        popOne:$('.popOne'),
        pop:$('.pop'),
        czActive:$('.czActive'),
        Turntable:$('.Turntable')
      }
      ops.loadingJudge ? self.loadingEvent() : delete self.loadingEvent;
      czTapthis.bind('touchstart',function(evt){  
          var clientX=evt.changedTouches[0].pageX,
              offsetY=evt.changedTouches[0].pageY;
              $('.oldfingerquan').addClass('cur').css({'left':clientX,'top':offsetY});
      })
      czTapthis.bind('touchend',function(evt){
                self.clickFun(ops);
              $('.oldfingerquan').removeClass('cur');
      })
     },
     czpro= czTapFun.prototype;
     czpro.loadingEvent=function(){
       var self = this;
       window.addEventListener("load",
       function() {
        self.el.loading.hide();
        self.el.czActive.show();
        self.cztapHtml(ops); 
      },
      false);  
     };
     czpro.clickFun=function(ops){
        initialnum++;
        startnum++; 
        var self = this,
            ops=ops,
            time=ops.time,
            multiple=ops.multiple,
            speed=ops.speed,
            pillarHeight=self.el.pillar.height(),
            pillarHeightSTime=pillarHeight/(time*speed),
            oldEye=self.el.oldEye,
            oldMouth=self.el.oldMouth,
            successtapfunJUdge=false,
            initializationFun=function(){
              startnum=0;
              initialnum = 0; 
              initialtime = 0;
              pillarchildHeight=0;
              oldEye.removeClass('cur');
              oldMouth.removeClass('cur');
            },
            successtapfun=function(){
            console.log('恭喜你');
            successtapfunJUdge=true;
            $('.oldfingerquan').remove();
            oldMouth.addClass('cur');
            self.el.oldLeftArm.addClass('none');
            self.el.oldRightArm.addClass('none');
            self.el.oldLeftArmTwo.removeClass('none');
            self.el.oldRightArmTwo.removeClass('none');
            !(oldEye.hasClass('cur')) && oldEye.addClass('cur');
            !(oldMouth.hasClass('cur')) && oldMouth.addClass('cur');
            clearInterval(czTapTimer);
            self.el.oldHellow.removeClass('cur');
            setTimeout(function(){
            self.el.pillar.addClass('cur');
            self.el.pop.removeClass('none');             
            },1000);        
            };
            self.el.oldHellow.removeClass('cur');      
        if(startnum==1 && !successtapfunJUdge){
          self.el.oldFinger.hide();
          self.el.oldFingerQuan.hide();
          self.el.oldHead.addClass('cur');
          !(self.el.pillar.hasClass('cur'))&&self.el.pillar.removeClass('cur');
          pillarchild.height(0); 
        var czTapTimer=setInterval(function(){
          initialtime++;
          var timecha=speed>initialnum && (initialnum-speed)/speed || initialnum/speed; 
          if(initialtime/multiple>time){
            clearInterval(czTapTimer);
            if(pillarchildHeight<pillarHeight){
              self.el.oldFinger.show();
              self.el.oldFingerQuan.show();
              self.el.oldHead.removeClass('cur');
              self.el.oldHellow.addClass('cur');
               initializationFun();
          }else{
            self.el.pop.removeClass('none');
          }
          }else if(pillarchildHeight>=pillarHeight){     
            successtapfun();
          }else{
            if(pillarchildHeight>=pillarHeight/2){
              oldEye.addClass('cur');            
            }else{
              oldEye.removeClass('cur');
              oldMouth.removeClass('cur');               
            }      
              pillarchildHeight=pillarchildHeight+timecha*pillarHeightSTime*speed;  
            if(pillarchildHeight < 0){
              pillarchildHeight =0;
            }else if(pillarchildHeight>pillarHeight){
              pillarchildHeight=pillarHeight
            }                   
              pillarchild.height(pillarchildHeight);               
        }
         initialnum=0;
        },1000/multiple)
        }else{
          setTimeout(function(){
               if(pillarchildHeight>=pillarHeight){
                  clearInterval(czTapTimer);
                 self.el.pop.hasClass('none') && successtapfun();  
               }          
          },200)        
          
        }
     };
      czpro.cztapHtml=function(ops){  
        var self = this;
        self.el.Turntable.bind('click',function(e){
         self.el.Turntable.addClass('cur');
         ops.success instanceof Function && ops.success();
        $('.popTwoCont-close').bind('click',function() {      
          $('.Turntable').removeClass('cur');
          $('.TurntableTwo').removeClass('czSize');
          self.el.pop.addClass('none');
          $('.popOne-cont').show();
          $('.popTwo-cont').hide();
        });
        setTimeout(function() {
          $('.TurntableTwo').addClass('czSize');
          setTimeout(function(){
          $('.popOne-cont').hide();
          $('.popTwo-cont').show();
          },500)
        }, 1000); 
      });
      }
   new czTapFun(ops);
 };
})(Zepto)
