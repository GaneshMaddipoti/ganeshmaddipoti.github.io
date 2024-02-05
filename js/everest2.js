let cloudComputingHTML = `<b>What is</b>
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

let awsHTML = `AWS - (Amazon Web Services) is a cloud provider
    Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. 
    It has to have a global network of infrastructure to run and manage  
    its many growing cloud services that support customers around the world. 
    AWS GlobalInfrastructure components are 
    Regions
    Availability Zones
    Edge Locations
    Regional Edge Caches
    Local Zones
    Wavelength Zones
    Outposts
    Currently servicing in 32 Regions and 102 Availability Zones.
    with 4 additional Regions and 12 additional AZs planned.   
    AWS GovCloud is an isolated region in the U.S. that is only available to U.S. government agencies 
    35 Local Zones, 29 Wavelength Zones, 115 direct connect locations. 
    400+ Edge locaitons, 10+ Regional caches, in 90+ cities across 40+ countries. 
</ul>
`;

let mgmtConsoleHTML = `Protected by password + MFA
    Access keys are generated via management console 
    Users manage their access keys, they are like password, and not to be shared 
    Access Key ID like username, Secret Access Key like password 
`;
let awsCliHTML = `Protected by Access Keys `;
let awsSdkHTML = `Protected by Access Keys `;

let cloudShellHTML = `
`;

let iamHTML = `IAM - Identity and Access Management Service
    Root account is created by default, and should not be used or shared 
    Root account is used to set up users and groups    
    AWS use the least privilege principle : Don't give more permissions than needed
    IAM service includes
    1) Users
    2) Groups
    3) Roles
    4) policies
    5) Identity Providers
`;
let policyHTML = `A policy, when associated with an identity or resource, defines their permissions.
    Users, resources or Groups can be assigned JSON documents called policies/permissions
    <pre>{
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
    }</pre>
    In AWS, we can have password policy (min length, char types, change pwd)    
`;
let securityCredsHTML = `These are available for root account and users but not for groups
    With MFA, we can protect root account, IAM user accounts. (password + security device) 
    MFA types - Authenticator(Mobile), Authy(multiDevice), Yubikey(physical) 
`;
let iAmRolesHTML = `Some AWS resources need to perform on behalf of user
    To do that, we will assign permissions to AWS services with IAM Roles 
    Common Roles : 
    EC2 Instance Roles 
    Lambda Function Roles 
    Roles for cloud formation 
`;

let groupsHTML = `Groups only contain users, not other groups
`;

let usersHTML = `Users are people within an organization, and can be grouped
    Users don't have to belong to a group 
    Users can belong to multiple groups 
    Users will inherit groups policy, otherwise its own inline policy applied 
    
`;

let availabilityZoneHTML = `AZs are essentially the physical data centers of AWS
    This is where the actual compute, storage, network, and database resources are hosted  
    that we as consumers provision within our Virtual Private Clouds (VPCs) 
    It's likely that multiple data centers located close together form a single availability zone 
    Each AZ will always have at least one other AZ that is geographically located within the same area, usually a city, 
    linked by highly resilient and very low latency private fiber-optic connections.  
    Each AZ will be isolated from the others using separate power and network connectivity that minimizes impact to other AZs 
    

