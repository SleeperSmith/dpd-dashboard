var ComponentTypeSidebarView = require('./component-type-sidebar-view');
var ResourceListView = require('./resource-list-view');

var ResourceCollection = require('../model/resource-collection');
var ResourceTypeCollection = require('../model/resource-type-collection');

var ResourcesView = module.exports = Backbone.Model.extend({
  el: 'body',

  initialize: function() {
    this.resourceTypes = new ResourceTypeCollection();
    this.resources = new ResourceCollection();

    this.resourceListView = new ResourceListView({
      collection: this.resources,
      parentView: this
    });
    this.resourceSidebarView = new ComponentTypeSidebarView({
      collection: this.resourceTypes, 
      listView: this.resourceListView, 
      parentView: this,
      template: _.template($('#resource-sidebar-template').html()),
      el: '#resource-sidebar'
    });

    this.resourceTypes.fetch();
    this.resources.fetch();
  }
});