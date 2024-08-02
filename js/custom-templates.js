const stackTemplate =
  GO(go.Node, "Auto",
    GO(go.Shape, "Rectangle",
      { fill: "Transparent" }),
    GO(go.Panel, "Vertical",
      new go.Binding("itemArray", "items"),
      {
        itemTemplate:
          GO(go.Panel, "Auto",
            { margin: 0 },
            GO(go.Shape, "Rectangle",
              { fill: "Transparent", width: 100, stroke: "WhiteSmoke" }),
            GO(go.TextBlock, new go.Binding("text", ""),
              { margin: 0, stroke: "#cccccc" })
          )  // end of itemTemplate
      })
  );

const objectTemplate =
  GO(go.Node, "Auto",
    GO(go.Shape, "Ellipse", {stroke: "WhiteSmoke"}, new go.Binding("fill", "fill")),
    GO(go.TextBlock,
      { margin: 5,  stroke: "#cccccc" },
      new go.Binding("text", "desc"))
  );

const simplePicTemplate =
    GO(go.Node, "Vertical", { selectionAdorned: false },{padding: 0, margin: new go.Margin(0, 0, 0, 0),},
        GO(go.Picture,
            { maxSize: new go.Size(30, 30), },
            new go.Binding("source", "img")),
        GO(go.TextBlock, textStyle(),
            { margin: new go.Margin(0, 0, 0, 0),
                maxSize: new go.Size(50, 50),
                isMultiline: false },
            new go.Binding("text", "desc")),
        { click: (e, obj) => showDetails(e, obj) }
    );

const simpleTemplate = GO(go.Node, "Auto", {selectionAdorned: false},
    {isShadowed: true, shadowBlur: 1, shadowColor: colors.blackShadow,
           shadowOffset: new go.Point(5, 5), fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle",
                {height: 40}, new go.Binding("height", "height"),
                {width: 100}, new go.Binding("width", "width"),
                {fill: "Transparent", stroke: "WhiteSmoke"}),
    GO(go.TextBlock, textStyle150(), new go.Binding("text", "desc")),
        { click: (e, obj) => showDetails(e, obj) }
);

const simpleEditTemplate = GO(go.Node, "Auto", {selectionAdorned: false},
    {isShadowed: true, shadowBlur: 1, shadowColor: colors.blackShadow,
           shadowOffset: new go.Point(5, 5), fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle",
                {fill: "#C0C0C0", stroke: "WhiteSmoke"}),
    GO(go.Panel, "Horizontal", // the header
                {height: 350}, new go.Binding("height", "height"),
                {width: 450}, new go.Binding("width", "width"),
    GO(go.TextBlock, {editable: true}, textStyleLeft350(), new go.Binding("text", "desc"))),
        { click: (e, obj) => showDetails(e, obj) }
);

const voidNodeTemplate = GO(go.Node, "Auto", {selectionAdorned: false},
    {isShadowed: true, shadowBlur: 1, shadowColor: colors.blackShadow,
           shadowOffset: new go.Point(5, 5), fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle",
                {height: 70}, new go.Binding("height", "height"),
                {width: 100}, new go.Binding("width", "width"),
                {fill: "Transparent", stroke: "Transparent"}),
    GO(go.TextBlock, textStyle150(), new go.Binding("text", "desc")),
        { click: (e, obj) => showDetails(e, obj) }
);

const simple150Template = GO(go.Node, "Auto", {selectionAdorned: false},
    {isShadowed: true, shadowBlur: 1, shadowColor: colors.blackShadow,
           shadowOffset: new go.Point(5, 5), fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle",
                {height: 40}, new go.Binding("height", "height"),
                {width: 150}, new go.Binding("width", "width"),
                {fill: "Transparent", stroke: "WhiteSmoke"}),
    GO(go.TextBlock, textStyle150(), new go.Binding("text", "desc")),
        { click: (e, obj) => showDetails(e, obj) }
);

const simpleText100Template =
    GO(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        GO(go.Shape, {height: 15}, new go.Binding("height", "height"), new go.Binding("width", "width"),
            new go.Binding("figure", "shape"), { strokeWidth: 0, stroke: "#555", fill:"Transparent" }, new go.Binding("stroke", "color")),
        GO(go.Panel, "Horizontal", // the header
            {padding: new go.Margin(0, 10), height: 50},
//            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyleLeft(), new go.Binding("text", "desc"),),
        ),
        { click: (e, obj) => showDetails(e, obj) }
    );

const simpleTextTemplate =
    GO(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        GO(go.Shape, {height: 15}, new go.Binding("height", "height"), new go.Binding("width", "width"),
            new go.Binding("figure", "shape"), { strokeWidth: 0, stroke: "#555", fill:"Transparent" }, new go.Binding("stroke", "color")),
        GO(go.Panel, "Horizontal", // the header
            {padding: new go.Margin(0, 10), height: 50},
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, new go.Binding("text", "desc"), textStyle() ),
        ),
        { click: (e, obj) => showDetails(e, obj) }
    );

