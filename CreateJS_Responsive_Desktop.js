(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CreateJS_Responsive_Desktop_atlas_1", frames: [[0,0,1920,960],[0,962,400,400],[0,1364,400,400],[402,962,400,400],[402,1364,400,400],[804,962,400,400],[804,1364,400,400],[1206,962,400,400],[1206,1364,400,400]]},
		{name:"CreateJS_Responsive_Desktop_atlas_2", frames: [[0,0,1920,960],[0,962,1920,960]]},
		{name:"CreateJS_Responsive_Desktop_atlas_3", frames: [[0,0,1920,960],[0,962,1920,960]]},
		{name:"CreateJS_Responsive_Desktop_atlas_4", frames: [[0,0,1920,960],[0,962,1920,960]]},
		{name:"CreateJS_Responsive_Desktop_atlas_5", frames: [[0,0,1920,960],[0,962,1920,960]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg_basic = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_culture = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_elearning = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_gaming = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_gnosis = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_homosapiens = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_softwaredev = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_visualdesign = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_webdesign = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.elearningMRD2badgeoriginal = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gamingMRD2badgeoriginal = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gnosisMRD2badgeoriginal = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.homosapiensMRD2badgeoriginal = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logoscultureMRD2badgeoriginal = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.visualdesignMRD2badgeoriginal = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.webdesignMRD2badgeoriginal = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.webdevMRD2badgeoriginal = function() {
	this.initialize(ss["CreateJS_Responsive_Desktop_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.webdesign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.webdesignMRD2badgeoriginal();
	this.instance.setTransform(-149,-149,0.7442,0.7442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.webdesign, new cjs.Rectangle(-149,-149,297.7,297.7), null);


(lib.visualdesign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.visualdesignMRD2badgeoriginal();
	this.instance.setTransform(-146,-146,0.7278,0.7278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.visualdesign, new cjs.Rectangle(-146,-146,291.1,291.1), null);


(lib.softwaredev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.webdevMRD2badgeoriginal();
	this.instance.setTransform(-150,-150,0.7482,0.7482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.softwaredev, new cjs.Rectangle(-150,-150,299.3,299.3), null);


(lib.homosapiens = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.homosapiensMRD2badgeoriginal();
	this.instance.setTransform(-150,-150,0.7482,0.7482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.homosapiens, new cjs.Rectangle(-150,-150,299.3,299.3), null);


(lib.gnosis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.gnosisMRD2badgeoriginal();
	this.instance.setTransform(-149,-149,0.7442,0.7442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gnosis, new cjs.Rectangle(-149,-149,297.7,297.7), null);


(lib.gaming = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.gamingMRD2badgeoriginal();
	this.instance.setTransform(-150,-150,0.7522,0.7522);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gaming, new cjs.Rectangle(-150,-150,300.9,300.9), null);


(lib.elearning = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.elearningMRD2badgeoriginal();
	this.instance.setTransform(-154,-154,0.7688,0.7688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elearning, new cjs.Rectangle(-154,-154,307.5,307.5), null);


(lib.culture = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.logoscultureMRD2badgeoriginal();
	this.instance.setTransform(-150,-150,0.7482,0.7482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.culture, new cjs.Rectangle(-150,-150,299.3,299.3), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {basic:0,elearning:1,web:2,visual:3,software:4,gnosis:5,culture:6,homo:7,gaming:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// bg
	this.instance = new lib.bg_basic();
	this.instance.setTransform(-1103,-552,1.1492,1.1492);

	this.instance_1 = new lib.bg_elearning();
	this.instance_1.setTransform(-1116,-558,1.1623,1.1623);

	this.instance_2 = new lib.bg_webdesign();
	this.instance_2.setTransform(-1086,-543,1.1317,1.1317);

	this.instance_3 = new lib.bg_visualdesign();
	this.instance_3.setTransform(-1112,-556,1.158,1.158);

	this.instance_4 = new lib.bg_softwaredev();
	this.instance_4.setTransform(-1086,-543,1.1317,1.1317);

	this.instance_5 = new lib.bg_gnosis();
	this.instance_5.setTransform(-1137,-568,1.1843,1.1843);

	this.instance_6 = new lib.bg_culture();
	this.instance_6.setTransform(-1095,-547,1.1404,1.1404);

	this.instance_7 = new lib.bg_homosapiens();
	this.instance_7.setTransform(-1137,-568,1.1843,1.1843);

	this.instance_8 = new lib.bg_gaming();
	this.instance_8.setTransform(-1112,-556,1.1579,1.1579);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1137,-568,2273.8,1136.9);


// stage content:
(lib.CreateJS_Responsive_Desktop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {flag_escena1:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var escena1 = this;
		
		escena1.stop();
		
		escena1.ficha1.addEventListener("pressmove", dragMovieClip);
		escena1.ficha2.addEventListener("pressmove", dragMovieClip);
		escena1.ficha3.addEventListener("pressmove", dragMovieClip);
		escena1.ficha4.addEventListener("pressmove", dragMovieClip);
		escena1.ficha5.addEventListener("pressmove", dragMovieClip);
		escena1.ficha6.addEventListener("pressmove", dragMovieClip);
		escena1.ficha7.addEventListener("pressmove", dragMovieClip);
		escena1.ficha8.addEventListener("pressmove", dragMovieClip);
		escena1.ficha1.addEventListener("pressup", changeBG);
		escena1.ficha2.addEventListener("pressup", changeBG);
		escena1.ficha3.addEventListener("pressup", changeBG);
		escena1.ficha4.addEventListener("pressup", changeBG);
		escena1.ficha5.addEventListener("pressup", changeBG);
		escena1.ficha6.addEventListener("pressup", changeBG);
		escena1.ficha7.addEventListener("pressup", changeBG);
		escena1.ficha8.addEventListener("pressup", changeBG);
		
		function dragMovieClip(evt) {
			if(evt.currentTarget.name=="ficha1"){
				escena1.bg.gotoAndStop("elearning");
			}else if(evt.currentTarget.name=="ficha2"){
				escena1.bg.gotoAndStop("web");
			}else if(evt.currentTarget.name=="ficha3"){
				escena1.bg.gotoAndStop("visual");
			}else if(evt.currentTarget.name=="ficha4"){
				escena1.bg.gotoAndStop("software");
			}else if(evt.currentTarget.name=="ficha5"){
				escena1.bg.gotoAndStop("gnosis");
			}else if(evt.currentTarget.name=="ficha6"){
				escena1.bg.gotoAndStop("culture");
			}else if(evt.currentTarget.name=="ficha7"){
				escena1.bg.gotoAndStop("homo");
			}else if(evt.currentTarget.name=="ficha8"){
				escena1.bg.gotoAndStop("gaming");
			}
		    evt.currentTarget.x = evt.stageX/stage.scaleX;
		    evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		
		stage.addEventListener("resize", resizeMovieClip);
		
		function resizeMovieClip() {
		    stage.scaleX = stage.width/originalWidth;
		    stage.scaleY = stage.height/originalHeight;
		}
		
		function changeBG(evt){
		    escena1.bg.gotoAndStop("basic");
		}
		
		
		
		
		/*
		
			Validacion de colisiones
		
		*/
		
		
		//colisión para t1f1
		/*escena1.ficha1.on("pressup", function(evento){
			var lista_act3 = escena1.getObjectsUnderPoint(escena1.ficha1.x, escena1.ficha1.y);
			for(var i=0; i< lista_act3.length; i++){
				//esta es la colision para el acierto
				if(lista_act3[i].parent.name == "ficha2"){
					console.log("se choco con la ficha 2")
				}
				//todas las que vienen son la de error
				else if(lista_act3[i].parent.name == "ficha3"){
					console.log("se choco con la ficha 3")
				}else{
					escena1.ficha1.x=147,65;
					escena1.ficha1.y=221,6;
				}
			}
		
		});
		
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// fichas
	this.ficha8 = new lib.gaming();
	this.ficha8.name = "ficha8";
	this.ficha8.setTransform(1547.7,700.5,1.2354,1.2354,0,0,0,0.1,0.1);

	this.ficha7 = new lib.homosapiens();
	this.ficha7.name = "ficha7";
	this.ficha7.setTransform(1137.15,702.6,1.2354,1.2354,0,0,0,0.1,0.1);

	this.ficha6 = new lib.culture();
	this.ficha6.name = "ficha6";
	this.ficha6.setTransform(777.9,701.35,1.2354,1.2354,0,0,0,0.1,1);

	this.ficha5 = new lib.gnosis();
	this.ficha5.name = "ficha5";
	this.ficha5.setTransform(408.2,700.3,1.2354,1.2354);

	this.ficha4 = new lib.softwaredev();
	this.ficha4.name = "ficha4";
	this.ficha4.setTransform(1537.05,365,1.2354,1.2354);

	this.ficha3 = new lib.visualdesign();
	this.ficha3.name = "ficha3";
	this.ficha3.setTransform(1141.9,363.85,1.2354,1.2354,0,0,0,0.1,0);

	this.ficha2 = new lib.webdesign();
	this.ficha2.name = "ficha2";
	this.ficha2.setTransform(776.85,400,1.2354,1.2354,0,0,0,0.1,27.3);

	this.ficha1 = new lib.elearning();
	this.ficha1.name = "ficha1";
	this.ficha1.setTransform(410.2,384.8,1.2354,1.2354,0,0,0,0,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ficha1},{t:this.ficha2},{t:this.ficha3},{t:this.ficha4},{t:this.ficha5},{t:this.ficha6},{t:this.ficha7},{t:this.ficha8}]}).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.setTransform(956.1,539.15);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(813.1,527.2,1246.4,563.2);
// library properties:
lib.properties = {
	id: '6073015432E946D2B597B32C35DD25F3',
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CreateJS_Responsive_Desktop_atlas_1.png?1674933251438", id:"CreateJS_Responsive_Desktop_atlas_1"},
		{src:"images/CreateJS_Responsive_Desktop_atlas_2.png?1674933251438", id:"CreateJS_Responsive_Desktop_atlas_2"},
		{src:"images/CreateJS_Responsive_Desktop_atlas_3.png?1674933251438", id:"CreateJS_Responsive_Desktop_atlas_3"},
		{src:"images/CreateJS_Responsive_Desktop_atlas_4.png?1674933251438", id:"CreateJS_Responsive_Desktop_atlas_4"},
		{src:"images/CreateJS_Responsive_Desktop_atlas_5.png?1674933251438", id:"CreateJS_Responsive_Desktop_atlas_5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6073015432E946D2B597B32C35DD25F3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;