var template = _.template($('#resource-sidebar-template').html());

var ResourceSidebarView = module.exports = Backbone.View.extend({
  el: '#resource-sidebar',

  initialize: function() {
    this.collection = this.options.collection;

    this.collection.on('reset', this.render, this);
  },

  render: function() {
    var self = this;
    $(this.el).html(template({
      resourceTypes: this.collection
    }));

    self.$('li').each(function() {
      $(this).draggable({
        connectToSortable: self.options.listView.el,
        helper: 'clone',
        revert: 'invalid',
        revertDuration: 100,
        appendTo: 'body'
      });
    })
  },

});