const simpleText150Template =
    GO(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        GO(go.Shape, {height: 15}, new go.Binding("height", "height"), new go.Binding("width", "width"),
            new go.Binding("figure", "shape"), { strokeWidth: 0, stroke: "#555", fill:"Transparent" }, new go.Binding("stroke", "color")),
        GO(go.Panel, "Horizontal", // the header
            {padding: new go.Margin(0, 10), height: 50},
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle150(), new go.Binding("text", "desc"),),
        ),
        { click: (e, obj) => showDetails(e, obj) }
    );

const simpleTextLeft150Template =
    GO(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        GO(go.Shape, {height: 15}, new go.Binding("height", "height"), new go.Binding("width", "width"),
            new go.Binding("figure", "shape"), { strokeWidth: 0, stroke: "#555", fill:"Transparent" }, new go.Binding("stroke", "color")),
        GO(go.Panel, "Horizontal", // the header
            {padding: new go.Margin(0, 10), height: 50},
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyleLeft150(), new go.Binding("text", "desc"),),
        ),
        { click: (e, obj) => showDetails(e, obj) }
    );

const tokenTemplate = GO(go.Part, "Auto",
    { locationSpot: go.Spot.Center, layerName: 'Foreground' },
    GO(go.Shape, 'Rectangle',
    { width: 20, height: 20, fill: '#eee', stroke: "WhiteSmoke", strokeWidth: 1  },
    new go.Binding("opacity", "opacity")),
)
    
const simpleLinkTemplate =
    GO(go.Link, {routing: go.Routing.AvoidsNodes,
                       curve: go.Curve.JumpOver,
                       corner: 5,
                       toShortLength: 4},
        GO(go.Shape, { strokeWidth: 1, stroke: "WhiteSmoke" }),
        GO(go.Shape, { toArrow: "Standard" }, {stroke: "WhiteSmoke", fill: "WhiteSmoke"}),
    );    

