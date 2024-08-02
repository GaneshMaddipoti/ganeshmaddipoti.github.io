let hadoopNodeDataArray = [

//    {key: "Presentation", desc: "Present", isGroup: true, category: "tree", img: "img/system.svg", expand: true},
//
//    {key: "Title", desc: "Title", category: "simple", group: "Presentation", toolTipHTML: titleHTML},
//    {key: "About Me", desc: "About Me", category: "simple", img: "img/PP.jpg", group: "Presentation", toolTipHTML: aboutMeHTML},
//    {key: "Features", desc: "Content", category: "simple", group: "Presentation", toolTipHTML: featuresHTML},
//

    {key: "VoidGroup", category: "voidTree", isGroup: true,},
    {key: "VoidNode", category: "voidNode", group: "VoidGroup"},

    {key: "System", desc: "System", group: "VoidGroup", isGroup: true, category: "tree", img: "img/system.svg", expand: true},

    {key: "Storage", desc: "Storage", isGroup: true, group: "System", category: "tree", img: "img/drive.svg", expand: true},

    {key: "CPU", desc: "CPU", isGroup: true, group: "System", category: "tree90", img: "img/pc.svg", expand: true},
    {key: "IO", desc: "Input/Output", group: "System", category: "simple", img: "img/terminal.svg", expand: false},

    {key: "Memory", desc: "Memory", isGroup: true, group: "CPU", category: "grid3", img: "img/memory.svg", expand: false},
    {key: "Processor", desc: "Processor", group: "CPU", category: "simple", img: "img/processor.svg", expand: false},


    {key: "Application", desc: "Application", isGroup: true, group: "Storage", category: "menu", toolTipHTML: javaProgrammingHTML, expand: false, img: "img/application.svg",},

    {key: "Sourcecode", desc: "source", group: "Application", category: "menuItem", toolTipHTML: javaSourceCodeHTML, expand: true,},
    {key: "Package", desc: "Package", group: "Application", category: "menuItem",expand: false, expand: true},
    {key: "File", desc: "File(.java)", group: "Application", isGroup: true, category: "tree",expand: false, img: "img/byteFile.svg", expand: true},

    {key: "Bytecode", desc: "target", group: "Application", category: "menuItem", toolTipHTML: javaSourceCodeHTML, expand: true,},
    {key: "Package1", desc: "Package", group: "Application", category: "menuItem",expand: false, expand: true},
    {key: "File1", desc: "File(.class)", group: "Application", category: "simple", expand: false, img: "img/byteFile.svg", expand: true},

    {key: "Hadoop", desc: "Hadoop", isGroup: true, group: "Storage", category: "tree", toolTipHTML: hadoopHTML, expand: true},

    {key: "MapReduce", desc: "MapReduce", isGroup: true, group: "Hadoop", expand: true, category: "tree90", toolTipHTML: mapReduceHTML},

    {key: "HDFS", desc: "HDFS", isGroup: true, group: "Hadoop", expand: true, category: "tree90", toolTipHTML: hdfsHTML},
    {key: "NameNode", desc: "NameNode", category: "simplePic", group: "HDFS", img: "img/drive.svg", toolTipHTML: nameNodeHTML},
    {key: "DataNode1", desc: "DataNode1", category: "simplePic", group: "HDFS", img: "img/drive.svg", toolTipHTML: dataNodeHTML},
    {key: "DataNode2", desc: "DataNode2", category: "simplePic", group: "HDFS", img: "img/drive.svg", toolTipHTML: dataNodeHTML},
    {key: "DataNode3", desc: "DataNode3", category: "simplePic", group: "HDFS", img: "img/drive.svg", toolTipHTML: dataNodeHTML},

    {key: "Meta", desc: "Meta", category: "grid3", group: "Memory", isGroup: true,},
    {key: "class1", desc: "cls1", category: "object", group: "Meta", fill: "#3A5262"},
    {key: "class2", desc: "cls2", category: "object", group: "Meta", fill: "#3A5262"},

    {key: "Heap", desc: "Heap", category: "grid3", group: "Memory", isGroup: true,},
    {key: "object1", desc: "obj1", category: "object", group: "Heap", fill: "Transparent"},
    {key: "object2", desc: "obj2", category: "object", group: "Heap", fill: "Transparent"},

    {key: "Stack", desc: "Stack", category: "grid3", group: "Memory", isGroup: true,},
    {key: "thread1", desc: "thread1", category: "stack", group: "Stack", items: ["", "ref1", "var1", "method1"]},

];

let hadoopLinkDataArray = [

    {from:"Storage", to: "CPU", category: "simple"},
//    {from:"Execution", to: "CPU", category: "simple"},
    {from:"Memory", to: "Processor", category: "simple"},
    {from:"CPU", to: "IO", category: "simple"},
    {from:"About Me", to: "Features", category: "simple"},
    {from:"Title", to: "About Me", category: "simple"},
    {from:"Features", to: "eCommerce", category: "simple"},
    {from:"Sourcecode", to:"Package", category: "menuLink"},
    {from:"Package", to:"File", category: "menuLink"},

    {from:"Bytecode", to:"Package1", category: "menuLink"},
    {from:"Package1", to:"File1", category: "menuLink"},

    {from: "NameNode", to: "DataNode1", category: "simple"},
    {from: "NameNode", to: "DataNode2", category: "simple"},
    {from: "NameNode", to: "DataNode3", category: "simple"},
];
let nodeDataArray = [];
let linkDataArray = [];
nodeDataArray = nodeDataArray.concat(hadoopNodeDataArray);
linkDataArray = linkDataArray.concat(hadoopLinkDataArray);