`;
let regionHTML = `Its localized geographical grouping of multiple AZs
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
let edgeLocationsHTML = `Edge Locations are AWS sites deployed in major cities and highly populated areas across the globe.
    They far outnumber the number of availability zones available.  
    They are used by AWS services such as AWS CloudFront and AWS Lambda@Edge (currently in Preview) to cache data  
    and reduce latency for end-user access by using the Edge Locations as a global Content Delivery Network (CDN). 
    They are used to cache the data that is located far from customer 
`;
let regionalEdgeCacheHTML = `These sit between your CloudFront Origin servers and the Edge Locations.
    A Regional Edge Cache has a larger cache-width than each of the individual Edge Locations, 
    and because data expires from the cache at the Edge Locations, the data is retained at the Regional Edge Caches. 
    Therefore, when data is requested at the Edge Location that is no longer available, 
    the Edge Location can retrieve the cached data from the Regional Edge Cache instead of the Origin servers 
`;
let localZonesHTML = `a new type of infrastructure deployment designed to place core AWS Compute, Storage, Networking, and Database services
    near highly populated areas such as major cities that do not already have an AWS Region nearby. 
    AWS Local Zones allow customers to deploy resources and applications that require single-digit millisecond latency 
    They are also useful where data residency requirements  may dictate that data be stored within the area
    All AWS Local Zones are connected to a parent Region, allowing you to seamlessly connect to 
    all other AWS services via a secure, dedicated high-speed connection.  
`;
let waveLengthZonesHTML = `Much like AWS Local Zones, AWS Wavelength Zones also place core AWS services closer to large end user bases
    and are connected to a parent Region via a secure, dedicated high-speed connection. 
    However, AWS Wavelength Zones are embedded within 5G mobile broadband networks 
    and are deployed within the data centers of large telecommunications providers. 
    Deploying AWS resources such as VPC subnets, EC2 instances, and EBS volumes to an AWS Wavelength Zone allows  
    end users to connect to these resources without ever leaving the mobile provider’s network.
`;
let outpostsHTML = `AWS Outposts brings the capabilities of the AWS cloud to your on-premises data center.
    This includes the same hardware used by AWS within their data centers, allowing you to use native AWS services, 
    including the same tools and APIs you would use when running your infrastructure within AWS. 
    Outposts may be connected to AWS using either a Direct Connect or VPN connection.  
    Outposts allow you to run AWS services such as EC2, ECS, EKS, S3, RDS, and EMR on-premises. 
    AWS will ensure your Outposts are patched and updated as needed.  
`;
let ec2HTML = `EC2 stands for elastic compute cloud - IaaS
    We can create one as Bastion Host to connect to private subnet resources
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

    EC2 instances can be placed in AWS infrastructure using below placement group strategies.
    Cluster : packs instances close together inside an Availability Zone.
    Partition : spreads your instances across logical partitions inside an AZ.
    Spread : strictly places a small group of instances across distinct underlying hardware inside an AZ.
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
    After creation of elastic IP, we need to associate it with an instance or network interface.

    By default EC2 instance comes with one private IP, and one public IP.
`;

