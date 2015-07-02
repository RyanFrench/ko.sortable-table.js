ko.bindingHandlers.sortBy = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var asc = true;
    element.style.cursor = 'pointer';

    var value = valueAccessor();
    var data = value.array;
    var sortBy = value.sortBy;
    var sortFunction = null;
    var siblings = element.parentNode.querySelectorAll('th');
    var updateCSS = function(){
      for(i=0; i<siblings.length; i++){
        if(value.css.desc) siblings[i].classList.remove(value.css.desc);
        if(value.css.asc) siblings[i].classList.remove(value.css.asc);
      }
      if(asc) {
        if(value.css.desc) element.classList.remove(value.css.desc);
        if(value.css.asc) element.classList.add(value.css.asc);
      } else {
        if(value.css.asc) element.classList.remove(value.css.asc);
        if(value.css.desc) element.classList.add(value.css.desc);
      }
    };

    if(!ko.isObservable(data) || !Array.isArray(data())) throw "Incorrect argument for array. Must be an observableArray";

    switch(true) {
        case typeof sortBy === "function":
          sortFunction = sortBy;
          break;
        case Array.isArray(sortBy):
          var length = sortBy.length;
          sortFunction = function(a,b){
            var index = -1;
            while(++index < length)
            {
              var field = sortBy[index];
              var value_a = typeof a[field] === 'function' ? a[field]() : a[field];
              var value_b = typeof b[field] === 'function' ? b[field]() : b[field];
              if(value_a == value_b) continue;
              return value_a > value_b ? 1 : -1;
            }
          };
          break;
        case typeof sortBy === "string":
          sortFunction = function(a, b) {
            var value_a = typeof a[sortBy] === 'function' ? a[sortBy]() : a[sortBy];
            var value_b = typeof b[sortBy] === 'function' ? b[sortBy]() : b[sortBy];
            return value_a > value_b ? 1 : value_a < value_b ? -1 : 0;
          };
          break;
        default:
          throw "Incorrect argument for sortBy";
      }

    element.onclick = function(){
      asc = !asc;

      data.sort(sortFunction);

      if(!asc) data.reverse();

      if(value.css !== undefined){
        updateCSS();
      }
    };
  }
};
