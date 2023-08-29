let AWSNodeDataArray = [

    {key: "AWS", color: "LightSteelBlue", isGroup: true, category: "tree", img: "assets/img/aws.png"},
    {key: "Abstract", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", value: "Overview",group: "AWS"},

    {key: "Log In", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree", group: "AWS"},
    {key: "GUI", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "CLI", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "SSH", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "PuTTY", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},

    {key: "Gateway", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree", group: "AWS"},
    {key: "Shell", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Gateway"},
    {key: "Applications", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Gateway",
        items: [{text: "Browser", color: "LightBlue"},
            {text: "IDE", color: "LightBlue"},
            {text: "Explorer", color: "LightBlue"}]},
    {key: "System Software", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Gateway"},
    {key: "User Processes", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Gateway"},
    {key: "System Utilities", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Gateway"},
    {key: "Compilers/Interpreters", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Gateway"},


    {key: "Services", color: "LightSteelBlue", isGroup: true, expand: true, category: "grid", group: "AWS"},
    {key: "System Call Interface", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Services"},
    {key: "Storage Management", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Services"},
    {key: "Memory Management", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Services"},
    {key: "Process Management", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Services"},


    {key: "Network Drivers", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Services"},
    {key: "IO Drivers", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Services"},

    {key: "Maintenance", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree90", group: "AWS"},
    {key: "Motherboard", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree90", group: "Maintenance"},
    {key: "CPU", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Motherboard"},
    {key: "Memory", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Motherboard"},
    {key: "Storage", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Maintenance"},
    {key: "Ethernet", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Maintenance"},
    {key: "IO", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Maintenance"},
];

let AWSLinkDataArray = [
    {name: "logInToUS", from: "Log In", to: "Gateway", category: "simplelink"},
    {name: "USToKS", from: "Gateway", to: "Services", category: "simplelink"},

    {name:"ksToh", from:"Services", to: "Maintenance", category: "simplelink" },

    {name:"sToM", from:"Storage", to: "Memory", category: "simplelink" },
    {name:"mToCPU", from:"Memory", to: "CPU", category: "simplelink" },

];