let eniHTML = `Elastic Network Interface ENI
    Its a logical component, that represents a virtual network card.
    Each ENI can have the following properties:
    1) A MAC address
    2) One public IP
    3) One elastic IP
    4) One primary private IP, one or more secondary private IP.
    5) One or more security groups.

    You can create ENI independently and attach them to EC2 instances on the fly.
    ENI is bound to a specific AZ, and can be moved inside an AZ.
`;
let amiHTML = `AMI - Amazon Machine Image
    AMI is built for a specific region.
    We can launch EC2 using public AMI, own AMI, for from AWS AMI marketplace.
`;
let ebsHTML = `EBS - Elastic Block Storage
    EBS is a network drive you can attach to your instances while they run.
    They are used to persist data, even after their termination.
    They are bound to specific AZ.
    If you want to move it to another AZ, you have to snapshot(backup) it and can move.
    We can delete the EBS volume on termination using attribute.
    gp2/gp3, io1/io2 SSD EBS volumes can only be used as boot volumes.
    io1/io2 SSD EBS volumes can be attached multiple instances.
    All the EBS volume data at rest/transfer/archive states are encrypted.
`;
let ec2InstanceStoreHTML = `EC2 Instance Store
    These are physical hard ware disks attached to EC2 instances.
    EC2 Instance Store lose their storage if they are stopped.
    Good for buffer/ cache/ scratch data/ temporary content.
`;
let efsHTML = `EFS - Amazon elastic file System
    Its an network managed file system, than can be attached to many EC2 instances.
    EFS works with instances in multi AZ.
    Use security group to control access to EFS.
    Its POSIX file system, so compatible with Linux AMI.

`;
let scalebAvailHTML = `Scalability means than an application/system can handle greater loads by adapting.
    1) Vertical Scalability : Increasing the size of the instance.
    2) Horizontal Scalability : Increasing the number of instances.

    Availability means running your application/system in at least 2 AZ.
`;
let loadBalancingHTML = `These are servers that forward/spread the traffic to multiple downstream systems.
    Expose single point of access to the application.
    Seamlessly handle failures of downstream systems.
    Do regular health checks of downstream systems.
    Provide SSL termination for your applications.
    Enforce stickiness with cookies.
    Separate private traffic from public traffic.
`;
let elbHTML = `ELB - is an managed elastic load balancer.
    1) Classic load balancer - HTTP, HTTPS, TCP, SSL.
    2) Application load balancer - HTTP, HTTPS, Websocket.
    3) Network load balancer - TCP, TLS, UDP
    4) Gateway load balancer - IP
    Load balancers can be setup as internal or external ELB.
`;
let albHTML = `Routing tables to different target groups.
    1) based on path in URL
    2) based on hostname in URL
    3) based on query string in URL
    ALB are great fit for micro services and container based applications(Docker & ECS)
    Has a port mapping feature to redirect to dynamic port in ECS.
`;
let s3HTML = `S3 - Simple Storage Service to store any type of files/objects.
    In S3 we categorize files/objects using buckets/folders.
    S3 automatically scales to high request rates, latency 100-200ms.
    It can serve 3,500 PUT/COPY/POST/DELETE requests, or 5,500 GET/HEAD requests per second per prefix in a bucket.
    There are no limits to the number of prefixes in a bucket.
    Multi part upload(parallel) recommended for files > 100MB, must use for files > 5GB.
    Increase upload transfer speed by uploading files to AWS Edge Location (from there to S3)
    Increase download transfer speed by S3 Byte Range fetches (parallel).
    Amazon S3 supports filtering at server side using S3 select/S3 Glacier select.
    We can use S3 Inventory to get object list, S3 Select to filter, and S3 Batch Operations to perform bulk operations.

    Life cycle rules
    We can move buckets from once category to other manually or S2 lifecycle rules.
    Use cases
    Configure objects to transition to other storage class after some time.
    Configure objects to expire after some time.

    With Requester pays option, storage costs to owner, download costs to requester.
    High durability : 99.999999999% same for all classes of S3 storage.
    Availability : Varies upon storage classes (for standard - 99.99%)

    For Audit purpose, we can log all requests made to Amazon S3, into a bucket.
    The target logging bucket must be in the same AWS region

    We can generate pre-singed URLs for secured objects in S2 temporarily using console, CLI, or SDK.
    Pre-singed URL will inherit the permissions from the user created.`
;

let storageClassesHTML = `Storage Classes
    Amazon S3 General - General purpose
    Amazon S3 Standard - Infrequent Access (IA)
    Amazon S3 Intelligent Tiering
    Amazon S3 One Zone - Infrequent Access
    Amazon S3 Glacier Instant retrieval
    Amazon S3 Glacier Flexible retrieval
    Amazon S3 Glacier Deep Archive`;

let bucketsHTML = `Amazon S3 stores objects(files) in buckets(directories).
    Buckets(directories) must have a globally unique name.
    Buckets are defined in region level.
    Naming:
    1) No uppercase, no underscore (only lowercase, numbers, -)
    2) 3-63 long
    3) Must start with lowercase, number
    4) Must not start with prifix xn--, sthree- and sthree-configurator
    5) Must not end with suffix -s3alias, --ol-s3
`;
let objectsHTML = `Objects are files which have a key.
    The key is the full path (Ex: s2://my-bucket/my-file.txt)
    Max object size is 5TB (5000GB)
    If uploading more than 5GB, we have to use multi-part upload.
    Objects metadata:
    1) list of key/value pairs. (system or user metadata)
    2) Tags (unicode key/value pairs) - upto 10 max.
    3) VersionID (if enabled versioning)
    Once object is uploaded to S3 bucket, it will have pre-signed link, and public URL.
    Objects in bucket can be secured using IAM policy, Resource Policy, ACL.

    Versioning
    We can enable versioning for objects in bucket at bucket level only.
    Any object prior to versioning will have version ID null.
    Suspending versioning will not delete previous versions.
`;
let s3replicationHTML = `Replication
    We can do replication of objects in a bucket with CRR, SRR
    We must enable versioning in both source and target buckets.
    Buckets can be in different AWS accounts also.
    Replication work for new objects, for existing objects we have to use S3 Batch Replication.
    Can replicate delete markers from source to target (optional setting)
    Deletions with VersionID are not replicated. (to avoid malicious deletes)
    There is no chaining of replications (A to B, B to C, then no A to C)`;
