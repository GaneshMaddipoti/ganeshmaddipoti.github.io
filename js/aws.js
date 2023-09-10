let cloudComputingHTML = `
            <b>What is</b>
            Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. 
            Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, 
            such as computing power, storage, and databases, on an as-needed basis from a cloud provider like AWS, GCP, Azure. 
            <b>Who is using</b>
            Organizations of every type, size, and industry are using the cloud for a wide variety of use cases, 
            such as data backup, software development and testing, big data analytics, and customer-facing web applications. 
            <b>Benefits</b>
            Agility 
            Elasticity 
            Cost Savings 
            Deploy Globally in Minutes 
            <b>Types</b>
            Infrastructure as a service (IaaS) 
            Platform as a service (PaaS) 
            Software as a service (SaaS) 
        `;

let awsHTML = `
    AWS - (Amazon Web Services) is a cloud provider
    Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. 
    It has to have a global network of infrastructure to run and manage  
    its many growing cloud services that support customers around the world. 
    AWS GlobalInfrastructure components are 
    <ul>
        <li>Regions</li>
        <li>Availability Zones</li>
        <li>Edge Locations</li>
        <li>Regional Edge Caches</li>
        <li>Local Zones</li>
        <li>Wavelength Zones</li>
        <li>Outposts</li>
    </ul>
    Currently servicing in 32 Regions and 102 Availability Zones.
    with 4 additional Regions and 12 additional AZs planned.   
    AWS GovCloud is an isolated region in the U.S. that is only available to U.S. government agencies 
    35 Local Zones, 29 Wavelength Zones, 115 direct connect locations. 
    400+ Edge locaitons, 10+ Regional caches, in 90+ cities across 40+ countries. 
</ul>
`;

let mgmtConsoleHTML = `
    Protected by password + MFA 
    Access keys are generated via management console 
    Users manage their access keys, they are like password, and not to be shared 
    Access Key ID like username, Secret Access Key like password 
`;
let awsCliHTML = `Protected by Access Keys `;
let awsSdkHTML = `Protected by Access Keys `;

let cloudShellHTML = `
`;

let iamHTML = `
    IAM - Identity and Access Management Service 
    Root account is created by default, and should not be used or shared 
    Root account is used to set up users and groups    
    AWS use the least privilege principle : Don't give more permissions than needed 
    
`;
let policyHTML = `
    Users or Groups can be assigned JSON documents called policies/permissions 
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
    In AWS, we can have password policy (min length, char types, change pwd)    
`;
let securityCredsHTML = `
    These are available for root account and users but not for groups 
    With MFA, we can protect root account, IAM user accounts. (password + security device) 
    MFA types - Authenticator(Mobile), Authy(multiDevice), Yubikey(physical) 
`;
let iAmRolesHTML = `
    Some AWS resources need to perform on behalf of user 
    To do that, we will assign permissions to AWS services with IAM Roles 
    Common Roles : 
    EC2 Instance Roles 
    Lambda Function Roles 
    Roles for cloud formation 
`;

let groupsHTML = `
    Groups only contain users, not other groups 
`;

let usersHTML = `
    Users are people within an organization, and can be grouped 
    Users don't have to belong to a group 
    Users can belong to multiple groups 
    Users will inherit groups policy, otherwise its own inline policy applied 
    
`;

