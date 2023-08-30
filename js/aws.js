let awsHTML = `
Test <br/>
Test <br/>
`;


let AWSNodeDataArray = [

    {key: "AWS", color: "WhiteSmoke", isGroup: true, category: "tree", img: "assets/img/aws/aws-group.svg", toolTipHTML: awsHTML},
    {key: "Region", color: "Turquoise", category: "tree", isGroup: true, group: "AWS", img: "assets/img/aws/region-group.svg"},
    {key: "VPC", color: "MediumPurple", category: "grid", isGroup: true, group: "Region", img: "assets/img/aws/vpc-group.svg"},


    {key: "Availability Zone1", color: "Turquoise", category: "tree", isGroup: true, group: "VPC",},
    {key: "Availability Zone2", color: "Turquoise", category: "tree", isGroup: true, group: "VPC",},

    {key: "Public Subnet", color: "YellowGreen", category: "tree", isGroup: true, group: "Availability Zone1", img: "assets/img/aws/pubsub-group.svg"},
    {key: "Web Servers", category: "picTemplate", group: "Public Subnet", img: "assets/img/aws/app-servers.svg"},

    {key: "Private Subnet1", color: "Turquoise", category: "tree", isGroup: true, group: "Availability Zone1", img: "assets/img/aws/prisub-group.svg"},
    {key: "App Servers", category: "picTemplate", group: "Private Subnet1", img: "assets/img/aws/app-servers.svg"},

    {key: "Private Subnet2", color: "Turquoise", category: "tree", isGroup: true, group: "Availability Zone1", img: "assets/img/aws/prisub-group.svg"},
    {key: "DB Instances", category: "picTemplate", group: "Private Subnet2", img: "assets/img/aws/sql-server.svg"},

    {key: "Public Subnet1", color: "YellowGreen", category: "tree", isGroup: true, group: "Availability Zone2", img: "assets/img/aws/pubsub-group.svg"},
    {key: "Web Servers", category: "picTemplate", group: "Public Subnet1", img: "assets/img/aws/app-servers.svg"},

    {key: "Private Subnet3", color: "Turquoise", category: "tree", isGroup: true, group: "Availability Zone2", img: "assets/img/aws/prisub-group.svg"},
    {key: "App Servers", category: "picTemplate", group: "Private Subnet3", img: "assets/img/aws/app-servers.svg"},

    {key: "Private Subnet4", color: "Turquoise", category: "tree", isGroup: true, group: "Availability Zone2", img: "assets/img/aws/prisub-group.svg"},
    {key: "DB Instances", category: "picTemplate", group: "Private Subnet4", img: "assets/img/aws/sql-server.svg"},

];

let AWSLinkDataArray = [


];