const grid2Template = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.GridLayout, {
        wrappingColumn: 2, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(5,5)
    }), isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
    fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides },
    GO(go.Shape, "RoundedRectangle",
        { parameter1: 5, stroke: "WhiteSmoke", fill: "Transparent"}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left, padding: new go.Margin(0, 5)},
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(5, 5), background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const grid3Template = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.GridLayout, {
        wrappingColumn: 3, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(5,5)
    }), isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
    fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides },
    GO(go.Shape, "RoundedRectangle",
        { parameter1: 5, stroke: "WhiteSmoke", fill: "Transparent"}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left, padding: new go.Margin(0, 5)},
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(5,5), background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const treeTemplate = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.TreeLayout,
    { angle: 0, nodeSpacing: 30, layerSpacing: 50 }),
    isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
            fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, stroke: "WhiteSmoke", fill: "Transparent"}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right, padding: new go.Margin(0, 5) },
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(5, 5), background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const voidTreeTemplate = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.TreeLayout,
    { angle: 0, nodeSpacing: 30, layerSpacing: 50 }),
    isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
            fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, stroke: "Transparent", fill: "Transparent"}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right, padding: new go.Margin(0, 5) },
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            GO("SubGraphExpanderButton", { width: 0, height: 0, margin: 0}),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(5, 5), background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const tree90Template = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.TreeLayout,
    { angle: 90, nodeSpacing: 30, layerSpacing: 50 }),
    isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
            fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, stroke: "WhiteSmoke", fill: "Transparent"}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right, padding: new go.Margin(0, 5) },
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "key"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(5, 5), background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const tree250Template = GO(go.Group, "Auto", { selectionAdorned: false }, {layout: GO(go.TreeLayout,
            { angle: 0, nodeSpacing: 30, layerSpacing: 50 }), isShadowed: false, shadowOffset: new go.Point(3, 3)},
    GO(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 0, strokeWidth: 0, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right, padding: new go.Margin(0, 10) }, {padding: new go.Margin(0, 10)},
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle150(), new go.Binding("text", "desc"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: 10, background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const menuTemplate = GO(go.Group, "Auto", { selectionAdorned: false },
    {
          layout: GO(go.TreeLayout, {
            alignment: go.TreeAlignment.Start,
            angle: 0,
            compaction: go.TreeCompaction.None,
            layerSpacing: 40,
            layerSpacingParentOverlap: 1,
            nodeIndentPastParent: 1,
            nodeSpacing: 10,
            setsPortSpot: false,
            setsChildPortSpot: false,
          }),
    isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
            fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, stroke: "WhiteSmoke", fill: "Transparent"}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right, padding: new go.Margin(0, 5) },
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(5, 5), background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const menuItemTemplate = GO(go.Node,
      {
        // no Adornment: instead change panel background color by binding to Node.isSelected
        selectionAdorned: false,
        // a custom function to allow expanding/collapsing on double-click
        // this uses similar logic to a TreeExpanderButton
        click: (e, obj) => showDetails(e, obj),
        doubleClick: (e, node) => {
          var cmd = diagram.commandHandler;
          if (node.isTreeExpanded) {
            if (!cmd.canCollapseTree(node)) return;
          } else {
            if (!cmd.canExpandTree(node)) return;
          }
          e.handled = true;
          if (node.isTreeExpanded) {
            cmd.collapseTree(node);
          } else {
            cmd.expandTree(node);
          }
        },
      },
//      GO('TreeExpanderButton', {
//        // customize the button's appearance
//        _treeExpandedFigure: 'LineDown',
//        _treeCollapsedFigure: 'LineRight',
//        'ButtonBorder.fill': 'Transparent',
//        'ButtonBorder.stroke': 'Transparent',
//        _buttonFillOver: 'Transparent',
//        _buttonStrokeOver: 'Transparent',
//      }),
      GO(go.Panel,
        'Horizontal',
        { position: new go.Point(0, 0), height:30 },
        new go.Binding('background', 'isSelected', (s) => (s ? 'Transparent' : 'Transparent')).ofObject(),
        GO(go.Picture,
          {
            width: 18,
            height: 18,
            margin: new go.Margin(0, 4, 0, 0),
            imageStretch: go.ImageStretch.Uniform,
          },
          // bind the picture source on two properties of the Node
          // to display open folder, closed folder, or document
          new go.Binding('source', 'isTreeExpanded', imageConverter).ofObject(),
          new go.Binding('source', 'isTreeLeaf', imageConverter).ofObject()
        ),
        GO(go.TextBlock, { font: '500 16px Roboto, sans-serif', stroke: "#cccccc" }, new go.Binding('text', 'desc'))
      ) // end Horizontal Panel
    ); // end Node

function imageConverter(prop, picture) {
    var node = picture.part;
    if (node.isTreeLeaf) {
      return 'img/folder.svg';
    } else {
      if (node.isTreeExpanded) {
        return 'img/sourceFolder.svg';
      } else {
        return 'img/folder.svg';
      }
    }
  }

const menuItem1Template = GO(go.Node,
      {
        // no Adornment: instead change panel background color by binding to Node.isSelected
        selectionAdorned: false,
        // a custom function to allow expanding/collapsing on double-click
        // this uses similar logic to a TreeExpanderButton
        click: (e, obj) => showDetails(e, obj),
        doubleClick: (e, node) => {
          var cmd = diagram.commandHandler;
          if (node.isTreeExpanded) {
            if (!cmd.canCollapseTree(node)) return;
          } else {
            if (!cmd.canExpandTree(node)) return;
          }
          e.handled = true;
          if (node.isTreeExpanded) {
            cmd.collapseTree(node);
          } else {
            cmd.expandTree(node);
          }
        },
      },
//      GO('TreeExpanderButton', {
//        // customize the button's appearance
//        _treeExpandedFigure: 'LineDown',
//        _treeCollapsedFigure: 'LineRight',
//        'ButtonBorder.fill': 'Transparent',
//        'ButtonBorder.stroke': 'Transparent',
//        _buttonFillOver: 'Transparent',
//        _buttonStrokeOver: 'Transparent',
//      }),
      GO(go.Panel,
        'Horizontal',
        { position: new go.Point(0, 0), height:30 },
        new go.Binding('background', 'isSelected', (s) => (s ? 'Transparent' : 'Transparent')).ofObject(),
        GO(go.Picture,
          {
            width: 18,
            height: 18,
            margin: new go.Margin(0, 4, 0, 0),
            imageStretch: go.ImageStretch.Uniform,
          },
          // bind the picture source on two properties of the Node
          // to display open folder, closed folder, or document
          new go.Binding('source', 'isTreeExpanded', imageConverter1).ofObject(),
          new go.Binding('source', 'isTreeLeaf', imageConverter1).ofObject()
        ),
        GO(go.TextBlock, { font: '500 16px Roboto, sans-serif', stroke: "#cccccc" }, new go.Binding('text', 'desc'))
      ) // end Horizontal Panel
    ); // end Node

function imageConverter1(prop, picture) {
    var node = picture.part;
    if (node.isTreeLeaf) {
      return 'img/byteFile.svg';
    } else {
      if (node.isTreeExpanded) {
        return 'img/downArrow.svg';
      } else {
        return 'img/rightArrow.svg';
      }
    }
  }
  
const menuLinkTemplate =
      GO(go.Link,
        { selectable: false,
          routing: go.Routing.Orthogonal,
          fromEndSegmentLength: 4,
          toEndSegmentLength: 4,
          fromSpot: new go.Spot(0.001, 1, 7, 0),
          toSpot: go.Spot.Left },
        GO(go.Shape,
          { stroke: 'gray', strokeDashArray: [1,2] }));  