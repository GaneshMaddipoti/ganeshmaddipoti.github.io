let awsHTML = `
    It has to have a global network of infrastructure to run and manage  <br/>
    its many growing cloud services that support customers around the world. <br/>
    AWS GlobalInfrastructure components are <br/>
    <ul>
        <li>Regions</li>
        <li>Availability Zones</li>
        <li>Edge Locations</li>
        <li>Regional Edge Caches</li>
        <li>Local Zones</li>
        <li>Wavelength Zones</li>
        <li>Outposts</li>
    </ul>
    Currently servicing in 32 Regions and 102 Availability Zones.<br/>
    with 4 additional Regions and 12 additional AZs planned. <br/>  
    AWS GovCloud is an isolated region in the U.S. that is only available to U.S. government agencies <br/>
</ul>
`;
let availabilityZoneHTML = `
    AZs are essentially the physical data centers of AWS <br/>
    This is where the actual compute, storage, network, and database resources are hosted <br/> 
    that we as consumers provision within our Virtual Private Clouds (VPCs) <br/>
    It's likely that multiple data centers located close together form a single availability zone <br/>
    Each AZ will always have at least one other AZ that is geographically located within the same area, usually a city, <br/>
    linked by highly resilient and very low latency private fiber-optic connections. <br/> 
    Each AZ will be isolated from the others using separate power and network connectivity that minimizes impact to other AZs <br/>
    

`;
let regionHTML = `
    Its localized geographical grouping of multiple AZs <br/>
    Every Region will act independently of the others, and each will contain at least two Availability Zones. <br/>
    Having global regions also allows for compliance with regulations, laws, <br/> 
    and governance relating to data storage (at rest and in transit). <br/>
    Similarly to how utilizing multiple AZs within a region creates a level of high availability, <br/> 
    the same can be applied to utilizing multiple regions.  <br/>
    Interestingly, not all AWS services are available in every region. <br/>
    Some services are classed as global services, such as AWS Identity & Access Management (IAM) <br/> 
    or Amazon CloudFront, which means that these services are not tied to a specific region. <br/>
    Regions have both a ‘friendly’ name, indicating a location that can be viewed within the Management Console <br/> 
    and a Code Name that is used when referencing regions programmatically, for example when using the AWS CLI. <br/>
    For example, the AZs within the eu-west-1 region (EU Ireland), are: eu-west-1a, eu-west-1b, eu-west-1c <br/>
`;
let edgeLocationsHTML = `
    Edge Locations are AWS sites deployed in major cities and highly populated areas across the globe. <br/>
    They far outnumber the number of availability zones available.  <br/>
    They are used by AWS services such as AWS CloudFront and AWS Lambda@Edge (currently in Preview) to cache data <br/> 
    and reduce latency for end-user access by using the Edge Locations as a global Content Delivery Network (CDN). <br/>
    They are used to cache the data that is located far from customer <br/>
`;
let regionalEdgeCacheHTML = `
    These sit between your CloudFront Origin servers and the Edge Locations.<br/>
    A Regional Edge Cache has a larger cache-width than each of the individual Edge Locations, <br/>
    and because data expires from the cache at the Edge Locations, the data is retained at the Regional Edge Caches. <br/>
    Therefore, when data is requested at the Edge Location that is no longer available, <br/>
    the Edge Location can retrieve the cached data from the Regional Edge Cache instead of the Origin servers <br/>
`;
let localZonesHTML = `
    a new type of infrastructure deployment designed to place core AWS Compute, Storage, Networking, and Database services <br/> 
    near highly populated areas such as major cities that do not already have an AWS Region nearby. <br/>
    AWS Local Zones allow customers to deploy resources and applications that require single-digit millisecond latency <br/>
    They are also useful where data residency requirements  may dictate that data be stored within the area<br/>
    All AWS Local Zones are connected to a parent Region, allowing you to seamlessly connect to<br/> 
    all other AWS services via a secure, dedicated high-speed connection. <br/> 
`;
let waveLengthZonesHTML = `
    Much like AWS Local Zones, AWS Wavelength Zones also place core AWS services closer to large end user bases <br/> 
    and are connected to a parent Region via a secure, dedicated high-speed connection. <br/>
    However, AWS Wavelength Zones are embedded within 5G mobile broadband networks <br/>
    and are deployed within the data centers of large telecommunications providers. <br/>
    Deploying AWS resources such as VPC subnets, EC2 instances, and EBS volumes to an AWS Wavelength Zone allows <br/> 
    end users to connect to these resources without ever leaving the mobile provider’s network.<br/>
`;
let outpostsHTML = `
    AWS Outposts brings the capabilities of the AWS cloud to your on-premises data center. <br/> 
    This includes the same hardware used by AWS within their data centers, allowing you to use native AWS services, <br/>
    including the same tools and APIs you would use when running your infrastructure within AWS. <br/>
    Outposts may be connected to AWS using either a Direct Connect or VPN connection. <br/> 
    Outposts allow you to run AWS services such as EC2, ECS, EKS, S3, RDS, and EMR on-premises. <br/>
    AWS will ensure your Outposts are patched and updated as needed. <br/> 
`;



let AWSNodeDataArray = [



    {key: "AWS", color: "WhiteSmoke", group: "Cloud Computing", isGroup: true, category: "tree", img: "assets/img/aws/aws-group.svg", toolTipHTML: awsHTML},

    {key: "Regional Edge Cache", group:"AWS", img: "assets/img/aws/edge-location.svg", category: "picTemplate", toolTipHTML: regionalEdgeCacheHTML},
    {key: "Edge Location", group:"AWS", img: "assets/img/aws/edge-location.svg", category: "picTemplate", toolTipHTML: edgeLocationsHTML},

    {key: "Region", color: "Turquoise", category: "tree", isGroup: true, group: "AWS", img: "assets/img/aws/region-group.svg", toolTipHTML: regionHTML},
    {key: "VPC", color: "MediumPurple", category: "grid", isGroup: true, group: "Region", img: "assets/img/aws/vpc-group.svg"},


    {key: "Availability Zone1", color: "Turquoise", category: "tree", isGroup: true, group: "VPC",toolTipHTML: availabilityZoneHTML},
    {key: "Availability Zone2", color: "Turquoise", category: "tree", isGroup: true, group: "VPC", toolTipHTML: availabilityZoneHTML},

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
    { name: "aztoaz", from: "Availability Zone1", to: "Availability Zone2", category: "thickLink", channel: "fiber", desc: "low latency resilient fiber connectivity"},
    { name: "recTows", from: "Regional Edge Cache", to: "Web Servers", category: "byDirLink"},
    { name: "elTorec", from: "Edge Location", to: "Regional Edge Cache", category: "byDirLink"},

];