let s3EventHTML = `S3 Events
    These are generated when an operation performed in S3, and forwarded to target services.
    Target services could be : SNS, SQS, Lambda.
    The secured integration between S3 and targets done by IAM resource policy.
    Ex : S3:ObjectCreated, S3:ObjectRemoved, S3:ObjectRestore, S3:Replication, etc...
    All events can be forwarded to Amazon Event Bridge.
    Using Rules at Amazon Event Bridge, events can be forwarded to 18 target services.`;
let s3EncryptionHTML = `S3 Object Encryption
    AWS S3 supports both HTTP and HTTPS
    We can encrypt objects in S3 using 4 ways.
    1) Server side encryption (SSE-S3)
        -using s3-managed keys (enabled by default)
        (Must set header x-amz-server-side-encryption:AES256)
        -using KMS keys
        (must set header x-amz-server-side-encryption:aws:kms)
        -using customer provided keys
        (using HTTPS, and user key is passed in HTTP header)
    2) Client side encryption
    Encryption in transit, can be achieved by SSL/TLS using HTTPS.
    Bucket policies are evaluated before default encryption.
`;
let route53HTML = `Amazon Route 53
    Named Route 53, as 53 is traditional DNS port
    A higly available, scalable, fully managed and authoritative DNS
    Authoritative means the customer can update the DNS records.
    It acts as Domain register also
    Ability to check health of resources
    Domain Register contains records, and each record contains
    1) Domain/Subdomain name, ex:example.com
    2) Record type : A/AAAA/CNAME/NS etc...
    3) Value = 12.33.22.25
    4) Routing policy - how Route 53 respons to queries
    5) TTL - time to live in cache`;

let hostedZonesHTML = `Route 53 - Hosted Zones
    A container for records that define how to route traffic to a domain/subdomain
    1) Public Hosted Zones: contains records that specify how to route traffic on the internet
    2) Private Hosted Zones : contains records that specify how to router traffic within VPCs`;

let vpcHTML = `VPC - Virtual private Cloud
    Max VPCs in region - 5, max CIDR per VPC - 5
    All new accounts hava a default VPC
    Default VPC will have route to inter gateway by default.
`;
let vpcPeeringHTML = `We can connect two VPCs using VPC peering.
    We can create VPC peering connection between VPCs across accounts/regions.
`;
let vpcEndPointHTML = `We can connect AWS resources outside VPC using VPC endpoint.
    VPC endpoint removes the need of IGW, NATGW to access AWS resources.
    Types:
    1) Interface Endpoints : must attach security group
    2) Gateway Endpoints : must be used as target in route table.
    Does not use security groups.
    Supports S3 and DynamoDB.
`;
let vpcFlowLogsHTML = `VPC Flow Logs
    Capture information about IP traffic going into your instances.
    VPC flow logs.
    Subnet flow logs.
    ENI flow logs.
    Helps to monitor and troubleshoot connectivity issues.
    Flow logs data can go to S3, CloudWatch logs, Kinesis Data firehose.
    Capturs network information from AWS managed services like:
    ELB, RDS, ElastiCache, Redshift, Workspaces, NATGW, etc...
`;
let cidrHTML = `CIDR - Classless Inter domain Routing
    A CIDR consists of two parts
    Base IP (ex: 10.0.0.0)
    Subnet Mask (ex: 10.0.0.0/8, 10.20.0.0/16)
    Private IP Ranges
    10.0.0.0/8 - for big networks
    172.16.0.0/12 - AWS default VPC
    192.168.0.0/16 - Home network
    All the rest of the IPs are public on the internet.
    `;
