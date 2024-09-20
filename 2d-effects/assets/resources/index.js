System.register("chunks:///resources.js",["./Enum-5d1c280f.js","cc"],(function(){var t,i,e,n,o,a,r,s,u,c,p,l,f,y;return{setters:[function(r){t=r.E,i=r._,e=r.a,n=r.b,o=r.c,a=r.G},function(t){r=t.cclegacy,s=t._decorator,u=t.Enum,c=t.CCInteger,p=t.CCFloat,l=t.tween,f=t.Component,y=t.v3}],execute:function(){var m,d,b,h,_,g,v,F,w,z,C,E,N;r._RF.push({},"a22dfdr/adJXaSZUVhs8+U8","EasingFunctionPosition",void 0);var A=s.ccclass,P=s.property;u(t);m=A("EasingFunctionPosition"),d=P({type:t,displayName:"类型"}),b=P({type:c,displayName:"重复展示时间间隔"}),h=P({type:p,displayName:"缓动时间"}),_=P({displayName:"初始位置"}),g=P({displayName:"偏移位置"}),m((w=i((F=function(t){function i(){for(var i,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return i=t.call.apply(t,[this].concat(a))||this,n(i,"easingFunctionType",w,o(i)),n(i,"delay_time",z,o(i)),n(i,"ani_time",C,o(i)),n(i,"start_position",E,o(i)),n(i,"offset_position",N,o(i)),i}e(i,t);var r=i.prototype;return r.start=function(){this.playAni()},r.playAni=function(){var t=this;this.node.setPosition(this.start_position),l(this.node).by(this.ani_time,{position:this.offset_position},{easing:a[this.easingFunctionType]}).start(),this.scheduleOnce((function(){t.playAni()}),this.delay_time)},r.update=function(t){},i}(f)).prototype,"easingFunctionType",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return t.Linear}}),z=i(F.prototype,"delay_time",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),C=i(F.prototype,"ani_time",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),E=i(F.prototype,"start_position",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return y(-370,0,0)}}),N=i(F.prototype,"offset_position",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return y(370,0,0)}}),v=F));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///resources.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});