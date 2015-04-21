// Created by iWeb 3.0.4 local-build-20140408

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke(),stroke_1:new IWStroke('favorite_files/stroke.png',new IWRect(-3,-3,707,10),new IWSize(700,5))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('favorite_files/favoriteMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();IMpreload('favorite_files','shapeimage_2','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