let subnetHTML = `Subnet - sub range of IPv4 addresses in VPC
    Ex: 10.0.0.0/16
    AWS reserves 5 IP addresses(first 4, last 1) in each subnet.
    10.0.0.0 - network address
    10.0.0.1 - VPC router
    10.0.0.2 - mapping to AWS provided DNS
    10.0.0.3 - future use
    10.0.0.255 - network broadcast address, AWS does not support broadcast.`;
let internetGatewayHTML = `IGW - Internet Gateway
    Allows resources in VPC to connect to internet.
    One VPC can connect to one IGW and vice versa.
    It will use route table to route the traffic.
`;
let routeTableHTML = `Route Table - used for routes
    Ex: 172.20.0.0/16 - local
    0.0.0.0/0 - IGW
    A route table can be associated to multiple subnets.
`;
let natInstanceHTML = `NAT - Network Address translation
    Used to allow resources in private subnet to access internet.
    Must be launched in public subnet.
    Must disable EC2 setting : source/destination check.
    Must have elastic IP attached to it.
    Route tables should have traffic setting from private subnet to NAT.
`;
let natGatewayHTML = `NAT Gateway - AWS managed NAT instance
    Its created in a specific AZ, uses an elastic IP.
    No security groups required.
    For multiple AZs we need to create multiple NAT Gateways.
`;
let securityGroupHTML = `Security Groups to define inbound and outbound traffic rules.
    Can be attached to multiple resources.
    Supports only allow rules.
    These are stateful.
`;
let naclHTML = `NACL - Network Access Control Lists
    NACL are like firewall to subnets which control traffic to and from.
    One NACL per subnet, and each new subnet will have default NACL.
    NACL Rules:
    1) Have a number (1-32766), higher precedence with a lower number.
    2) First rule match will drive the decision.
    3) The last rule is an *, and denies a request in case of no rule match.
    4) AWS recommends adding rules by increment of 100
    Newly created NACL will allow everything by default.
    NACL are a great way of blocking IP address at subnet level.
    Supports both allow and deny rules.
    These are stateless.
`;

let e15TerraformEventHTML = `https://bitbucketdc-cluster07.jpmchase.net/projects/EVERESTCT/repos/everest1.5-terraform-lambda/browse`;
let e15TerraformAPItHTML = `https://bitbucketdc-cluster07.jpmchase.net/projects/EVERESTCT/repos/everest1.5-terraform-integration/browse`;

let e2TerraformEventHTML = `https://bitbucketdc-cluster07.jpmchase.net/projects/EVERESTCT/repos/everest2-terraform-lambda/browse`;
let e2TerraformAPItHTML = `https://bitbucketdc-cluster07.jpmchase.net/projects/EVERESTCT/repos/everest2-terraform-integration/browse`;

let e15cesEventLambdaHTML = `https://bitbucketdc-cluster07.jpmchase.net/projects/EVERESTCT/repos/eps-ces-lambda-e1-5/browse/ces-event-e1-5`;
let e15cesAPItLambdaHTML = `https://bitbucketdc-cluster07.jpmchase.net/projects/EVERESTCT/repos/eps-ces-lambda-e1-5/browse/eps-ces-lambda-e1-5-consumption`;

let e2cesEventLambdaHTML = `https://bitbucketdc-cluster07.jpmchase.net/projects/EVERESTCT/repos/eps-ces-lambda-e2/browse/ces-event-e2`;
let e2cesAPItLambdaHTML = `https://bitbucketdc-cluster07.jpmchase.net/projects/EVERESTCT/repos/eps-ces-lambda-e2/browse/eps-ces-lambda-e2-consumption`;

