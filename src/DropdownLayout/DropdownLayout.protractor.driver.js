const driverFactory = component => ({
  getDropdown: () => component.$(`[data-hook="dropdown-layout-options"]`),
  getDropdownItem: index => component.$$(`[data-hook="dropdown-layout-options"] div`).get(index).getText(),
  getDropdownItemsCount: () => component.$$(`[data-hook="dropdown-layout-options"] div`).getText().count(),
  selectItemById: itemId => component.$(`[data-hook^="dropdown-item-${itemId}"]`).click()
});

export default driverFactory;
