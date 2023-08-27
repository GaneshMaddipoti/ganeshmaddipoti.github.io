let linuxOverviewHTML = `
OS is b/w applications and H/W, manage storage, memory, GUI, CLI, networking, security, users, and utilities <br/>
Linux originated from Unix which is leading in 1970-90. <br/>
GNU mission is to use free/open source tools for Unix. <br/>
1992, Linus Torvalds added kernel to GNU and completes Linux OS. <br/> 
Linux distribution includes kernel, GNU tools, additional software, and a package manager. <br/> 
Support is required for software maintenance. So distributions do that <br/>
Distributions:  <br/>
Debian : Ubuntu, Mint, Kali <br/> 
RedHat : CentOS, Fedora  <br/>
SUSE   : OpenSUSE  <br/>
Arch Linux : LinuxHES, Monjaro <br/>
`;

let shellHTML = `
Shell is interpreter to execute commands. <br/>
Commands contains command [options] [arguments] <br/>
Ex : ls -a /etc <br/>
`;

let binHTML = `
<b>Essential user command binaries </b><br/>
bash/sh - command language interpreter that executes commands from standard input/file. <br/>
date - print or set the system date and time <br/>
echo - display a line of text <br/>
uname - print system information <br/>
mount/umount - mount/unmount a filesystem <br/>
hostname - show or set the system's host name <br/>
ping - send ICMP ECHO_REQUEST to network hosts <br/>
su - run a command with substitute user and group ID(Default - root) <br/>
ssh - Connect to remote servers securely<br/>
history - display previously executed commands<br/>
info - read Info documents<br/>
who - show who is logged on<br/>
<br/>
<b>File System Commands</b> <br/>
chmod - change file mode bits <br/>
chown - change file owner and group <br/>
touch - change file timestamps <br/>
cat - concatenate files and print on the standard output <br/>
grep, egrep, fgrep - print lines matching a pattern <br/>
find - search for files in a directory hierarchy <br/>
pwd - print name of current/working directory <br/>
ls/dir - list directory contents <br/>
mkdir - make directories <br/>
dir - list directory contents <br/>
ln - make links between files <br/>
nano - File editor <br/>
vim - is a text editor that is upwards compatible to Vi <br/>
cp - copy files and directories <br/>
mv - move (rename) files <br/>
rm - remove files or directories <br/>
more/less - is a filter for paging through text one screenful at a time <br/>
gzip, gunzip, zcat - compress or expand files <br/>
tar - an archiving utility <br/>
<br/>
<b>Prcoessor Commands</b> <br/>
ps - report a snapshot of the current processes <br/>
top - display Linux processes <br/>
openvt - start a program on a new virtual terminal (VT). <br/>
kill - terminate a process <br/>`;

let etcHTML = `
<b>Configuration files for the system</b> <br/>
crontab is the program used to install a crontab table file, remove or list the existing tables used to serve the cron(8) daemon<br/>
cups - a standards-based, open source printing system <br/>
fstab - static information about the filesystems <br/>
host.conf - resolver configuration file <br/>
hosts - static table lookup for hostnames <br/>
init/systemmd - it acts as init system that brings up and maintains userspace services <br/>
issue - prelogin message and identification file <br/>
machine-id - Local machine ID configuration file <br/>
mtab - file contains the currently mounted filesystems <br/>
mtools - utilities to access DOS disks in Unix. <br/>
passwd - is used to update user's authentication token(s). <br/>
profile - contains Linux system wide environment and other startup scripts. <br/>
rpc - RPC program number data base <br/>
securetty - file which lists terminals from which root can log in <br/>
services - Internet network services list <br/>
shells - pathnames of valid login shells <br/>
tzset, tzname, timezone, daylight - initialize time conversion information <br/>
`;


let linuxNodeDataArray = [

    {key: "Linux", color: "LightSteelBlue", isGroup: true, category: "tree", img: "assets/img/linux.png"},
    {key: "Abstract", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", value: "Overview",group: "Linux",
        toolTipHTML: linuxOverviewHTML},

    {key: "Log In", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree", group: "Linux"},
    {key: "GUI", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "CLI", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "SSH", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "PuTTY", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},

    {key: "User Space", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree", group: "Linux"},
    {key: "Shell", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space", toolTipHTML: shellHTML},
    {key: "Applications", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space",
        items: [{text: "Browser", color: "LightBlue"},
            {text: "IDE", color: "LightBlue"},
            {text: "Explorer", color: "LightBlue"}]},
    {key: "System Software", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},
    {key: "User Processes", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},
    {key: "System Utilities", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},
    {key: "Compilers/Interpreters", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},


    {key: "Kernel Space", color: "LightSteelBlue", isGroup: true, expand: true, category: "grid", group: "Linux"},
    {key: "System Call Interface", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},
    {key: "Storage Management", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},
    {key: "Memory Management", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},
    {key: "Process Management", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},


    {key: "Virtual File System", color: "LightSteelBlue", isGroup: true, expand: false, group: "Kernel Space", category: "grid",
        toolTipHTML: "File system is a software that dictates how to store and read data from disks. <br/>"},
    {key: "/root", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Root user directories</b> <br/>"
    },
    {key: "/bin", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: binHTML
    },
    {key: "/etc", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: etcHTML
    },
    {key: "/sbin", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Essential System binaries</b> <br/>"
    },
    {key: "/user", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>User Application data/binaries</b> <br/>"
    },
    {key: "/var", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Variable Data Files</b> <br/>"
    },
    {key: "/dev", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Device Files</b> <br/>"
    },
    {key: "/home", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>User home directories</b> <br/>"
    },
    {key: "/lib", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>System Libraries</b> <br/>"
    },
    {key: "/opt", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Optional Software Applications</b> <br/>"
    },
    {key: "/proc", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Process and Kernel information files</b> <br/>"
    },


    {key: "Network Drivers", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},
    {key: "IO Drivers", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},

    {key: "Hardware", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree90", group: "Linux"},
    {key: "Motherboard", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree90", group: "Hardware"},
    {key: "CPU", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Motherboard"},
    {key: "Memory", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Motherboard"},
    {key: "Storage", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Hardware"},
    {key: "Ethernet", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Hardware"},
    {key: "IO", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Hardware"},
];

let linuxLinkDataArray = [
    {name: "logInToUS", from: "Log In", to: "User Space", category: "simplelink"},
    {name: "USToKS", from: "User Space", to: "Kernel Space", category: "simplelink"},

    {name:"ksToh", from:"Kernel Space", to: "Hardware", category: "simplelink" },

    {name:"sToM", from:"Storage", to: "Memory", category: "simplelink" },
    {name:"mToCPU", from:"Memory", to: "CPU", category: "simplelink" },

];