// Created by iWeb 3.0.4 local-build-20140414

function createMediaStream_id1()
{return IWCreatePhotocast("file://localhost/Users/vickyoopy/Desktop/website/yao0405/Photo_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('file://localhost/Users/vickyoopy/Desktop/website/yao0405',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('file://localhost/Users/vickyoopy/Desktop/website/yao0405',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(4,new IWSize(118,118),new IWSize(118,28),new IWSize(122,161),27,27,0,new IWSize(24,27)),new IWPhotoFrame([IWCreateImage('Photo_files/Freestyle_01.png'),IWCreateImage('Photo_files/Freestyle_02.png'),IWCreateImage('Photo_files/Freestyle_03.png'),IWCreateImage('Photo_files/Freestyle_06.png'),IWCreateImage('Photo_files/Freestyle_09.png'),IWCreateImage('Photo_files/Freestyle_08.png'),IWCreateImage('Photo_files/Freestyle_07.png'),IWCreateImage('Photo_files/Freestyle_04.png')],null,2,0.600000,3.000000,3.000000,3.000000,3.000000,22.000000,24.000000,23.000000,25.000000,166.000000,222.000000,166.000000,222.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,2,5,47),url:'Photo_files/stroke.png'},{rect:new IWRect(-3,-3,5,5),url:'Photo_files/stroke_1.png'},{rect:new IWRect(2,-3,420,5),url:'Photo_files/stroke_2.png'},{rect:new IWRect(422,-3,5,5),url:'Photo_files/stroke_3.png'},{rect:new IWRect(422,2,6,47),url:'Photo_files/stroke_4.png'},{rect:new IWRect(422,49,5,6),url:'Photo_files/stroke_5.png'},{rect:new IWRect(2,49,420,6),url:'Photo_files/stroke_6.png'},{rect:new IWRect(-3,49,5,7),url:'Photo_files/stroke_7.png'}],new IWSize(425,53))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Photo_files/PhotoMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
