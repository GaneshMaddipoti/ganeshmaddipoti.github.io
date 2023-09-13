let cloudComputingHTML = `
            <b>What is</b><br/>
            Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. <br/>
            Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, <br/>
            such as computing power, storage, and databases, on an as-needed basis from a cloud provider like AWS, GCP, Azure. <br/>
            <br/><b>Who is using</b><br/>
            Organizations of every type, size, and industry are using the cloud for a wide variety of use cases, <br/>
            such as data backup, software development and testing, big data analytics, and customer-facing web applications. <br/>
            <br/><b>Benefits</b><br/>
            Agility <br/>
            Elasticity <br/>
            Cost Savings <br/>
            Deploy Globally in Minutes <br/>
            <br/><b>Types</b><br/>
            Infrastructure as a service (IaaS) <br/>
            Platform as a service (PaaS) <br/>
            Software as a service (SaaS) <br/>
        `;

let awsHTML = `
    AWS - (Amazon Web Services) is a cloud provider
    Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. <br/>
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
    35 Local Zones, 29 Wavelength Zones, 115 direct connect locations. <br/>
    400+ Edge locaitons, 10+ Regional caches, in 90+ cities across 40+ countries. <br/>
</ul>
`;

let mgmtConsoleHTML = `
    Protected by password + MFA <br/>
    Access keys are generated via management console <br/>
    Users manage their access keys, they are like password, and not to be shared <br/>
    Access Key ID like username, Secret Access Key like password <br/>
`;
let awsCliHTML = `Protected by Access Keys <br/>`;
let awsSdkHTML = `Protected by Access Keys <br/>`;

let cloudShellHTML = `
`;

let iamHTML = `
    IAM - Identity and Access Management Service <br/>
    Root account is created by default, and should not be used or shared <br/>
    Root account is used to set up users and groups <br/>   
    AWS use the least privilege principle : Don't give more permissions than needed <br/>
    
`;
let policyHTML = `
    Users or Groups can be assigned JSON documents called policies/permissions <br/>
    <pre>
    {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:Describe*",
                "ec2:GetConsole*"
            ],
            "Resource": "*"
        }
    ]
    }
</pre>
    In AWS, we can have password policy (min length, char types, change pwd) <br/>   
`;
let securityCredsHTML = `
    These are available for root account and users but not for groups <br/>
    With MFA, we can protect root account, IAM user accounts. (password + security device) <br/>
    MFA types - Authenticator(Mobile), Authy(multiDevice), Yubikey(physical) <br/>
`;
let iAmRolesHTML = `
    Some AWS resources need to perform on behalf of user <br/>
    To do that, we will assign permissions to AWS services with IAM Roles <br/>
    Common Roles : <br/>
    EC2 Instance Roles <br/>
    Lambda Function Roles <br/>
    Roles for cloud formation <br/>
`;

let groupsHTML = `
    Groups only contain users, not other groups <br/>
`;

let usersHTML = `
    Users are people within an organization, and can be grouped <br/>
    Users don't have to belong to a group <br/>
    Users can belong to multiple groups <br/>
    Users will inherit groups policy, otherwise its own inline policy applied <br/>
    
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
    Every Region will act independently of the others, and each will contain at least 3 Availability Zones. <br/>
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
let ec2HTML = `
    EC2 stands for elastic compute cloud - IaaS <br/>
    It has the capability of : <br/>
    1) Renting Virtual Machines (EC2) <br/>
    2) Storing data in virtual drivers (EBS) <br/>
    3) Distributing load across machines (ELB) <br/>
    4) Scaling the services using an auto-scaling group (ASG) <br/><br/>    
    EC2 Sizing and configuration options <br/>
    1) Operating System: Linux, Windows, Mac <br/>
    2) How much computer power and cores (CPU) <br/>
    3) How much Random access memory (RAM) <br/>
    4) How much Storage space (EBS, EFS, EC2 Instance Store) <br/>
    5) Network card, Public IP <br/>
    6) Firewalls rules : security groups <br/>
    7) Bootstrap Script (configure at first launch) : EC2 user data <br/><br/>
    EC2 Instance Types : <br/>
    General purpose, compute optimized, memory optimized, storage optimized, accelerated computing, instance features, measing instance performance <br/>
    Ex : m5.8xlarge - meaning general purpose 5th generation, 8x size machine. <br/>    
    1) t2.micro - 1 cpu, 1GB RAM, Low to moderate n/w speed <br/>
    2) t2.xlarge - 4 cpu, 16GB RAM, moderate n/w speed <br/>
    3) c5d.4xlarge - 16 cpu, 32GB RAM, 10 Gbps <br/>
    4) r5.16xlarge - 64 cpu, 512GB RAM, 20 Gbps <br/>
    5) m5.8xlarge - 32 cpu, 128GB RAM, 10 Gbps <br/> <br/>
    Key pair(Pem/PPK) is required to create, in order to securely connect to EC2 instance using SSH <br/>
    Security groups are firewall rules that control the traffic for your instance <br/>
    Security groups works by referring IP address/port, and other security groups <br/>
    Security groups can be attached to multiple instances, an instance can have multiple security groups <br/>
    Security groups are locked down to region/VPC combination. <br/>
    All inbound traffic is blocked and outbound traffic is allowed by default <br/>
    EC2 purchasing options <br/>
    On-demand Instances: short workload, predictable pricing, pay by second <br/>
    Reserved: long workloads <br/>
    Saving plans: 1-3 years long workloads <br/>
    Spot instances: short workloads, cheap, can lose instances <br/>
    Dedicated Hosts: book an entire physical server, control instance placement <br/>
    Dedicated Instances: no other use share your hardware <br/>
    Capacity Reservations: reserve a capacity in AZ <br/>    
