const nodeTemplateMap = new go.Map();
nodeTemplateMap.add("stack", stackTemplate);
nodeTemplateMap.add("object", objectTemplate);
nodeTemplateMap.add("simple", simpleTemplate);
nodeTemplateMap.add("simpleEdit", simpleEditTemplate);
nodeTemplateMap.add("simplePic", simplePicTemplate);
nodeTemplateMap.add("voidNode", voidNodeTemplate);
nodeTemplateMap.add("simple150", simple150Template);
nodeTemplateMap.add("simpleText", simpleTextTemplate);
nodeTemplateMap.add("simpleText100", simpleText100Template);
nodeTemplateMap.add("simpleText150", simpleText150Template);
nodeTemplateMap.add("simpleTextLeft150", simpleTextLeft150Template);
nodeTemplateMap.add("token", tokenTemplate);
nodeTemplateMap.add("menuItem", menuItemTemplate);
nodeTemplateMap.add("menuItem1", menuItem1Template);
diagram.nodeTemplateMap = nodeTemplateMap;

const linkTemplateMap = new go.Map();
linkTemplateMap.add("simple", simpleLinkTemplate);
linkTemplateMap.add("menuLink", menuLinkTemplate);
diagram.linkTemplateMap = linkTemplateMap;

const groupTemplateMap = new go.Map();
groupTemplateMap.add("grid2", grid2Template);
groupTemplateMap.add("grid3", grid3Template);
groupTemplateMap.add("voidTree", voidTreeTemplate);
groupTemplateMap.add("tree", treeTemplate);
groupTemplateMap.add("tree90", tree90Template);
groupTemplateMap.add("tree250", tree250Template);
groupTemplateMap.add("menu", menuTemplate);
diagram.groupTemplateMap = groupTemplateMap;

diagram.animationManager.initialAnimationStyle = go.AnimationStyle.AnimateLocations;
diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

diagram.commandHandler.zoomToFit();

function addNode() {
    diagram.model.commit(m => {
        const newNodeData = {key: "File1", desc: "File(.class)", group: "Application", category: "simple", expand: false, expand: true};
        m.addNodeData(newNodeData);
        let newNode = diagram.findNodeForData(newNodeData);
        let betaNode = diagram.findNodeForKey("Package1");
        if (newNode) newNode.location = betaNode.location;
    }, 'add node');
}

let aToken;
let aFrac;
let aFrom;
let aTo;
let direction;

function addToken() {
    diagram.model.commit(m => {
        const newNodeData = { category: "token", key: aToken, visible: false};
        m.addNodeData(newNodeData);
        let newPart = diagram.findPartForData(newNodeData);
        // set location so new node doesn't animate in from top left
        if (newPart) newPart.location = diagram.findNodeForKey(aFrom).location;
    }, 'add token');
}

function removeToken() {
    diagram.model.commit(m => {
        m.removeNodeData(m.findNodeDataForKey(aToken));
    }, 'remove token');
}

function animateToken(token, from, to) {
    aToken = token;
    aFrom = from;
    aTo = to;
    aFrac = 0.1;
    direction = 0;
    addToken();
    updateToken();
}

function animateToken1(token, from, to) {
    aToken = token;
    aFrom = from;
    aTo = to;
    aFrac = 0.1;
    direction = 0;
    addToken();
    fwdBckToken();
}

async function focusNode(){



//    let animation = new go.Animation();
//    animation.add(diagram, "position", diagram.position, new go.Point(-100, -220));
//    animation.duration = 1000;
//    animation.start();
//    await new Promise(r => setTimeout(r, 1000));
//    animation.stop();
//
//    animation = new go.Animation();
//    diagram.commit(d => {
//      d.nodes.each(node => {
//        if (node.data.key === "Meta") return;
//            animation.add(node, "opacity", node.opacity, 0.0);
//      });
//      d.links.each(link => {
//        animation.add(link, "opacity", link.opacity, 0.0);
//      });
//      animation.duration = 1000;
//      animation.start();
//    });
//    await new Promise(r => setTimeout(r, 1000));
//    animation.stop();
//
//    diagram.commit(d => {
//      d.nodes.each(node => {
//          if (node.data.key === "Meta") {
//            const animation = new go.Animation();
//            animation.add(node, "scale", node.scale, 2);
//            animation.duration = 1000;
//            animation.start();
//
//            const animation1 = new go.Animation();
//            animation1.add(node, "position", node.position, node.position.copy().offset(-200, 0));
//            animation1.duration = 1000;
//            animation1.start();
//
//          }
//      });
//    }, "decrease scale");
}

