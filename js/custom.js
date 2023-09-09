function changeCategory(e, obj) {
    const node = obj.part;
    if (node) {
        const diagram = node.diagram;
        diagram.startTransaction("changeCategory");
        let cat = diagram.model.getCategoryForNodeData(node.data);
        if (cat === "simple")
            cat = "detailed";
        else
            cat = "simple";
        diagram.model.setCategoryForNodeData(node.data, cat);
        diagram.commitTransaction("changeCategory");
        //diagram.scrollToRect(node.actualBounds);
        //diagram.commandHandler.zoomToFit();
    }
}

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

const simpletemplate =
    $(go.Node, "Auto",{ toolTip: myToolTip, fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: true, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, new go.Binding("desiredSize", "size"),
            new go.Binding("figure", "shape"), { strokeWidth: 1, stroke: "#555" }, new go.Binding("fill", "color")),
        $(go.TextBlock, textStyle(), new go.Binding("text", "key")),
        { click: (e, obj) => changeCategory(e, obj) }
    );

const simpleWithTooltiptemplate =
    $(go.Node, "Auto",{ toolTip: myToolTip, fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: true, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, new go.Binding("desiredSize", "size"),
            new go.Binding("figure", "shape"), { strokeWidth: 1, stroke: "#555" }, new go.Binding("fill", "color")),
        $(go.TextBlock,textStyle(), new go.Binding("text", "key")),
        {toolTip: $("ToolTip", $(go.TextBlock, { margin: 4 }, new go.Binding("text", "desc")))},
        { click: (e, obj) => changeCategory(e, obj) }
    );

// the "detailed" template shows all of the information in a Table Panel
const detailtemplate =
    $(go.Node, "Auto", { toolTip: myToolTip, fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: true, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, new go.Binding("desiredSize", "size"),
            new go.Binding("figure", "shape"), { strokeWidth: 1, stroke: "#555" }, new go.Binding("fill", "color")),
        $(go.Panel, "Vertical",
            $(go.TextBlock, textStyle(), new go.Binding("text", "key")),
            $(go.Panel, "Vertical", {defaultAlignment: go.Spot.Left, margin: 0,},
                new go.Binding("itemArray", "items"),{
                    itemTemplate:
                        $(go.Panel, "Auto", {margin: 2 }, $(go.Shape, "RoundedRectangle", new go.Binding("fill", "color")),
                            $(go.TextBlock, itemStyle(), new go.Binding("text", "text"))
                        )
                })),
        { click: (e, obj) => changeCategory(e, obj) }
    );

const templmap = new go.Map();
templmap.add("simple", simpletemplate);
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