`;
let scalabilityHTML = `
    Scalability means that the application/system can handle greater loads by adapting.
    1) Vertical Scaling : Increasing the size of the instance.
    2) Horizontal Scaling : Increasing the number of instances.
    
    Availability means that the application/system is available in case of failures.
    It can be achieved by running the application/system in multiple AZ.
    
    Autoscaling, Load balancing comes under these.    
`;

let loadBalancingHTML = `
    ELB - Elastic Load Balancer managed by AWS.
    It is a server, which forwards/spread the traffic it received to multiple downstream EC2 instances.
    It exposes single point of access (DNS) to the application.
    It handles health status of all instances
    Enforce stickiness with cookies.
    Provide SSL termination of the application.
    Its integrated with Route 53, auto scaling groups, WAF, Global Accelerator, etc..
    1) Classic Load Balancer
    2) Application load balancer (HTTP, HTTPS, Websocket) - Layer 7
    3) Network load balancer (TCP, TLS, UDP)
    4) Gateway load balancer (IP)
    Load balancers can be setup as private and public.
`;

let albHTML = `
    Routing tables to different target groups.
    1) Based on path
    2) Based on hostname
    3) Based on query string
    These are used in micro services and container based applications (Docker, ECS)
    It has part mapping feature to redirect to dynamic port in ECS.    
