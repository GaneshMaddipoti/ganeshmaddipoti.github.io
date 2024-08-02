let pythonNodeDataArray = [

    {key: "VoidGroup", category: "voidTree", isGroup: true,},
    {key: "VoidNode", category: "voidNode", group: "VoidGroup"},

    {key: "System", desc: "System", group: "VoidGroup", isGroup: true, category: "tree", img: "img/system.svg", expand: true},

    {key: "Storage", desc: "Storage", isGroup: true, group: "System", category: "tree", img: "img/drive.svg", expand: true},

    {key: "CPU", desc: "CPU", isGroup: true, group: "System", category: "tree90", img: "img/pc.svg", expand: true},
    {key: "IO", desc: "Input/Output", group: "System", category: "simple", img: "img/terminal.svg", expand: false},

    {key: "Memory", desc: "Memory", isGroup: true, group: "CPU", category: "grid3", img: "img/memory.svg", expand: true},
    {key: "Processor", desc: "Processor", group: "CPU", category: "simple", img: "img/processor.svg", expand: false},


    {key: "Application", desc: "Application", isGroup: true, group: "Storage", category: "menu", expand: true, img: "img/application.svg",},

    {key: "Sourcecode", desc: "source", group: "Application", category: "menuItem", expand: true,},
    {key: "Package", desc: "Package", group: "Application", category: "menuItem",expand: false, expand: true},
    {key: "File", desc: "File(.py)", group: "Application", isGroup: true, category: "grid2",expand: false, img: "img/byteFile.svg", expand: true},
    {key: "Code", desc: "Code", group: "File", category: "simpleEdit"},


    {key: "Bytecode", desc: "target", group: "Application", category: "menuItem", expand: true,},
    {key: "Package1", desc: "Package", group: "Application", category: "menuItem",expand: false, expand: true},
    {key: "File1", desc: "File(.pyc)", group: "Application", category: "simple", expand: false, img: "img/byteFile.svg", expand: true},

    {key: "Python", desc: "Python", group: "Storage", color: "WhiteSmoke", isGroup: true, category: "tree", img: "assets/img/python.png", toolTipHTML: pythonHTML},
    {key: "Python-Install", desc: "Install", color: "WhiteSmoke", isGroup: true, group: "Python", category: "grid2", expand: false},
    {key: "Python-CLI", desc: "CLI", color: "WhiteSmoke", group:"Python-Install", category: "simple", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonCLIHTML},
    {key: "Jupyter-notebook", desc: "Jupyter Notebook", color: "WhiteSmoke", group:"Python-Install", category: "simple150", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: jupyterNotebookHTML},

    {key: "Python-Syntax", desc: "Syntax", color: "WhiteSmoke", isGroup: true, group: "Python", category: "grid3", expand: false},
    {key: "Python-Datatypes", desc: "Datatypes", color: "WhiteSmoke", group:"Python-Syntax", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonDatatypesHTML},
    {key: "Python-Operators", desc: "Operators", color: "WhiteSmoke", group:"Python-Syntax", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonOperatorsHTML},
    {key: "Python-Variables", desc: "Variables", color: "WhiteSmoke", group:"Python-Syntax", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonVariablesHTML},
    {key: "Python-FlowControls", desc: "FlowControls", color: "WhiteSmoke", group:"Python-Syntax", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonFlowControlsHTML},
    {key: "Python-Functions", desc: "Functions", color: "WhiteSmoke", group:"Python-Syntax", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonFunctionsHTML},
    {key: "Python-Lists", desc: "Lists", color: "WhiteSmoke", group:"Python-Syntax", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonListsHTML},
    {key: "Python-Tuples", desc: "Tuples", color: "WhiteSmoke", group:"Python-Syntax", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonTuplesHTML},
    {key: "Python-Dicts", desc: "Dictionaries", color: "WhiteSmoke", group:"Python-Syntax", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonDictionariesHTML},
    {key: "Python-Strings", desc: "Strings", color: "WhiteSmoke", group:"Python-Syntax", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonStringsHTML},

    {key: "Python-Semantics", desc: "Semantics", color: "WhiteSmoke", isGroup: true, group: "Python", category: "tree", expand: false},
    {key: "Python-Modules", desc: "Modules", color: "WhiteSmoke", group:"Python-Semantics", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonModulesHTML},
    {key: "Python-Packages", desc: "Packages", color: "WhiteSmoke", group:"Python-Semantics", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonPackagesHTML},
    {key: "Python-PyPI", desc: "PyPI", color: "WhiteSmoke", group:"Python-Semantics", category: "simpleText100", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonPypiHTML},


];


let pythonLinkDataArray = [
    {from:"Storage", to: "CPU", category: "simple"},
    //    {from:"Execution", to: "CPU", category: "simple"},
        {from:"Memory", to: "Processor", category: "simple"},
        {from:"CPU", to: "IO", category: "simple"},
    {from:"Python-Install", to: "Python-Syntax", category: "simple"},
    {from:"Python-Syntax", to: "Python-Semantics", category: "simple"},
    {from:"Sourcecode", to:"Package", category: "menuLink"},
        {from:"Package", to:"File", category: "menuLink"},

        {from:"Bytecode", to:"Package1", category: "menuLink"},
        {from:"Package1", to:"File1", category: "menuLink"},
];

let nodeDataArray = [];
let linkDataArray = [];
nodeDataArray = nodeDataArray.concat(pythonNodeDataArray);
linkDataArray = linkDataArray.concat(pythonLinkDataArray);