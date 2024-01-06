function textStyle() {
    return [
        { margin: 5, width: 100, textAlign: "center", font: '500 14px Roboto, sans-serif'}
    ];
}

function itemStyle() {
    return [
        { textAlign: "center", font: '12px Roboto, sans-serif'}
    ];
}

function subGraphExpanderButtonStyle() {
    return [
        {
            "_subGraphExpandedFigure": "MinusLine",
            "_subGraphCollapsedFigure": "PlusLine",
            "_buttonFillNormal": "LightSteelBlue",
            "_buttonStrokeNormal": "LightSteelBlue",
            "_buttonFillOver": "LightSteelBlue",
            "_buttonStrokeOver": "LightSteelBlue",
            "ButtonBorder.fill": "LightSteelBlue"
        }
    ];
}

function doMouseOver(e) {
    hideToolTip()
}

//Diagram
var $ = go.GraphObject.make;
let diagram = new go.Diagram("myDiagramDiv",{layout: $(go.TreeLayout,
        { angle: 0, nodeSpacing: 50, layerSpacing: 50}), "undoManager.isEnabled": true, "linkReshapingTool": new OrthogonalLinkReshapingTool(),
    mouseOver: doMouseOver,
    click: doMouseOver ,
});

var cxElement = document.getElementById("contextMenu");

// an HTMLInfo object is needed to invoke the code to set up the HTML cxElement
var myContextMenu = $(go.HTMLInfo, {
    show: showContextMenu,
    hide: hideContextMenu
});


//Nodes
const itemtemplates = new go.Map();
itemtemplates.add("text",$(go.Panel, $(go.TextBlock, new go.Binding("text"))));

function showToolTip(obj, diagram, tool) {
    var pt = diagram.lastInput.viewPoint;
    let toolTipDIV = document.getElementById("toolTipDIV");
    if(toolTipDIV && obj.data.toolTipHTML) {
        toolTipDIV.style.left = (pt.x + 50) + "px";
        toolTipDIV.style.top = (pt.y) + "px";
        toolTipDIV.innerHTML = obj.data.toolTipHTML;
        toolTipDIV.style.display = "block";
    }
}

function hideToolTip() {
    var toolTipDIV = document.getElementById('toolTipDIV');
    if(toolTipDIV) {
        toolTipDIV.style.display = "none";
    }
}

var myToolTip = $(go.HTMLInfo, {
    show: showToolTip,
    //hide: hideToolTip
});

const picTemplate =
    $(go.Node, "Vertical",
        $(go.Picture,
            { maxSize: new go.Size(50, 50) },
            new go.Binding("source", "img")),
        $(go.TextBlock,
            { margin: new go.Margin(3, 0, 0, 0),
                maxSize: new go.Size(100, 30),
                isMultiline: false },
            new go.Binding("text", "text"))
    );

const simpleNodeTemplate =
    $(go.Node, "Vertical",
        $(go.Picture,
            { maxSize: new go.Size(50, 50) },
            new go.Binding("source", "img")),
        $(go.TextBlock,
            { margin: new go.Margin(3, 0, 0, 0),
                maxSize: new go.Size(100, 30),
                isMultiline: false },
            new go.Binding("text", "name"))
    );

const simpletemplate =
    $(go.Node, "Vertical",{ contextMenu: myContextMenu, toolTip: myToolTip, fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, },
        $(go.Shape, new go.Binding("desiredSize", "size"),
            new go.Binding("figure", "shape"), { strokeWidth: 1, fill: "SlateGrey" }, new go.Binding("stroke", "color")),
        $(go.TextBlock, textStyle(), {editable: true}, new go.Binding("text", "name").makeTwoWay()),
    );

const simpleWithTooltiptemplate =
    $(go.Node, "Auto",{ toolTip: myToolTip, fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: true, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, new go.Binding("desiredSize", "size"),
            new go.Binding("figure", "shape"), { strokeWidth: 1, stroke: "#555" }, new go.Binding("fill", "color")),
        $(go.TextBlock,textStyle(), new go.Binding("text", "key")),
        {toolTip: $("ToolTip", $(go.TextBlock, { margin: 4 }, new go.Binding("text", "desc")))}
    );

// the "detailed" template shows all of the information in a Table Panel
const detailtemplate =
    $(go.Node, "Auto", { toolTip: myToolTip, fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: true, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, new go.Binding("desiredSize", "size"),
            new go.Binding("figure", "shape"), { strokeWidth: 1, stroke: "#555" }, new go.Binding("fill", "color")),
        $(go.Panel, "Vertical",
            $(go.TextBlock, textStyle(), {editable: true}, new go.Binding("text", "name").makeTwoWay()),
            $(go.Panel, "Vertical", {defaultAlignment: go.Spot.Left, margin: 0,},
                new go.Binding("itemArray", "items"),{
                    itemTemplate:
                        $(go.Panel, "Auto", {margin: 2 }, $(go.Shape, "RoundedRectangle", new go.Binding("fill", "color")),
                            $(go.TextBlock, itemStyle(), new go.Binding("text", "text"))
                        )
                }))
    );