let AWSNodeDataArray = [

    {key: "Start", group:"Cloud Computing", category: "picTemplate",},

    {key: "AWS Users", group:"Cloud Computing", img: "assets/img/gen/gen-users.svg", category: "picTemplate",},
    {key: "Customers", group:"Cloud Computing", img: "assets/img/gen/gen-users.svg", category: "picTemplate",},
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
    {key: "Global", color: "WhiteSmoke", category: "grid", isGroup: true, group: "AWS",},


    {key: "IAM", color: "WhiteSmoke", category: "grid", isGroup: true, group: "Global", img: "assets/img/aws/iam.svg", toolTipHTML: iamHTML, expand: false},
    {key: "User", group:"IAM", img: "assets/img/aws/user.svg", category: "picTemplate",},
    {key: "Security Credentials", group:"IAM", img: "assets/img/gen/gen-notebook.svg", category: "picTemplate", toolTipHTML: securityCredsHTML},
    {key: "IAM Roles", group:"IAM", img: "assets/img/aws/role.svg", category: "picTemplate", toolTipHTML: iAmRolesHTML},
    {key: "Group", img: "assets/img/gen/gen-users.svg", category: "picTemplate", group: "IAM", toolTipHTML: groupsHTML,},

    {key: "Policy", group:"IAM", img: "assets/img/aws/policies.svg", category: "picTemplate", toolTipHTML: policyHTML},

    {key: "Route 53", color: "WhiteSmoke", category: "tree", expand: false, isGroup: true, group: "Global", img: "assets/img/aws/route-53.svg", toolTipHTML: route53HTML},


    {key: "ELB", isGroup: true, group:"Region", img: "assets/img/aws/app-server.svg", category: "tree", toolTipHTML: elbHTML},
    {key: "GwLB", group:"ELB", img: "assets/img/aws/app-server.svg", category: "picTemplate", },
    {key: "NLB", group:"ELB", img: "assets/img/aws/app-server.svg", category: "picTemplate", },
    {key: "ALB", group:"ELB", img: "assets/img/aws/app-server.svg", category: "picTemplate", },

    {key: "Auto Scaling Group", group:"Region", img: "assets/img/aws/app-server.svg", category: "picTemplate", toolTipHTML: elbHTML},
    {key: "ECS", isGroup: true, expand: false, group:"Region", img: "assets/img/aws/app-server.svg", category: "tree", toolTipHTML: elbHTML},
    {key: "EKS", isGroup: true, expand: false, group:"Region", img: "assets/img/aws/app-server.svg", category: "tree", toolTipHTML: elbHTML},

    {key: "Region", color: "WhiteSmoke", category: "tree", isGroup: true, group: "AWS", img: "assets/img/aws/region-group.svg", toolTipHTML: regionHTML},

    {key: "VPC", color: "WhiteSmoke", category: "tree", isGroup: true, group: "Region", img: "assets/img/aws/vpc-group.svg", toolTipHTML: vpcHTML},

    {key: "Availability Zone1", color: "WhiteSmoke", category: "tree", isGroup: true, group: "VPC",toolTipHTML: availabilityZoneHTML},

    {key: "Subnet", color: "WhiteSmoke", category: "tree", isGroup: true, group: "Availability Zone1", img: "assets/img/aws/pubsub-group.svg", toolTipHTML: subnetHTML},

    {key: "E1.5 Terraform Event", category: "picTemplate", group: "Subnet", img: "assets/img/terraform/terraform.svg", toolTipHTML: e15TerraformEventHTML},
    {key: "E1.5 Terraform API", category: "picTemplate", group: "Subnet", img: "assets/img/terraform/terraform.svg", toolTipHTML: e15TerraformAPItHTML},

    {key: "E1.5 CES Event", category: "picTemplate", group: "Subnet", img: "assets/img/aws/lambda.svg", toolTipHTML: e15cesEventLambdaHTML},
    {key: "E1.5 CES API", category: "picTemplate", group: "Subnet", img: "assets/img/aws/lambda.svg", toolTipHTML: e15cesAPItLambdaHTML},


    {key: "E2 Terraform Event", category: "picTemplate", group: "Subnet", img: "assets/img/terraform/terraform.svg", toolTipHTML: e2TerraformEventHTML},
    {key: "E2 Terraform API", category: "picTemplate", group: "Subnet", img: "assets/img/terraform/terraform.svg", toolTipHTML: e2TerraformAPItHTML},

    {key: "E2 CES Event", category: "picTemplate", group: "Subnet", img: "assets/img/aws/lambda.svg", toolTipHTML: e2cesEventLambdaHTML},
    {key: "E2 CES API", category: "picTemplate", group: "Subnet", img: "assets/img/aws/lambda.svg", toolTipHTML: e2cesAPItLambdaHTML},


    {key: "S3", color: "WhiteSmoke", category: "grid", isGroup: true, group: "Region", img: "assets/img/aws/app-server.svg", toolTipHTML: s3HTML.replaceAll("\n", "<br/>")},
    {key: "Storage Classes", category: "picTemplate", group: "S3", img: "assets/img/aws/app-server.svg", toolTipHTML: storageClassesHTML.replaceAll("\n", "<br/>")},
    {key: "Bucket", category: "picTemplate", group: "S3", img: "assets/img/aws/app-server.svg", toolTipHTML: bucketsHTML.replaceAll("\n", "<br/>")},
    {key: "Object", category: "picTemplate", group: "S3", img: "assets/img/aws/app-server.svg", toolTipHTML: objectsHTML.replaceAll("\n", "<br/>")},
    {key: "Replication", category: "picTemplate", group: "S3", img: "assets/img/aws/app-server.svg", toolTipHTML: s3replicationHTML.replaceAll("\n", "<br/>")},
    {key: "S3 Events", category: "picTemplate", group: "S3", img: "assets/img/aws/app-server.svg", toolTipHTML: s3EventHTML.replaceAll("\n", "<br/>")},
    {key: "S3 Encryption", category: "picTemplate", group: "S3", img: "assets/img/aws/app-server.svg", toolTipHTML: s3EncryptionHTML.replaceAll("\n", "<br/>")},



];

