(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[3],{43:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(3);t.a=function(e){var t=e.text,n=Object(a.useContext)(c.a).resetGame;return r.a.createElement("button",{onClick:n,className:"ResetButton button"},t)}},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=function(){var e=Object(a.useContext)(c.a).timer;return r.a.createElement("div",{className:"GameTimer"},r.a.createElement("label",null,"Time left: "),r.a.createElement("span",{className:"clock"+(e<=5?" blink":"")},"\xa000:",e.toString().padStart(2,"0")," "))},i=function(){var e=Object(a.useContext)(c.a),t=e.current,n=e.questions;return r.a.createElement("div",{className:"GameNumber"},r.a.createElement("label",null,"Question:"),r.a.createElement("span",null,t+1,"/",n.length))},u=function(){return r.a.createElement("div",{className:"GameHeader"},r.a.createElement(i,null),r.a.createElement(l,null))},s=n(6);var o=n(8);function m(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=n(4),b=function(e){var t=e.text,n=e.fifties,l=Object(a.useContext)(c.a),i=l.questions,u=l.current,s=l.fiftyFifty,o=l.dispatch;return r.a.createElement("button",{disabled:s===u&&-1!==n.indexOf(t),onClick:function(){var e=t===i[u].correct_answer;o({type:"ANSWER_QUESTION",payload:{correct:e,incorrect:!e}})},className:"AnswerButton"},t)},E=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}},d=n(43),v=function(){var e=Object(a.useContext)(c.a),t=e.questions,n=e.current,l=e.timer,i=e.dispatch,u=e.plusTen,s=e.timer_interval,o=Object(a.useState)(""),v=Object(f.a)(o,2),p=v[0],y=v[1],O=Object(a.useState)([]),j=Object(f.a)(O,2),N=j[0],h=j[1],S=Object(a.useState)([]),T=Object(f.a)(S,2),x=T[0],C=T[1],w=Object(a.useRef)();return Object(a.useEffect)((function(){return w.current=setInterval((function(){i({type:"TIMER_TICK"})}),1e3),function(){clearInterval(w.current)}}),[i]),Object(a.useEffect)((function(){n!==t.length&&function(e){var a=Math.floor(3*Math.random()),r=t[n],c=[].concat(m(r.incorrect_answers),[r.correct_answer]);E(c);var l=m(r.incorrect_answers);l.splice(a,1),C(l),y(r.question),h(c)}()}),[n,t,i]),Object(a.useEffect)((function(){0===l&&i({type:"ANSWER_QUESTION",payload:{unanswered:!0,timeElapsed:s-l}})}),[l,i,n,u,s]),r.a.createElement("div",{className:"GameMain"},r.a.createElement(d.a,{text:"Quit"}),r.a.createElement("div",{className:"Question"},p),r.a.createElement("div",{className:"Answers"},N.map((function(e,t){return r.a.createElement(b,{key:"a"+t,text:e,fifties:x})}))))},p=function(){var e=Object(a.useContext)(c.a),t=e.plusTen,n=e.dispatch;return r.a.createElement("button",{disabled:-1!==t,className:"PlusTenButton",onClick:function(){n({type:"TIMER_PLUSTEN"})}},"+10s")},y=function(){var e=Object(a.useContext)(c.a),t=e.fiftyFifty,n=e.dispatch;return r.a.createElement("button",{disabled:-1!==t,className:"FiftyFiftyButton",onClick:function(){n({type:"USE_FIFTYFIFTY"})}},"50/50")},O=function(){return r.a.createElement("div",{className:"LifeLines"},r.a.createElement(p,null),r.a.createElement("div",{className:"lifeline-title raised"},"Lifelines"),r.a.createElement(y,null))},j=n(5);t.default=function(){return r.a.createElement("div",{className:"Game"},r.a.createElement(u,null),r.a.createElement(j.a,null),r.a.createElement(v,null),r.a.createElement(j.a,null),r.a.createElement(O,null))}}}]);
//# sourceMappingURL=3.75d075d0.chunk.js.map