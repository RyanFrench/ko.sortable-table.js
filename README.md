ko.sortable-table.js
====================

A knockout.js binding handler to create a sortable table.

Click on the table header to sort by the specified field. Initial sorting is not done by default. The first click on a field will always result in the column being sorted in descending order. Subsequent clicks will reverse the order.

##Install

bower install ko.sortable-table

##Usage

###Basic Example

Specify the data array and a field to sort on.

```html
<table>
  <thead>
    <th>
      <td data-bind="sortBy: { array: table_data, sortBy: 'field_one' }">Field One</td>
      <td>Field Two</td>
      <td>Field Three</td>
    </th>
  </thead>
  <tbody data-bind="foreach: table_data">
    <tr>
      <td data-bind="text: field_one"></td>
      <td data-bind="text: field_two"></td>
      <td data-bind="text: field_three"></td>
    </tr>
  </tbody>
</table>
```

###Sort on Multiple Fields

If the sortBy value is an array, sort by all the fields. Ordering is done from left to right in the array, and the order is the same for all fields.

```html
<table>
  <thead>
    <th>
      <td data-bind="sortBy: { array: table_data, sortBy: ['field_one','field_two'] }">Field One</td>
      <td>Field Two</td>
      <td>Field Three</td>
    </th>
  </thead>
  <tbody data-bind="foreach: table_data">
    <tr>
      <td data-bind="text: field_one"></td>
      <td data-bind="text: field_two"></td>
      <td data-bind="text: field_three"></td>
    </tr>
  </tbody>
</table>
```


###Sort on a Custom Function

A custom function can be passed to the binding handler for more complex sorting.

```javascript
function sortFunction(a,b){
  return a['field_one'] > b['field_one'] ? 1 : a['field_one'] < b['field_one'] ? -1 : 0
}
```


```html
<table>
  <thead>
    <th>
      <td data-bind="sortBy: { array: table_data, sortBy: sortFunction }">Field One</td>
      <td>Field Two</td>
      <td>Field Three</td>
    </th>
  </thead>
  <tbody data-bind="foreach: table_data">
    <tr>
      <td data-bind="text: field_one"></td>
      <td data-bind="text: field_two"></td>
      <td data-bind="text: field_three"></td>
    </tr>
  </tbody>
</table>
```

###Add CSS styling to table header

A CSS class object can be passed to the binding handler for styling the header field when it is clicked

```html
<table>
  <thead>
    <th>
      <td data-bind="sortBy: { array: table_data, sortBy: sortFunction, css: { asc: 'asc', desc: 'desc' } }">Field One</td>
      <td>Field Two</td>
      <td>Field Three</td>
    </th>
  </thead>
  <tbody data-bind="foreach: table_data">
    <tr>
      <td data-bind="text: field_one"></td>
      <td data-bind="text: field_two"></td>
      <td data-bind="text: field_three"></td>
    </tr>
  </tbody>
</table>
```