const templmap = new go.Map();
templmap.add("simple", simpletemplate);
templmap.add("simpleNode", simpletemplate);
templmap.add("simpleTooltip", simpleWithTooltiptemplate)
templmap.add("detailed", detailtemplate);
templmap.add("picTemplate", picTemplate);
templmap.add("", diagram.nodeTemplate);
diagram.nodeTemplateMap = templmap;

//Links
const simplelinktemplate =
    $(go.Link, {routing: go.Link.AvoidsNodes, reshapable: true, resegmentable: true, corner: 5},
        $(go.Shape, { strokeWidth: 1, stroke: "#555" }),
        $(go.Shape, { toArrow: "Standard" }),
    );

const simplelinklabletemplate =
    $(go.Link, {routing: go.Link.AvoidsNodes, reshapable: true, resegmentable: true, corner: 5},
        $(go.Shape, { strokeWidth: 1, stroke: "#555" }),
        $(go.Shape, { toArrow: "Standard" }),
        $(go.Panel, "Auto",
            $(go.Shape, "Rectangle", { fill: "lightgrey", stroke: "gray" }, new go.Binding("fill", "color")),
            $(go.TextBlock, { margin: 3 }, new go.Binding("text", "channel"))),
        {toolTip: $("ToolTip", $(go.TextBlock, { margin: 4 }, new go.Binding("text", "desc")))}
    );
const animatedLinkTemplate =
    $(go.Link,
        { routing: go.Link.AvoidsNodes, curve: go.Link.JumpGap, corner: 10, reshapable: true, toShortLength: 7 },
        new go.Binding("points").makeTwoWay(),
        // mark each Shape to get the link geometry with isPanelMain: true
        $(go.Shape, { isPanelMain: true, stroke: "black", strokeWidth: 7 }),
        $(go.Shape, { isPanelMain: true, stroke: "LightSteelBlue", strokeWidth: 5 }),
        $(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [10, 10] }),
        $(go.Shape, { toArrow: "Triangle", scale: 1.3, fill: "gray", stroke: null })
    );

const linktemplmap = new go.Map();
linktemplmap.add("simplelink", simplelinktemplate);
linktemplmap.add("simplelinklabel", simplelinklabletemplate);
linktemplmap.add("animatedLink", animatedLinkTemplate);
linktemplmap.add("", diagram.linkTemplate);
diagram.linkTemplateMap = linktemplmap;


diagram.groupTemplateMap.add("simpleGroup", $(go.Group, "Auto", {toolTip: myToolTip, layout: $(go.TreeLayout,
            { angle: 0, nodeSpacing: 30, layerSpacing: 50 }), isShadowed: true, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, strokeWidth: 1, stroke: "#555" }, new go.Binding("fill", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Center },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Center },
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            $(go.Picture,{ maxSize: new go.Size(50, 50) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle(), new go.Binding("text", "key"),),
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(10, 10), background: "WhiteSmoke" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));

diagram.groupTemplateMap.add("tree", $(go.Group, "Auto", {toolTip: myToolTip, layout: $(go.TreeLayout,
            { angle: 0, nodeSpacing: 30, layerSpacing: 50 }), isShadowed: true, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, strokeWidth: 1, stroke: "#555" }, new go.Binding("fill", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Center },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Center },
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            $(go.Picture,{ maxSize: new go.Size(50, 50) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle(), new go.Binding("text", "key"),),
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(10, 10), background: "WhiteSmoke" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));
diagram.groupTemplateMap.add("tree90", $(go.Group, "Auto", {toolTip: myToolTip, layout: $(go.TreeLayout,
            { angle: 90, nodeSpacing: 30, layerSpacing: 30 }), isShadowed: true, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, strokeWidth: 1, stroke: "#555" }, new go.Binding("fill", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Center },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Center },
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            $(go.TextBlock, textStyle(), new go.Binding("text", "key"),),
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(10, 10), background: "WhiteSmoke" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));
diagram.groupTemplateMap.add("grid", $(go.Group, "Auto", {toolTip: myToolTip,
        layout: $(go.GridLayout, {
            wrappingColumn: 4, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(10,10)
        }), isShadowed: true, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, strokeWidth: 1, stroke: "#555" }, new go.Binding("fill", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Center },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Center },
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            $(go.TextBlock, textStyle(), new go.Binding("text", "key"),),
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(10, 10), background: "WhiteSmoke" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));
diagram.scrollMode = go.Diagram.InfiniteScroll;
diagram.contextMenu = myContextMenu;
var myAnimation = null;

