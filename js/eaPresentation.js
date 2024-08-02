let eaNodeDataArray = [

    {key: "VoidGroup", category: "voidTree", isGroup: true,},
    {key: "VoidNode", category: "voidNode", group: "VoidGroup"},

    {key: "Enterprise Architecture", desc: "Enterprise Architecture", group: "VoidGroup", isGroup: true, category: "tree",
                img: "img/system.svg", expand: true, toolTipHTML: eaHTML},

    {key: "Core Concepts", desc: "Core Concepts", group: "Enterprise Architecture", isGroup: true, category: "tree", expand: true},
    {key: "Enterprise", desc: "Enterprise", group: "Core Concepts", category: "simple", toolTipHTML: enterpriseHTML},
    {key: "Architecture Domains", desc: "Architecture Domains", group: "Core Concepts", category: "simple", toolTipHTML: archDomainsHTML},
    {key: "ADM", desc: "ADM", group: "Core Concepts", category: "simple", toolTipHTML: admHTML},
    {key: "Enterprise Continnum", desc: "Enterprise Continnum", group: "Core Concepts", category: "simple", toolTipHTML: continuumHTML},
    {key: "Architecture Repository", desc: "Architecture Repository", group: "Core Concepts", category: "simple", toolTipHTML: repositoryHTML},
];

let eaLinkDataArray = [


];
let nodeDataArray = [];
let linkDataArray = [];
nodeDataArray = nodeDataArray.concat(eaNodeDataArray);
linkDataArray = linkDataArray.concat(eaLinkDataArray);