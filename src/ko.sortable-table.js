ko.bindingHandlers.sortBy = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var asc = true;
    element.style.cursor = 'pointer';

    element.onclick = function(){
      var value = valueAccessor();
      var data = value.array;
      var sortBy = value.sortBy;

      if(!(ko.isObservable(data) && !Array.isArray(data()))) throw "Incorrect argument for array. Array must be an observableArray";

      asc = !asc;

      switch(true) {
        case typeof sortBy === "function":
          data.sort(sortBy);
          break;
        case Array.isArray(sortBy):
          var length = sortBy.length;
          data.sort(function(a,b){
            var index = -1;
            while(++index < length)
            {
              var field = sortBy[index];
              if(a[field] == b[field]) continue;
              return a[field] > b[field] ? 1 : -1;
            }
          })
          break;
        case typeof sortBy === "string":
          data.sort(function(a,b){
            return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
          })
          break;
        default:
          throw "Incorrect argument for sortBy";
          break;
      }
    };
  }
};