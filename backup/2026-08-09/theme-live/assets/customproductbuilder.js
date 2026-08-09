(function () {
  document.body.addEventListener('CPB_ON_OPTIONS_UPDATE', function (event) {
    const categories = document.querySelectorAll('.cpb-category-fontFamily');
    const store = CPB.getStore();

    categories.forEach(category => {
      const categoryId = category.dataset.categoryId;

      category.addEventListener('click', (e) => {
        const layers = store.getState().Product.layers;
        const isLayerExist = layers.find(layer => layer.category === categoryId);

        if (
          isLayerExist &&
          e.target.localName === 'span' &&
          e.target.innerText === isLayerExist.value
        ) {
          e.stopPropagation();
        }
      });
    });
  });
})();