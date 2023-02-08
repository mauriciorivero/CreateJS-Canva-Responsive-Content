var canvasDesktop, stageDesktop, exportRootDesktop, anim_containerDesktop, dom_overlay_containerDesktop, fnStartAnimationDesktop;
function initDesktop() {
	canvasDesktop = document.getElementById("canvasDesktop");
	anim_containerDesktop = document.getElementById("anim_containerDesktop");
	dom_overlay_containerDesktop = document.getElementById("dom_overlay_containerDesktop");
	var comp=AdobeAn.getComposition("6073015432E946D2B597B32C35DD25F3");
	var libDesktop=comp.getLibrary();
	var loader = new createjsDesktop.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoadDesktop(evt,comp)});
	loader.addEventListener("complete", function(evt){handleCompleteDesktop(evt,comp)});
	var libDesktop=comp.getLibrary();
	loader.loadManifest(libDesktop.properties.manifest);
}
function handleFileLoadDesktop(evt, comp) {
	var imagesDesktop=comp.getImages();	
	if (evt && (evt.item.type == "image")) { imagesDesktop[evt.item.id] = evt.result; }	
}
function handleCompleteDesktop(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var libDesktop=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = libDesktop.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRootDesktop = new libDesktop.CreateJS_Responsive_Desktop();
	stageDesktop = new libDesktop.Stage(canvasDesktop);	
	//Registers the "tick" event listener.
	fnStartAnimationDesktop = function() {
		stage.addChild(exportRootDesktop);
		createjsDesktop.Ticker.framerate = libDesktop.properties.fps;
		createjsDesktop.Ticker.addEventListener("tick", stageDesktop);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',false,1,[canvasDesktop,anim_containerDesktop,dom_overlay_containerDesktop]);	
	AdobeAn.compositionLoaded(libDesktop.properties.id);
	fnStartAnimationDesktop();
}
