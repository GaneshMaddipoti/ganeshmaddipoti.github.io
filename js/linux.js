let linuxOverviewHTML = `
OS is b/w applications and H/W, manage storage, memory, GUI, CLI, networking, security, users, and utilities <br/>
Linux originated from Unix which is leading in 1970-90. <br/>
It fits in the movement started by Free software Foundation (FSF), where Unix became very commercial.
GNU(GNU Not unix) mission is to use free/open source tools for Unix. <br/>
1992, Linus Torvalds added kernel to GNU and completes Linux OS. <br/> 
Linux's distribution includes kernel, GNU tools, additional software, installer and a package manager. <br/> 
Support is required for software maintenance. So distributions do that <br/>
Distributions:  <br/>
Debian : Ubuntu, Mint, Kali <br/> 
RedHat : CentOS, Fedora  <br/>
SUSE   : OpenSUSE  <br/>
Arch Linux : LinuxHES, Monjaro <br/>`;

let rhel = `
Its started in 1993 as a linux distribution, and amongst the first distribution that offered support.
It has a life cycle of 10 years.
A new major version of RHEL is released approximately every 4 years.
During the live time of major version, minor versions are provided with 6 to 9 month intervals.
Fedora, is a free community distribution that is sponsored by Redhat.
Mature packages from Fedora are included in CentOS stream.
CentOS is upstream for Red Hat, where community developers can participate in new software.
RHEL is derived from CentOS stream, and offers enterprise distribution with support options.
Rocky and Alma derived from RHEL, as free community alternatives.
Red Hat Core OS is the image-based container host, that is used in OpenShift environments.
Red Hat universal base image (UBI) is a subset of RHEL, used for custom container images.
`;

let serverRequirements = `
RAM : 2GiB
Disk : 20GiB
Network connection
Optical drive or access to DVD ISO
`;

let partitions = `
Partitions are used to divide raw storage space into chunks(slices).
Partition provide organization and hosting of filesystems.
Partition information is stored on the disk called partition table.
The format of this partition table is sometimes regarded as the disk type
MBR (Master boot record), GPT (GUID partition table) are most widely used partition tables.
/boot - for boot files
/     - for operating system files
/home - home directory
/swap - swap space
`;

let login = `
We can login into server using root account with unlimited access privileges.
Or user account with limited privileges, and can do administrative tasks using sudo.
We need to avoid logging in as root, because it hs risk of security related problems.

`;

let shellHTML = `
The shell is the environment where the user interfaces with the OS.
Shell is interpreter to execute commands. <br/>
bash is the default command line shell.
GNOME is the standard graphical shell.
From a graphical shell, a terminal window running bash can be started.
bash shell provides many features to make working with the shell easier.
. command line completion
. history
. variables
. scripts
Commands contains command [options] [arguments] <br/>
Ex : ls -a /etc
nano, vi, vim are text editors, man/ --help for command documentation.
`;

let bashShellHTML = `
Redirection used STDIN, STDERR, STDOUT to work with command input and output in a flexible way.
> to write to a file
>> to append to a file
2> to write errors to a file
< to fetch the input from a file

In piping, the STDOUT of the first command is used as STDIN of the second command.
Bash registers recently used commands.
Type history for an overview.
Commands are kept in ~/.bash_history to make them available beyond sessions.
history will be synchronized to file when you logout or close the terminal session.
history -w synchronizes the current history from memory to history file.
history -c clears current history, dont forget to also use history -w to remove everything.
history -d nn removes the line nn from current history.
HISTSIZE and HISTFILESIZE variables are used to define the number of entries kept in history.
The up arrwo key allows you to scroll backwards through history.
Ctrl-r performs a reverse search based on the pattern entered
!nn repeats a command from history based on its number
!a repeats the last command that starts with letter a

Keyboard shortcuts :
Ctrl-c      quits the current interactive process
Ctrl-d      sends an end-of-file character to the current interactive process.
Ctrl-a      moves cursor to start of current line
Ctrl-e      moves cursor to end of current line
Ctrl-l      clears screen
Ctrl-u      removes the current line
Alt-b       moves cursor one word backward
Alt-f       moves cursor one word forward

Shell Expansion
Shell expansion allows for more efficient command line use
Globbing expands filenames based on wildcards.
Brace expansion - to pass a list to command, ex: touch file{1..9}, useradd {user1, user2, user3}
Tilde expansion: cd ¬
Command substitution: ls -l $(which ls)
Variable substitution: echo $PATH
We cans escape special characters using "", '', \

Variables
Variables are used to separate site-specific data from generic code.
The shell comes with standard system variables in the environment.
Users can define variables using export key=value
To make variables persistent, they should be stored in the startup files.
/etc/profile is the generic bash startup file containing all system settings that are processed in login shell
/etc/bashrc is processed while opening a subshell
~/.bash_profile is the user-specific version of /etc/profile
~/.bashrc is the user-specific version of /etc/bashrc
Use custom startup files to make settings like variables and alias persistent.
Alias
alias can be used to define custom commands.
source - to upload the content of file to current shell profile.
`;

