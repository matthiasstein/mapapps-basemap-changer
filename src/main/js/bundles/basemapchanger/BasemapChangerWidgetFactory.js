import Binding from "apprt-binding/Binding";
import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import BasemapChangerWidget from "./BasemapChangerWidget.vue";

const _binding = Symbol("_binding");
const _vm = Symbol("_vm");

export default class BasemapChangerWidgetFactory {

    activate() {
        this._initComponent();
    }

    deactivate() {
        this[_binding].unbind();
        this[_binding] = undefined;
        this[_vm] = undefined;
    }

    createInstance() {
        return VueDijit(this[_vm]);
    }

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

}