function updateToken() {
    let part1 = diagram.findPartForKey(aToken);
    var link = diagram.findNodeForKey(aFrom).findLinksTo(diagram.findNodeForKey(aTo)).first();
    if (link !== null) {
        part1.location = link.path.getDocumentPoint(link.path.geometry.getPointAlongPath(aFrac, new go.Point()));
    }
    if (aFrac < 1.0) {
        part1.data.frac = aFrac = aFrac + 0.01;
        window.requestAnimationFrame(updateToken);
    } else {
        part1.visible = false;
        window.requestAnimationFrame(removeToken);
    }
}

function fwdBckToken() {
    let part1 = diagram.findPartForKey(aToken);
    var link = diagram.findNodeForKey(aFrom).findLinksTo(diagram.findNodeForKey(aTo)).first();
    if (link !== null) {
        part1.location = link.path.getDocumentPoint(link.path.geometry.getPointAlongPath(aFrac, new go.Point()));
    }
    if (aFrac < 1.0 && direction == 0) {
        part1.data.frac = aFrac = aFrac + 0.01;
        window.requestAnimationFrame(fwdBckToken);
    } else if(aFrac > 0.0){
        direction = 1;
        part1.data.frac = aFrac = aFrac - 0.01;
        window.requestAnimationFrame(fwdBckToken);
    } else if(aFrac <= 0.0) {
        part1.visible = false;
        window.requestAnimationFrame(removeToken);
    }
}

function showDetails(e, obj) {
    const node = obj.part;
    if(node) {
        const diagram = node.diagram;
        let details = node.data;
        showToolTip(node, diagram, null);
    }
}

function showToolTip(obj, diagram, tool) {
    var pt = diagram.lastInput.viewPoint;
    let toolTipDIV = document.getElementById("toolTipDIV");
    let closeButtonHTML = '<button id="tooltipClose" onclick="hideToolTip()">X</button>';
    let footerHTML = '<p class="tooltipFooter">Footer</p>';
    if(toolTipDIV && obj.data.toolTipHTML) {
//        toolTipDIV.style.left = (window.innerWidth - 600)/2 + "px";
//        toolTipDIV.style.top = (window.innerHeight - 600)/2 + "px";
        toolTipDIV.innerHTML = closeButtonHTML +
            "<div class='tooltipBody'>" + obj.data.toolTipHTML + "</div>";
        toolTipDIV.style.opacity = "1";
        toolTipDIV.style.display = "block";
        toolTipFlag = true;
    }
}

function showInFullScreen(arg) {
    let html = eval(arg);
    let toolTipDIV = document.getElementById("toolTipDIV");
    let closeButtonHTML = '<button id="tooltipClose" onclick="hideToolTip()">X</button>';
    let footerHTML = '<p class="tooltipFooter">Footer</p>';
    if(toolTipDIV && html) {
//        toolTipDIV.style.left = (window.innerWidth - 600)/2 + "px";
//        toolTipDIV.style.top = (window.innerHeight - 600)/2 + "px";
        toolTipDIV.innerHTML = closeButtonHTML +
            "<div class='tooltipBody'>" + html + "</div>";
        toolTipDIV.style.opacity = "1";
        toolTipDIV.style.display = "block";
        toolTipFlag = true;
    }
}

function showToolTip1(toolTipHTML) {

    let toolTipDIV = document.getElementById("toolTipDIV1");
    let closeButtonHTML = '<button id="tooltipClose" onclick="hideToolTip1()">X</button>';
    let footerHTML = '<p class="tooltipFooter">Footer</p>';
    if(toolTipDIV && toolTipHTML) {
        toolTipDIV.innerHTML = closeButtonHTML +
            "<div class='tooltipBody'>" + toolTipHTML + "</div>";
        toolTipDIV.style.opacity = "1";
        toolTipDIV.style.display = "block";
        toolTip1Flag = true;
    }
}

function hideToolTip() {
    var toolTipDIV = document.getElementById('toolTipDIV');
    if(toolTipDIV) {
        toolTipDIV.style.opacity = "0";
        toolTipDIV.style.display = "none";
        toolTipFlag = false;
    }
}

function hideToolTip1() {
    var toolTipDIV = document.getElementById('toolTipDIV1');
    if(toolTipDIV) {
        toolTipDIV.style.opacity = "0";
        toolTipDIV.style.display = "none";
        toolTip1Flag = false;
    }
}

var myToolTip = GO(go.HTMLInfo, {
    show: showToolTip,
});

let toolTipFlag = false;
let toolTip1Flag = false;

//Keypress
document.onkeyup = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        if(toolTip1Flag) {
            hideToolTip1();
            return;
        }
        if(toolTipFlag) {
            hideToolTip();
        }
    }
};