let availabilityZoneHTML = `
    AZs are essentially the physical data centers of AWS 
    This is where the actual compute, storage, network, and database resources are hosted  
    that we as consumers provision within our Virtual Private Clouds (VPCs) 
    It's likely that multiple data centers located close together form a single availability zone 
    Each AZ will always have at least one other AZ that is geographically located within the same area, usually a city, 
    linked by highly resilient and very low latency private fiber-optic connections.  
    Each AZ will be isolated from the others using separate power and network connectivity that minimizes impact to other AZs 
    

`;
let regionHTML = `
    Its localized geographical grouping of multiple AZs 
    Every Region will act independently of the others, and each will contain at least 3 Availability Zones. 
    Having global regions also allows for compliance with regulations, laws,  
    and governance relating to data storage (at rest and in transit). 
    Similarly to how utilizing multiple AZs within a region creates a level of high availability,  
    the same can be applied to utilizing multiple regions.  
    Interestingly, not all AWS services are available in every region. 
    Some services are classed as global services, such as AWS Identity & Access Management (IAM)  
    or Amazon CloudFront, which means that these services are not tied to a specific region. 
    Regions have both a ‘friendly’ name, indicating a location that can be viewed within the Management Console  
    and a Code Name that is used when referencing regions programmatically, for example when using the AWS CLI. 
    For example, the AZs within the eu-west-1 region (EU Ireland), are: eu-west-1a, eu-west-1b, eu-west-1c 
`;
let edgeLocationsHTML = `
    Edge Locations are AWS sites deployed in major cities and highly populated areas across the globe. 
    They far outnumber the number of availability zones available.  
    They are used by AWS services such as AWS CloudFront and AWS Lambda@Edge (currently in Preview) to cache data  
    and reduce latency for end-user access by using the Edge Locations as a global Content Delivery Network (CDN). 
    They are used to cache the data that is located far from customer 
`;
let regionalEdgeCacheHTML = `
    These sit between your CloudFront Origin servers and the Edge Locations.
    A Regional Edge Cache has a larger cache-width than each of the individual Edge Locations, 
    and because data expires from the cache at the Edge Locations, the data is retained at the Regional Edge Caches. 
    Therefore, when data is requested at the Edge Location that is no longer available, 
    the Edge Location can retrieve the cached data from the Regional Edge Cache instead of the Origin servers 
`;
let localZonesHTML = `
    a new type of infrastructure deployment designed to place core AWS Compute, Storage, Networking, and Database services  
    near highly populated areas such as major cities that do not already have an AWS Region nearby. 
    AWS Local Zones allow customers to deploy resources and applications that require single-digit millisecond latency 
    They are also useful where data residency requirements  may dictate that data be stored within the area
    All AWS Local Zones are connected to a parent Region, allowing you to seamlessly connect to 
    all other AWS services via a secure, dedicated high-speed connection.  
`;
let waveLengthZonesHTML = `
    Much like AWS Local Zones, AWS Wavelength Zones also place core AWS services closer to large end user bases  
    and are connected to a parent Region via a secure, dedicated high-speed connection. 
    However, AWS Wavelength Zones are embedded within 5G mobile broadband networks 
    and are deployed within the data centers of large telecommunications providers. 
    Deploying AWS resources such as VPC subnets, EC2 instances, and EBS volumes to an AWS Wavelength Zone allows  
    end users to connect to these resources without ever leaving the mobile provider’s network.
`;
let outpostsHTML = `
    AWS Outposts brings the capabilities of the AWS cloud to your on-premises data center.  
    This includes the same hardware used by AWS within their data centers, allowing you to use native AWS services, 
    including the same tools and APIs you would use when running your infrastructure within AWS. 
    Outposts may be connected to AWS using either a Direct Connect or VPN connection.  
    Outposts allow you to run AWS services such as EC2, ECS, EKS, S3, RDS, and EMR on-premises. 
    AWS will ensure your Outposts are patched and updated as needed.  
`;
let ec2HTML = `EC2 stands for elastic compute cloud - IaaS
    It has the capability of : 
    1) Renting Virtual Machines (EC2) 
    2) Storing data in virtual drivers (EBS) 
    3) Distributing load across machines (ELB) 
    4) Scaling the services using an auto-scaling group (ASG)

    EC2 Sizing and configuration options 
    1) Operating System: Linux, Windows, Mac 
    2) How much computer power and cores (CPU) 
    3) How much Random access memory (RAM) 
    4) How much Storage space (EBS, EFS, EC2 Instance Store) 
    5) Network card, Public IP 
    6) Firewalls rules : security groups 
    7) Bootstrap Script (configure at first launch) : EC2 user data

    EC2 Instance Types : 
    General purpose, compute optimized, memory optimized, storage optimized, accelerated computing, instance features, measing instance performance 
    Ex : m5.8xlarge - meaning general purpose 5th generation, 8x size machine.     
    1) t2.micro - 1 cpu, 1GB RAM, Low to moderate n/w speed 
    2) t2.xlarge - 4 cpu, 16GB RAM, moderate n/w speed 
    3) c5d.4xlarge - 16 cpu, 32GB RAM, 10 Gbps 
    4) r5.16xlarge - 64 cpu, 512GB RAM, 20 Gbps 
    5) m5.8xlarge - 32 cpu, 128GB RAM, 10 Gbps

    Key pair(Pem/PPK) is required to create, in order to securely connect to EC2 instance using SSH 
    Security groups are firewall rules that control the traffic for your instance 
    Security groups works by referring IP address/port, and other security groups 
    Security groups can be attached to multiple instances, an instance can have multiple security groups 
    Security groups are locked down to region/VPC combination. 
    All inbound traffic is blocked and outbound traffic is allowed by default 
        
`;

let elasticIPHTML = `Networking has 2 sorts of IPs (IPv4, IPv6)
    Example Ipv4 : 192.168.1.1 
    Example IPv6 : 2001:0db8:0000:0000:0000:8a2e:0370:7334 
    
    Public IP : 
    Machine can be identified on the internet (WWW)
    Must be unique across the whole web. 
    Can be geo-located easily.

    Private IP :
    Machine can be identified only on a private network only
    Must be unique across the private network.
    Machines connect to WWW using an internet gateway.

    Elastic IP:
    When you start/stop EC2 instance, it will change its public IP.
    If you need a fixed public IP, we need Elastic IP.
    You can have only 5 Elastic IP in your account. (you can ask AWS to increase that)

    By default EC2 instance comes with one private IP, and one public IP.
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
    {key: "EC2 Servers", category: "tree", isGroup: true,  group: "Public Subnet", img: "assets/img/aws/app-servers.svg", toolTipHTML: ec2HTML.replaceAll("\n", "<br/>")},
    {key: "Elastic IP", category: "picTemplate", group: "EC2 Servers", img:"assets/img/aws/elasticIP.svg", toolTipHTML: elasticIPHTML.replaceAll("\n", "<br/>")},


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