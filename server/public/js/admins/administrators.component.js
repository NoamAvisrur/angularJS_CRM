app.component('administratorsComponent', {
            template: `<h1>administrators</h1>
                       <div class="content">
                           <admins-component admins="administrators.data[2]"></admins-component>
                           <adminsview-component></adminsview-component>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'administrators'
});