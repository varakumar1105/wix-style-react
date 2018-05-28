# MultiSelectCheckbox component

> General input container.

## MultiSelectCheckbox TestKit API

### Exposed Drivers
The `<MultiSelectCheckbox/>` TestKit is exposing the following drivers:
* Its own driver (see examples below).
* [inputDriver](https://wix-wix-style-react.surge.sh/?selectedKind=Core&selectedStory=Input&full=0&down=0&left=1&panelRight=0)
* [dropdownLayoutDriver](https://wix-wix-style-react.surge.sh/?selectedKind=Core&selectedStory=DropdownLayout&full=0&down=0&left=1&panelRight=0)


### Enzyme / ReactTestUtils
| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getNumOfLabels | - | number | returns the number of displayed labels in the readonly input field |
| getLabels | - | array | returns an array of the labels that displayed in the readonly input field |
| getLabelAt | number | string | returns a label from the displayed labels - by index |
| setProps | json | element | returns a clone of this element with the new props from the json |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {multiSelectCheckboxTestkitFactory} from 'wix-style-react/dist/testkit';
  import {multiSelectCheckboxTestkitFactory as enzymeMultiSelectCheckboxTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const selectedOptions = ['Alabama'];
  const wrapper = mount(<MultiSelectCheckbox selectedOptions={selectedOptions} dataHook={dataHook}/>);
  const multiSelectCheckboxTestkit = enzymeMultiSelectCheckboxTestkitFactory({wrapper, dataHook});


  //Do tests
  expect(multiSelectCheckboxTestkit.driver.exists()).toBeTruthy();
  expect(multiSelectCheckboxTestkit.inputDriver.exists()).toBeTruthy();
  expect(multiSelectCheckboxTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
```
