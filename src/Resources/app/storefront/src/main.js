import vendor from './js/cpsar-alljs/vendor';
import cpshopnav from './js/cpsar-alljs/cpshopnav';
import base from './js/cpsar-alljs/base';


const PluginManager = window.PluginManager;

PluginManager.register('vendor', vendor);
PluginManager.register('cpshopnav', cpshopnav);
PluginManager.register('base', base);