function updateAnimation(arg) {
    var harray = [];
    if(arg === "impala"){
        harray = ["dstoi", "itoe", "itohs", "etohs", "etocr", "crtoc", "ctoch", "chtochi", "hstoh", "htoi", "chtoh", "citoi", "htoci", "citoic", "itot", "ttoo"];
    } else if(arg === "dremio") {
        harray = ["dstoi", "itoe", "itohs", "etohs", "etocr", "crtoc", "ctoch", "hstoh", "htod", "chtoh", "htocdb", "dtot", "ttoo", "htomt", "cdbtodc", "cdbtod"];
    }
    var arr = diagram.model.linkDataArray;
    for (var i = 0; i < arr.length; i++) {
        let pivot = arr[i];
        if(harray.includes(pivot.name)) {
            pivot.category = "animatedLink";
        } else {
            pivot.category = "simplelink";
        }
    };
    diagram.model = new go.GraphLinksModel(nodeDataArray, arr);
    if (myAnimation) myAnimation.stop();
    // Animate the flow in the pipes
    myAnimation = new go.Animation();
    myAnimation.easing = go.Animation.EaseLinear;

    diagram.links.each(link => {
        if(link.category === "animatedLink")
            myAnimation.add(link.findObject("PIPE"), "strokeDashOffset", 20, 0)
    });
    // Run indefinitely
    myAnimation.runCount = Infinity;
    myAnimation.start();
    //diagram.commandHandler.zoomToFit();
}
function czoomTofFit() {
    diagram.commandHandler.zoomToFit();
}

cxElement.addEventListener("contextmenu", e => {
    e.preventDefault();
    return false;
}, false);

function hideCX() {
    if (diagram.currentTool instanceof go.ContextMenuTool) {
        diagram.currentTool.doCancel();
    }
}

function showContextMenu(obj, diagram, tool) {
    // Show only the relevant buttons given the current state.
    var cmd = diagram.commandHandler;
    var hasMenuItem = false;
    function maybeShowItem(elt, pred) {
        if (pred) {
            elt.style.display = "block";
            hasMenuItem = true;
        } else {
            elt.style.display = "none";
        }
    }
    maybeShowItem(document.getElementById("createNode"), true);

    maybeShowItem(document.getElementById("cut"), cmd.canCutSelection());
    maybeShowItem(document.getElementById("copy"), cmd.canCopySelection());
    maybeShowItem(document.getElementById("paste"), cmd.canPasteSelection(diagram.toolManager.contextMenuTool.mouseDownPoint));
    maybeShowItem(document.getElementById("delete"), cmd.canDeleteSelection());
    maybeShowItem(document.getElementById("color"), obj !== null);
    maybeShowItem(document.getElementById("changeType"), obj !== null);

    // Now show the whole context menu element
    if (hasMenuItem) {
        cxElement.classList.add("show-menu");
        // we don't bother overriding positionContextMenu, we just do it here:
        var mousePt = diagram.lastInput.viewPoint;
        cxElement.style.left = mousePt.x + 5 + "px";
        cxElement.style.top = mousePt.y + "px";
    }

    // Optional: Use a `window` pointerdown listener with event capture to
    //           remove the context menu if the user clicks elsewhere on the page
    window.addEventListener("pointerdown", hideCX, true);
}

function hideContextMenu() {
    cxElement.classList.remove("show-menu");
    // Optional: Use a `window` pointerdown listener with event capture to
    //           remove the context menu if the user clicks elsewhere on the page
    window.removeEventListener("pointerdown", hideCX, true);
}

// This is the general menu command handler, parameterized by the name of the command.
function cxcommand(event, val) {
    // alert('cx' + event + 'val : ' + val);
    switch (val) {
        case "createNode": createNode(); break;
        case "simpleNode": changeType(event, val); break;
        case "simpleGroup": changeType(event, val); break;

        case "cut": diagram.commandHandler.cutSelection(); break;
        case "copy": diagram.commandHandler.copySelection(); break;
        case "paste": diagram.commandHandler.pasteSelection(diagram.toolManager.contextMenuTool.mouseDownPoint); break;
        case "delete": diagram.commandHandler.deleteSelection(); break;
        case "color": {
            var color = window.getComputedStyle(event.target)['background-color'];
            changeColor(diagram, color); break;
        }
    }
    diagram.currentTool.stopTool();
}

// A custom command, for changing the color of the selected node(s).
function changeColor(diagram, color) {
    // Always make changes in a transaction, except when initializing the diagram.
    diagram.startTransaction("change color");
    diagram.selection.each(node => {
        if (node instanceof go.Node) {  // ignore any selected Links and simple Parts
            // Examine and modify the data, not the Node directly.
            var data = node.data;
            // Call setDataProperty to support undo/redo as well as
            // automatically evaluating any relevant bindings.
            diagram.model.setDataProperty(data, "color", color);
        }
    });
    diagram.commitTransaction("change color");
}

let keyPivot = 0
function createNode() {
    diagram.startTransaction("Create Node");
    const newNode = { key: ++keyPivot, name: "Node Name", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: ""};
    diagram.model.addNodeData(newNode);
    diagram.commitTransaction("Create Node");
}

function changeType(event, val) {
    diagram.selection.each(node => {
        if (node instanceof go.Node) {
            var data = node.data;
            if(val === 'simpleGroup') {
                diagram.model.set(data, "isGroup", true);
            } else {
                diagram.model.set(data, "isGroup", false);
            }
            diagram.model.setDataProperty(data, "category", val)
        }});
}

function save() {
    document.getElementById("mySavedModel").value = diagram.model.toJson();
}

function load() {
    diagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);

}

// window.onbeforeunload = function() {
//     return "Data will be lost if you leave the page, are you sure?";
// };