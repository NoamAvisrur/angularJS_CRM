app.component('addstudentComponent', {
            template: `<div class="add_student_wrapper">
                          <h2>add student</h2>
                          <form>
                              <label>
                                  <span>name</span>
                                  <input type="text">
                              </label>
                              <label>
                                  <span>phone</span>
                                  <input type="text">
                              </label>
                              <label>
                                  <span>email</span>
                                  <input type="email">
                              </label>
                              <label>
                                  <span>image</span>
                                  <input type="file">
                              </label>                      
                              <label ng-repeat="course in addstudent.data[1]">
                                  <input type="checkbox" value={{course.name}}>
                                  <span>{{course.name}}</span>
                              </label>
                          </form>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {

  },
  controllerAs: 'addstudent'
});