let AWSLinkDataArray = [
    { name: "aztoaz", from: "Availability Zone1", to: "Availability Zone2", category: "thickLink", channel: "fiber", desc: "low latency resilient fiber connectivity"},
    { name: "startToAWSUsers", from: "Start", to: "AWS Users", category: "simplelink"},
    { name: "startToCustomers", from: "Start", to: "Customers", category: "simplelink"},
    { name: "awsUsersToLogin", from: "AWS Users", to: "Login", category: "simplelink"},
    { name: "customersToInternet", from: "Customers", to: "Internet", category: "simplelink"},
    { name: "loginToIam", from: "Login", to: "AWS", category: "simplelink"},
    { name: "internetToCloudFront", from: "Internet", to: "AWS", category: "simplelink"},

    { name: "elTorec", from: "Edge Location", to: "Regional Edge Cache", category: "simplelink"},
    { name: "recToS3", from: "Regional Edge Cache", to: "S3", category: "simplelink"},
    { name: "recToELB", from: "Regional Edge Cache", to: "ELB", category: "simplelink"},

    { name: "ALBToASG", from: "ALB", to: "Auto Scaling Group", category: "simplelink"},
    { name: "ASGToVPC", from: "Auto Scaling Group", to: "VPC", category: "simplelink"},
    { name: "ASGToECS", from: "Auto Scaling Group", to: "ECS", category: "simplelink"},
    { name: "ASGToEKS", from: "Auto Scaling Group", to: "EKS", category: "simplelink"},

    {name: "igToRt", from: "Internet Gateway", to: "Route Table", category: "simplelink"},
    {name: "rtTonacl", from: "Route Table", to: "NACL", category: "simplelink"},
    {name: "naclToEC2", from: "NACL", to: "EC2 Instance", category: "simplelink"},
    {name: "ec2ToServer", from: "EC2 Instance", to: "NACL 1", category: "simplelink"},
    {name: "natToServer", from: "NAT Instance", to: "NACL 1", category: "simplelink"},
    {name: "natgwToServer", from: "NAT Gateway", to: "NACL 1", category: "simplelink"},
    {name: "nacl1ToServer", from: "NACL 1", to: "Server Instance", category: "simplelink"},


    { name: "15terraformToCESEvent", from: "E1.5 Terraform Event", to: "E1.5 CES Event", category: "simplelink"},
    { name: "15terraformToCESAPI", from: "E1.5 Terraform API", to: "E1.5 CES API", category: "simplelink"},
    { name: "2terraformToCES", from: "E2 Terraform Event", to: "E2 CES Event", category: "simplelink"},
    { name: "2terraformToCES", from: "E2 Terraform API", to: "E2 CES API", category: "simplelink"},

];