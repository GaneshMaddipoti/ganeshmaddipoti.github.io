let javaNodeDataArray = [

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

    {key: "Memory", desc: "Memory", isGroup: true, group: "CPU", category: "grid3", img: "img/memory.svg", expand: true},
    {key: "Processor", desc: "Processor", group: "CPU", category: "simple", img: "img/processor.svg", expand: false},


    {key: "Application", desc: "Application", isGroup: true, group: "Storage", category: "menu", expand: true, img: "img/application.svg",},

    {key: "Sourcecode", desc: "source", group: "Application", category: "menuItem", toolTipHTML: javaSourceCodeHTML, expand: true,},
    {key: "Package", desc: "Package", group: "Application", category: "menuItem",expand: false, expand: true},
    {key: "File", desc: "File(.java)", group: "Application", isGroup: true, category: "tree",expand: false},
    {key: "Code", desc: "Code", group: "File", category: "simpleEdit"},

    {key: "Bytecode", desc: "target", group: "Application", category: "menuItem", toolTipHTML: javaSourceCodeHTML, expand: true,},
    {key: "Package1", desc: "Package", group: "Application", category: "menuItem",expand: false, expand: true},


    {key: "JDK", desc: "JDK", isGroup: true, group: "Java", category: "tree", toolTipHTML: jdkHTML, expand: false},
    {key: "Java Compiler", desc: "Compiler", category: "simple", group: "JDK", img: "img/tools.svg"},
    {key: "Java API", desc: "API", category: "tree", isGroup: true, group: "JDK",expand: false},

    {key: "Class", desc: "class", group: "Java-Syntax", isGroup: true, category: "tree", toolTipHTML: javaClassHTML,expand: false},
    {key: "Property", desc: "properties", group: "Class", category: "simpleText", toolTipHTML: javaPropertyHTML, img: "img/private.svg"},
//    {key: "Property1", desc: " float price;", group: "Class", category: "simpleText", toolTipHTML: javaPropertyHTML, img: "img/private.svg"},
    {key: "Method", desc: "methods", group: "Class", expand: false, isGroup: true, category: "menu", toolTipHTML: javaMethodHTML, img: "img/public.svg"},

    {key: "Java-Literals", desc: "Literals", group:"Method", category: "simpleText100", toolTipHTML: javaLiteralHTML},
    {key: "Java-Identifiers", desc: "Identifiers", group:"Method", category: "simpleText100", toolTipHTML: javaIdentifiersHTML},
    {key: "Java-Datatypes", desc: "Datatypes", group:"Method", category: "simpleText100", toolTipHTML: javaDataTypeHTML},
    {key: "Java-Statements", desc: "Statements", group:"Method", category: "menuItem1", toolTipHTML: javaStatementHTML},
    {key: "Java-Conditions", desc: "Conditions", group:"Method", category: "simpleText100", toolTipHTML: javaFlowControlsHTML},
    {key: "Java-Loops", desc: "Loops", group:"Method", category: "simpleText100", toolTipHTML: javaLoopsHTML},
    {key: "Java-Exceptions", desc: "Exceptions", group:"Method", category: "simpleText100", toolTipHTML: javaExceptionsHTML},
    {key: "Java-Generics", desc: "Generics", group:"Method", category: "simpleText100", toolTipHTML: javaGenericsHTML},


//    {key: "Statement1", desc: "Integer amount = 195;", group: "Method", category: "simpleText", toolTipHTML: javaStatementHTML, img: "img/null.svg"},
//    {key: "Statement2", desc: "if(rate !=0) { //stmts; }", group: "Method", category: "simpleText", toolTipHTML: javaFlowControlsHTML, img: "img/null.svg"},
//    {key: "Statement3", desc: "for(int i=0; i<10; i++) { //stmts; }", group: "Method", category: "simpleText", toolTipHTML: javaLoopsHTML, img: "img/null.svg"},
//    {key: "Statement4", desc: "try{ //stmts; } catch(Exceptin e) {}", group: "Method", category: "simpleText", toolTipHTML: javaExceptionsHTML, img: "img/null.svg"},

    {key: "Interface", desc: "interface", group: "Java-Syntax", category: "simpleText100", toolTipHTML: javaInterfaceHTML, expand: false, img: "img/interface.svg",},
    {key: "Enum", desc: "enum", group: "Java-Syntax", category: "simpleText100", expand: false,},
    {key: "Record", desc: "record", group: "Java-Syntax", category: "simpleText100", expand: false,},

    {key: "Java", desc: "Java", isGroup: true, group: "Storage", category: "grid3", img: "img/java.svg", toolTipHTML: javaHTML, expand: false},
    {key: "Java-Syntax", desc: "Syntax", group: "Java", isGroup:true, category: "tree", toolTipHTML: javaSyntaxHTML},

    {key: "Java-String", desc: "String", group:"Java API", category: "simpleTextLeft150", toolTipHTML: javaStringHTML},
    {key: "Java-System", desc: "System", group:"Java API", category: "simpleTextLeft150", toolTipHTML: javaStringHTML},
    {key: "Java-Math", desc: "Math", group:"Java API", category: "simpleTextLeft150", toolTipHTML: javaStringHTML},
    {key: "Java-DateTime", desc: "DateTime", group:"Java API", category: "simpleTextLeft150", toolTipHTML: javaStringHTML},

    {key: "Java-WrapperClass", desc: "Wrapper Classes", group:"Java API", category: "simpleTextLeft150", toolTipHTML: javaWrapperClassHTML},
    {key: "Java-Collections", desc: "Collections", group:"Java API", category: "simpleTextLeft150", toolTipHTML: javaCollectionsHTML},
    {key: "Java-Iterators", desc: "Iterators", group:"Java API", category: "simpleTextLeft150", toolTipHTML: javaIteratorsHTML},
    {key: "Java-Spliterators", desc: "Spliterators", group:"Java API", category: "simpleTextLeft150", toolTipHTML: javaSpliteratorsHTML},
    {key: "Java-Streams", desc: "Streams", group:"Java API", category: "simpleTextLeft150", toolTipHTML: javaStreamsHTML},

    {key: "Java-Semantics", desc: "Semantics", isGroup: true, group: "Java", expand: false, category: "grid3"},

    {key: "Java-OOPS", desc: "OOPS", isGroup: true, group: "Java-Semantics", category: "tree", expand: true},
    {key: "Java-OOPS-Encapsulation", desc: "Encapsulation", group:"Java-OOPS", category: "simpleTextLeft150", toolTipHTML: javaEncapsulationHTML},
    {key: "Java-OOPS-Abstraction", desc: "Abstraction", group:"Java-OOPS", category: "simpleTextLeft150", toolTipHTML: javaAbstractionHTML},
    {key: "Java-OOPS-Inheritance", desc: "Inheritance", group:"Java-OOPS", category: "simpleTextLeft150", toolTipHTML: javaInheritanceHTML},
    {key: "Java-OOPS-Polymorphism", desc: "Polymorphism", group:"Java-OOPS", category: "simpleTextLeft150", toolTipHTML: javaPolymorphismHTML},


    {key: "Java-Design-Patterns", desc: "Design Patterns", isGroup: true, group: "Java-Semantics", category: "tree", expand: false},

    {key: "Java-DP-Creational", desc: "Creational", isGroup: true, group: "Java-Design-Patterns", category: "tree", expand: false},
    {key: "Java-DP-Singleton", desc: "Singleton", group:"Java-DP-Creational", category: "simpleTextLeft150", toolTipHTML: javaDPSingletonHTML},
    {key: "Java-DP-Factory", desc: "Factory", group:"Java-DP-Creational", category: "simpleTextLeft150", toolTipHTML: javaDPFactoryHTML},
    {key: "Java-DP-AbstractFactory", desc: "Abstract Factory", group:"Java-DP-Creational", category: "simpleTextLeft150", toolTipHTML: javaDPAbstractFactoryHTML},
    {key: "Java-DP-Builder", desc: "Builder", group:"Java-DP-Creational", category: "simpleTextLeft150", toolTipHTML: javaDPBuilderHTML},
    {key: "Java-DP-Prototype", desc: "Prototype", group:"Java-DP-Creational", category: "simpleTextLeft150", toolTipHTML: javaDPPrototypeHTML},

    {key: "Java-DP-Structural", desc: "Structural", isGroup: true, group: "Java-Design-Patterns", category: "tree", expand: false},
    {key: "Java-DP-Adapter", desc: "Adapter", group:"Java-DP-Structural", category: "simpleTextLeft150", toolTipHTML: javaDPAdapterHTML},
    {key: "Java-DP-Composite", desc: "Composite", group:"Java-DP-Structural", category: "simpleTextLeft150", toolTipHTML: javaDPCompositeHTML},
    {key: "Java-DP-Proxy", desc: "Proxy", group:"Java-DP-Structural", category: "simpleTextLeft150", toolTipHTML: javaDPProxyHTML},
    {key: "Java-DP-FlyWeight", desc: "FlyWeight", group:"Java-DP-Structural", category: "simpleTextLeft150", toolTipHTML: javaDPFlyWeightHTML},
    {key: "Java-DP-Facade", desc: "Facade", group:"Java-DP-Structural", category: "simpleTextLeft150", toolTipHTML: javaDPFacadeHTML},
    {key: "Java-DP-Decorator", desc: "Decorator", group:"Java-DP-Structural", category: "simpleTextLeft150", toolTipHTML: javaDPDecoratorHTML},

    {key: "Java-DP-Behavioral", desc: "Behavioral", isGroup: true, group: "Java-Design-Patterns", category: "tree", expand: false},
    {key: "Java-DP-Strategy", desc: "Strategy", group:"Java-DP-Behavioral", category: "simpleTextLeft150", toolTipHTML: javaDPStrategyHTML},

    {key: "Java-Solid", desc: "Solid Principles", isGroup: true, group: "Java-Semantics", category: "tree", expand: false},
    {key: "Java-SP-singleResp", desc: "Single Responsibility", group:"Java-Solid", category: "simpleTextLeft150", toolTipHTML: javaSPSingleRespHTML},
    {key: "Java-SP-OpenClose", desc: "Open Close", group:"Java-Solid", category: "simpleTextLeft150", toolTipHTML: javaSPOpenCloseHTML},
    {key: "Java-SP-LiskovSubs", desc: "Liskov Substitution", group:"Java-Solid", category: "simpleTextLeft150", toolTipHTML: javaSPLiskovSubHTML},
    {key: "Java-SP-Interface-Segregation", desc: "Interface Segregation", group:"Java-Solid", category: "simpleTextLeft150", toolTipHTML: javaSPInterfaceSegregationHTML},
    {key: "Java-SP-DI", desc: "Dependency Inversion", group:"Java-Solid", category: "simpleTextLeft150", toolTipHTML: javaSPDIHTML},

//    {key: "Execution", desc: "Execution", category: "simple", group: "System", img: "img/tools.svg", toolTipHTML: executionHTML},


    {key: "Meta", desc: "Meta", category: "grid3", group: "Memory", isGroup: true,},
    {key: "class1", desc: "cls1", category: "object", group: "Meta", fill: "#3A5262"},
    {key: "class2", desc: "cls2", category: "object", group: "Meta", fill: "#3A5262"},

    {key: "Heap", desc: "Heap", category: "grid3", group: "Memory", isGroup: true,},
    {key: "object1", desc: "obj1", category: "object", group: "Heap", fill: "Transparent"},
    {key: "object2", desc: "obj2", category: "object", group: "Heap", fill: "Transparent"},

    {key: "Stack", desc: "Stack", category: "grid3", group: "Memory", isGroup: true,},
    {key: "thread1", desc: "thread1", category: "stack", group: "Stack", items: ["", "ref1", "var1", "method1"]},

    {key: "Java VM", desc: "Java VM", isGroup: true, expand: false, category: "tree", group: "JDK"},

    {key: "Java Class Loader", desc: "Class Loader", isGroup: true, expand: true, category: "tree", group: "Java VM"},
    {key: "Java Loading", desc: "Loading", isGroup: true, expand: false, category: "tree90", group: "Java Class Loader"},
    {key: "Java Bootstrap Loader", desc: "Bootstrap Loader", category: "simpleText150", group: "Java Loading", width: 120},
    {key: "Java Extension Loader", desc: "Extension Loader", category: "simpleText150", group: "Java Loading", width: 120},
    {key: "Java Application Loader", desc: "Application Loader", category: "simpleText150", group: "Java Loading", width: 120},

    {key: "Java Linking", desc: "Linking", isGroup: true, expand: false, category: "tree90", group: "Java Class Loader"},
    {key: "Java Verify", desc: "Verify", category: "simpleText",  group: "Java Linking"},
    {key: "Java Prepare", desc: "Prepare", category: "simpleText",  group: "Java Linking"},
    {key: "Java Resolve", desc: "Resolve", category: "simpleText",  group: "Java Linking"},

    {key: "Java Initialization", desc: "Initialization", category: "simple", group: "Java Class Loader"},

    {key: "Execution Engine", desc: "Exec Engine", isGroup: true, expand: true, category: "grid3", group: "Java VM"},
    {key: "Interpreter", desc: "Interpreter", category: "simple",  group: "Execution Engine"},
    {key: "JIT Compiler", desc: "JIT Compiler", category: "simple",  group: "Execution Engine"},
    {key: "Garbage collector", desc: "Garbage Collector", category: "simple",  group: "Execution Engine"},


];

