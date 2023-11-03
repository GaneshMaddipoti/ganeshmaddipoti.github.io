let tfHTML = `Terraform - Infrastructure as code.
    Tool for provisioning and managing infrastructure through software to achieve consistent and predictable deployments. 
    1) Its declarative
    2) Open Source
    3) Vendor agnostic
    4) Idempotent - maintains state, and apply if there is any change in configuration, otherwise no.
    5) Consistent - each time it deploys, it always do it in consistent way.
    6) Push based deployment - using API.
    7) Hashicorp configuration language (HCL) or JSON
    
    Benefits 
    1) Reusable components
    2) Automation of deployment.
    3) Repeatable process
    4) Consistent deployments
    5) Documenting the architecture
`;
let providerDocHTML = `provider "aws" {
        access_key = "ACCESS_KEY"
        secret_key = "SECRET_KEY"
        region = "us-east-1"
    }
`;
let dataDocHTML = `data "aws_ssm_parameter" "ami" {
        name = "/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2"
    }    
`;
let resourceDocHTML = `<pre>resouce "aws_instance" "web_server" {
    name = "web_server"
        ebs_volume {
            size = 40
        }
        user_data = <<EOF 
        #! /bin/bash
        sudo amazon-linux-extras install -y inginx1
        sudo service nginx start
        sudo rm /usr/share/nginx/html/index.html
        echo 'hi'
        EOF
    }</pre>
`;



let tfNodeDataArray = [
    {key: "Terraform", color: "WhiteSmoke", isGroup: true, category: "tree", img: "assets/img/terraform/terraform.svg", toolTipHTML: tfHTML.replaceAll("\n", "<br/>")},

    {key: "hcl-doc", isGroup: true, category: "grid", img: "assets/img/terraform/tf-hcl.svg", group: "Server"},
    {key: "Provider", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: providerDocHTML.replaceAll("\n", "<br/>")},
    {key: "Data", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: dataDocHTML.replaceAll("\n", "<br/>")},
    {key: "Resource", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: resourceDocHTML.replaceAll("\n", "<br/>")},

    {key: "Server", isGroup: true, category: "tree90", img: "assets/img/terraform/tf-binary.svg", group: "Terraform"},



    {key: "Workflow", isGroup: true, category: "tree", img: "assets/img/terraform/tf-workflow.svg", group: "Server"},
    {key: "terraform init", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow"},
    {key: "terraform plan", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow"},
    {key: "terraform apply", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow"},

    {key: "State Data", category: "picTemplate", img: "assets/img/terraform/tf-state.svg", group: "Server"},

    {key: "Provider Plugin", img: "assets/img/terraform/tf-plugin.svg", category: "picTemplate", group: "Workflow"},

    {key: "Target Environment", img: "assets/img/gen/gen-cloud.svg", category: "picTemplate", group: "Terraform"},

];

let tfLinkDataArray = [
    {from:"hcl-doc", to: "Workflow", category: "simplelink"},
    {from:"terraform init", to: "terraform plan", category: "simplelink"},
    {from:"terraform init", to: "State Data", category: "simplelink"},
    {from:"terraform plan", to: "terraform apply", category: "simplelink"},
    {from:"terraform apply", to: "Provider Plugin", category: "simplelink"},
    {from:"terraform apply", to: "State Data", category: "simplelink"},
    {from:"Provider Plugin", to: "Target Environment", category: "simplelink"},
];