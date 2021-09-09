import modernizr from './js/cp-vendors/modernizr';
//import scrollup from './js/cp-vendors/scrollup';
import owlcarousel from './js/cp-vendors/owlcarousel';
import slick from './js/cp-vendors/slick';
import isotope from './js/cp-vendors/isotope';
import countdown from './js/cp-vendors/countdown';
import fitvids from './js/cp-vendors/fitvids';
import elevatezoom from './js/cp-vendors/elevatezoom';
import lightgallery from './js/cp-vendors/lightgallery';

import cpshopnav from './js/cp-shopnav/cpshopnav';
import cpapp from './js/cp-app/cpapp';


const PluginManager = window.PluginManager;

PluginManager.register('modernizr', modernizr);
//PluginManager.register('scrollup', scrollup);
PluginManager.register('owlcarousel', owlcarousel);
PluginManager.register('slick', slick);
PluginManager.register('isotope', isotope);
PluginManager.register('countdown', countdown);
PluginManager.register('fitvids', fitvids);
PluginManager.register('elevatezoom', elevatezoom);
PluginManager.register('lightgallery', lightgallery);

PluginManager.register('cpshopnav', cpshopnav);
PluginManager.register('cpapp', cpapp);