let javaLinkDataArray = [

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

    {from:"Java-Statements", to:"Java-Literals", category: "menuLink"},
    {from:"Java-Statements", to:"Java-Identifiers", category: "menuLink"},
    {from:"Java-Statements", to:"Java-Datatypes", category: "menuLink"},


    { from: "Add1", fromPort: "Out", to: "Subtract1", toPort: "A" },


    {from:"Java-Install", to: "Java-Syntax", category: "simple"},
    {from:"Java-Input", to: "Java-Process", category: "simple"},
    {from:"Java-Process", to: "Java-Output", category: "simple"},
    {from:"Initialization", to: "Process", category: "simple"},
//    {from:"Java-Semantics", to: "Java-Solid", category: "simple"},
{key: "scToCompiler", from: "Java Source Code", to: "Java Compiler", category: "simple"},
    {key: "compilerToBC", from: "Java Compiler", to: "Java Byte Code", category: "simple"},
    {key: "bcTojre", from: "Java Byte Code", to: "Java RE", category: "simple"},
    {key: "jlTolinking", from: "Java Loading", to: "Java Linking", category: "simple"},
    {key: "linkingToInit", from: "Java Linking", to: "Java Initialization", category: "simple"},
    {key: "bootstrapToextension", from: "Java Bootstrap Loader", to: "Java Extension Loader", category: "simple"},
    {key: "extensionToApplication", from: "Java Extension Loader", to: "Java Application Loader", category: "simple"},
    {key: "verifyToPrepare", from: "Java Verify", to: "Java Prepare", category: "simple"},
    {key: "prepareToResolve", from: "Java Prepare", to: "Java Resolve", category: "simple"},
];
let nodeDataArray = [];
let linkDataArray = [];
nodeDataArray = nodeDataArray.concat(javaNodeDataArray);
linkDataArray = linkDataArray.concat(javaLinkDataArray);