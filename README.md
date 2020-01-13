# Übung 7

1. Add a new Dropdown-Toolset to the toolset configuration in the app.json:

```javascript
"toolset": {
    "ToolsetManager": {
        "toolsets": [
            ...,
            {
                "id": "dropdown",
                "cssClass": "ctWDYWBtn ctPrimaryInput",
                "title": "Was möchten Sie tun?",
                "tools": [
                    "tocToggleTool",
                    "printingToggleTool",
                    "sharelinkTool",
                    "basemapChangerToggleTool"
                ],
                "container": "map",
                "position": {
                    "rel_t": 80,
                    "rel_l": 20
                },
                "windowType": "dropdown"
            }
        ]
    }
}
```
