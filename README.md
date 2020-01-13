# Übung 5

1. _initComponent-Methode hinzufügen, welche die Vue-Komponente erzeugt und in einem Symbol speichert:

```javascript
_initComponent() {
    const basemapsModel = this._basemapsModel;
    const basemaps = basemapsModel.basemaps.map((basemap) => {
        return {
            id: basemap.id,
            title: basemap.title
        }
    });

    const vm = this[_vm] = new Vue(BasemapChangerWidget);

    this[_binding] = Binding.for(vm, basemapsModel)
        .syncAll("selectedId")
        .syncAllToLeft("basemaps")
        .syncToLeftNow()
        .enable();
}
```

2. Vue-Komponente in der createInstance-Methode zurückgeben:

```javascript
createInstance() {
    return VueDijit(this[_vm]);
}
```

3. activate und deactivate-Methoden hinzufügen, die beim Starten und Beenden des Bundles aufgerufen werden:

```javascript
activate() {
    this._initComponent();
}

deactivate() {
    this[_binding].unbind();
    this[_binding] = undefined;
    this[_vm] = undefined;
}
```
