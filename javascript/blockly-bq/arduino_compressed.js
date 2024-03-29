// Do not edit this file; automatically generated by build.py.
"use strict";

Blockly.Msg.DUPLICATE_BLOCK="Duplicate";Blockly.Msg.REMOVE_COMMENT="Remove Comment";Blockly.Msg.ADD_COMMENT="Add Comment";Blockly.Msg.EXTERNAL_INPUTS="External Inputs";Blockly.Msg.INLINE_INPUTS="Inline Inputs";Blockly.Msg.DELETE_BLOCK="Delete Block";Blockly.Msg.DELETE_X_BLOCKS="Delete %1 Blocks";Blockly.Msg.COLLAPSE_BLOCK="Collapse Block";Blockly.Msg.EXPAND_BLOCK="Expand Block";Blockly.Msg.DISABLE_BLOCK="Disable Block";Blockly.Msg.ENABLE_BLOCK="Enable Block";Blockly.Msg.HELP="Help";
Blockly.Msg.COLLAPSE_ALL="Collapse Blocks";Blockly.Msg.EXPAND_ALL="Expand Blocks";Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.RESERVED_WORDS_||(Blockly.Arduino.RESERVED_WORDS_="");Blockly.Arduino.RESERVED_WORDS_+="setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts";
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_MULTIPLICATIVE=3;Blockly.Arduino.ORDER_ADDITIVE=4;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_RELATIONAL=6;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;
Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.ORDER_NONE=99;var profile={arduino:{description:"Arduino standard-compatible board",digital:[["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],serial:9600},arduino_mega:{description:"Arduino Mega-compatible board"}};
profile["default"]=profile.arduino;Blockly.Arduino.init=function(){Blockly.Arduino.definitions_={};Blockly.Arduino.setups_={};Blockly.Variables&&(Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_))};
Blockly.Arduino.finish=function(a){a="  "+a.replace(/\n/g,"\n  ");a=a.replace(/\n\s+$/,"\n");a="void loop() \n{\n"+a+"\n}";var d=[],c=[],b=[],e=[],f;for(f in Blockly.Arduino.definitions_)b=Blockly.Arduino.definitions_[f],b.match(/^#include/)?d.push(b):0<=f.search("declare_var")?e.push(b):c.push(b);b=Blockly.Arduino.orderDefinitions(c);c=[];for(f in Blockly.Arduino.setups_)c.push(Blockly.Arduino.setups_[f]);a=(d.join("\n")+"\n\n/***   Global variables   ***/\n"+e.join("")+"\n\n/***   Function declaration   ***/\n"+
b[0]+"\nvoid setup() \n{\n  "+c.join("\n  ")+"\n}\n\n").replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a+"\n\n/***   Function definition   ***/\n"+b[1];a=a.replace(/&quot;/g,'"');a=a.replace(/&amp;quot;/g,'"');a=a.replace(/quot;/g,'"');a=a.replace(/&amp;/g,"&");a=a.replace(/amp;/g,"");a=a.replace(/&lt;/g,"<");a=a.replace(/lt;/g,"<");a=a.replace(/&gt;/g,">");return a=a.replace(/gt;/g,">")};
Blockly.Arduino.orderDefinitions=function(a){var d=[],c=[],b;for(b in a){var e=a[b].substring(0,a[b].search("\\)")+1);e.replace("\n","");""!==e&&(e+=";\n",d+=e,c+=a[b])}return[d,c]};Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Arduino.scrub_=function(a,d){if(null===d)return"";var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var b=a.getCommentText();b&&(c+=Blockly.Generator.prefixLines(b,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(b=a.inputList[e].connection.targetBlock())&&(b=Blockly.Generator.allNestedComments(b))&&(c+=Blockly.Generator.prefixLines(b,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=this.blockToCode(e);return c+d+
e};Blockly.Generator.prefixLines=function(a,d){return d+a.replace(/\n(.)/g,"\n"+d+"$1")};Blockly.Generator.allNestedComments=function(a){var d=[];a=a.getDescendants();for(var c=0;c<a.length;c++){var b=a[c].getCommentText();b&&d.push(b)}d.length&&d.push("");return d.join("\n")};