let fileMgmtHTML = `
Directory usage on Linux is highly standardized
Standard directories are defined in the filesystem hierarchy standard (FHS), which is maintained by Linux foundation
https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html
The starting point of the filesystem is the root directory
Different devices may be integrated in the filesystem by using mounts.
ls - list files
mkdir - make a directory
cp - copy files
mv - move miles
rmdir - remove an empty directory
rm - removing files
which - looks for bainaries in $PATH
locate uses a database, build by updatedb to find files in a database.
find is the most flexible tool that allows you to find files based on many criteria.
`;

let mountHTML = `
To access a device, it must be connected to a directory
This is known as mounting the device
The Linux filesystem typically uses multiple mounts.
Different types of data typically are on different devices for reasons
 . security
 . manageability
 . specific mount options.
To mount a device, use mount /dev/devicename /directory
ex: mount /dev/sdb1 /mnt
findmnt command shows all currently mounted devices and their place in filesystem.
unmount - to unmount a device from filesystem 
`;

let linksHTML = `
Links are pointer to files in a different location
Compare to shortcuts on other operating systems.
Links can be useful to make the same file available on multiple locations.
Linux uses hard links (ln) and symbolic links (ln -s)
Hard links are name to inodes which points to physical blocks.
Symbolic links are pointers to Hard links.
`;

let archiveHTML = `
tar is the Tape Archiver and was created a long time ago.
By default, it doesnt compress data
Basic use to compress, extract or list
 . tar -cvf my_archive.tar /home/etc
 . tar -tvf will show contents of an archive
 . tar -xvf my_archive extracts to the current directory
    -z(gzip), -j(bzip2), -J(xz) for multiple compression methods.
`;

let textToolsHTML = `
more, less commands used for file paging, fwd, backward, etc..
head - to show the first 10 lines of a text file
tail - to show the last 10 lines of a text file
cat - to show the contents of a file to console
tac - to show the lines in opposite order.
cut - splits the content by delimiter and filter words of each line.
tr - translates upper/lower case letters.
grep - to find text in files or in output
(General regular expression parser)
`;

let regExHTML = `
^ - beginning of the line 
$ - end of the line
\b - end of word
* - zero or more times
+ - one or more times
? - zero or one time
. - one character
n\{3\} - n occurs 3 times`;

let awkHTML = `
awk is powerful text processing utility that is specialized in data extraction and reporting.
It can perform actions based on selectors.
`;

let sedHTML = `
sed is the stream editor, used to search and transform text.
It can be used to search for text, and perform an operation on matching text.
`;

let bootProcedure = `
It all starts with Firmware.
From Firmware boot device is allocated.
In boot device, boot sector is identified first, and grub(boot loader) is started.
Boot loader loads the linux kernel, with helper initrd/intramfs.
Systemd starts. (which is manager of all)
Systemd starts early states, and then all services.
Finally shell will be started.
Unit is a group of services.
Systemd targets are group of units/services.
Systemd targets are : default, Graphical, multi-user, emergency, rescue.
`;

let rpmHTML = `
RPM is foundational in redhat software management.
Software on RHEL is installed using packages in Redhat package manager (RPM) format.
RPM package contains tar file and package metadata.
Package metadata contains dependencies for that.
RHEL uses repositories to get the RPMs.
Installed packages are registered in RPM database.

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