`;



let AWSNodeDataArray = [

    {key: "Cloud Computing", color: "WhiteSmoke", isGroup: true, category: "tree", img: "assets/img/gen/gen-cloud.svg", toolTipHTML: cloudComputingHTML},
    {key: "Users", group:"Cloud Computing", img: "assets/img/gen/gen-users.svg", category: "picTemplate",},
    // {key: "End Users", group:"Cloud Computing", img: "assets/img/gen/gen-users.svg", category: "picTemplate",},

    {key: "Internet", color: "WhiteSmoke", group: "Cloud Computing", isGroup: true, category: "tree", img: "assets/img/gen/gen-web.svg"},
    {key: "Client", group:"Internet", img: "assets/img/gen/gen-client.svg", category: "picTemplate", toolTipHTML: awsCliHTML},
    {key: "Mobile", group:"Internet", img: "assets/img/gen/gen-mobile.svg", category: "picTemplate", toolTipHTML: awsCliHTML},



    {key: "Login", color: "WhiteSmoke", group: "Cloud Computing", isGroup: true, category: "tree", img: "assets/img/aws/security-service.svg"},
    {key: "Management Console", group:"Login", img: "assets/img/gen/gen-dashboard.svg", category: "picTemplate", toolTipHTML: mgmtConsoleHTML},
    {key: "AWS CLI", group:"Login", img: "assets/img/aws/cli.svg", category: "picTemplate", toolTipHTML: awsCliHTML},
    {key: "AWS SDK", group:"Login", img: "assets/img/aws/sdk.svg", category: "picTemplate", toolTipHTML: awsSdkHTML},
    {key: "Cloud Shell", group:"Login", img: "assets/img/aws/cloud-shell.svg", category: "picTemplate", toolTipHTML: awsSdkHTML},


    {key: "AWS", color: "WhiteSmoke", group: "Cloud Computing", isGroup: true, category: "tree", img: "assets/img/aws/aws-group.svg", toolTipHTML: awsHTML},


    {key: "IAM", color: "Turquoise", category: "grid", isGroup: true, group: "AWS", img: "assets/img/aws/iam.svg", toolTipHTML: iamHTML, expand: false},
    {key: "Individual User", group:"IAM", img: "assets/img/aws/user.svg", category: "picTemplate",},
    {key: "Security Credentials", group:"IAM", img: "assets/img/gen/gen-notebook.svg", category: "picTemplate", toolTipHTML: securityCredsHTML},
    {key: "IAM Roles", group:"IAM", img: "assets/img/gen/gen-notebook.svg", category: "picTemplate", toolTipHTML: iAmRolesHTML},
    {key: "Group: developers", color: "Turquoise", category: "grid", isGroup: true, group: "IAM", toolTipHTML: groupsHTML,},

    {key: "Policy", group:"Group: developers", img: "assets/img/gen/gen-notebook.svg", category: "picTemplate", toolTipHTML: policyHTML},
    {key: "deverloper1", group:"Group: developers", img: "assets/img/aws/user.svg", category: "picTemplate", toolTipHTML: usersHTML},
    {key: "deverloper2", group:"Group: developers", img: "assets/img/aws/user.svg", category: "picTemplate", toolTipHTML: usersHTML},

    {key: "Regional Edge Cache", group:"AWS", img: "assets/img/aws/edge-location.svg", category: "picTemplate", toolTipHTML: regionalEdgeCacheHTML},
    {key: "Edge Location", group:"AWS", img: "assets/img/aws/edge-location.svg", category: "picTemplate", toolTipHTML: edgeLocationsHTML},


    {key: "Local Zone", color: "Turquoise", category: "tree", isGroup: true, group: "AWS", img: "assets/img/aws/local-zone.svg", toolTipHTML: localZonesHTML},
    {key: "Wavelength Zone", color: "Turquoise", category: "tree", isGroup: true, group: "AWS", img: "assets/img/aws/wavelength-zone.svg", toolTipHTML: waveLengthZonesHTML},
    {key: "Outposts", color: "Turquoise", category: "tree", isGroup: true, group: "AWS", img: "assets/img/aws/outposts.svg", toolTipHTML: outpostsHTML},


    {key: "Region", color: "Turquoise", category: "tree", isGroup: true, group: "AWS", img: "assets/img/aws/region-group.svg", toolTipHTML: regionHTML},
    {key: "VPC", color: "MediumPurple", category: "grid", isGroup: true, group: "Region", img: "assets/img/aws/vpc-group.svg"},


    {key: "Availability Zone1", color: "Turquoise", category: "tree", isGroup: true, group: "VPC",toolTipHTML: availabilityZoneHTML},
    {key: "Availability Zone2", color: "Turquoise", category: "tree", isGroup: true, group: "VPC", toolTipHTML: availabilityZoneHTML},

    {key: "Public Subnet", color: "YellowGreen", category: "tree", isGroup: true, group: "Availability Zone1", img: "assets/img/aws/pubsub-group.svg"},
    {key: "EC2 Servers", category: "tree", isGroup: true,  group: "Public Subnet", img: "assets/img/aws/app-servers.svg", toolTipHTML: ec2HTML},


    {key: "Private Subnet1", color: "Turquoise", category: "tree", isGroup: true, group: "Availability Zone1", img: "assets/img/aws/prisub-group.svg"},
    {key: "App Servers", category: "picTemplate", group: "Private Subnet1", img: "assets/img/aws/app-servers.svg"},

    {key: "Private Subnet2", color: "Turquoise", category: "tree", isGroup: true, group: "Availability Zone1", img: "assets/img/aws/prisub-group.svg"},
    {key: "DB Instances", category: "picTemplate", group: "Private Subnet2", img: "assets/img/aws/sql-server.svg"},

    {key: "Public Subnet1", color: "YellowGreen", category: "tree", isGroup: true, group: "Availability Zone2", img: "assets/img/aws/pubsub-group.svg"},
    {key: "EC2 Servers", category: "tree", isGroup: true,  group: "Public Subnet1", img: "assets/img/aws/app-servers.svg"},

    {key: "Private Subnet3", color: "Turquoise", category: "tree", isGroup: true, group: "Availability Zone2", img: "assets/img/aws/prisub-group.svg"},
    {key: "App Servers", category: "picTemplate", group: "Private Subnet3", img: "assets/img/aws/app-servers.svg"},

    {key: "Private Subnet4", color: "Turquoise", category: "tree", isGroup: true, group: "Availability Zone2", img: "assets/img/aws/prisub-group.svg"},
    {key: "DB Instances", category: "picTemplate", group: "Private Subnet4", img: "assets/img/aws/sql-server.svg"},

];

let AWSLinkDataArray = [
    { name: "aztoaz", from: "Availability Zone1", to: "Availability Zone2", category: "thickLink", channel: "fiber", desc: "low latency resilient fiber connectivity"},
    { name: "usersToLogin", from: "Users", to: "Login", category: "simplelink"},
    { name: "usersToInternet", from: "Users", to: "Internet", category: "simplelink"},
    { name: "loginToIam", from: "Login", to: "AWS", category: "simplelink"},
    { name: "internetToEdgeLocation", from: "Internet", to: "AWS", category: "simplelink"},


    { name: "elTorec", from: "Edge Location", to: "Regional Edge Cache", category: "byDirLink"},
    { name: "recTows", from: "Regional Edge Cache", to: "EC2 Servers", category: "byDirLink"},

];