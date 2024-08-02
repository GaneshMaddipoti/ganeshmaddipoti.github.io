let titleHTML = `
<table style="width: 100%; align:center">
<tr>
<td width="25%">
<div style=""><img src="img/python.png" width="180px" height="180px"/></div>
</td><td style="align:right">
<div style="font-size:150px;font-family:fantasy;
margin-top:100px;padding:20px;color:#FFD53D">Python</div><br/>
<div style="padding:20px; color:#5382A1">Programming Language </div>
</td>
</tr>
</table>
`;

let aboutMeHTML = `
<div class="reqBanner1"><img class="reqBannerImg"/>
About me
</div>
I am <b>Ganesh Maddipoti </b>,
<ul>
<li>Cloud architect with over 15 years of experience in IT</li>
<li>Primary Skills - java, spring, python, spark, linux, AWS, Terraform </li>
<li>Roles - full stack developer, data engineer, solution architect</li>
<li>Domains - Banking and Finance, Logistics and Travel, IoT </li>
</ul>
<b>Certifications</b><br/>
<ul>
<li>Oracle certified Java Professional</li>
<li>AWS certified solution architect </li>
<li>Hashicorp certified Terraform associate</li>
<li>Linux foundations certified system administrator  </li>
</ul>
<b>Hobbies & Interests </b> <br/>
<ul><li>Blogging and content writing on technology </li></ul>
`;

let featuresHTML = `
<div class="reqBanner1"><img class="reqBannerImg"/>
Content
</div>
<b>Features</b>
<ul>
<li>Starting with system architecture</li>
<li>Program execution with internals </li>
<li>Learning along by coding an application</li>
<li>Language fundamentals to advanced features</li>
</ul>
<b>Presentation</b><br/>
<ul>
<li>Simple enough to understand</li>
<li>Block diagram with flow</li>
<li>Coding in parallel with Intellij IDE</li>
<li>One flow without any deviations</li>
</ul>
<b>Users</b>
<ul><li>Anyone who wants to learn Java language from zero to advanced</li></ul>
`;

let pythonHTML = `
<div class="reqBanner1"><img class="reqBannerImg"/>
About Python
</div>
Python is created in 1990 by Guido van Rossum, Python 3 release in 2008 <br/>
Python is specifically designed as easy to use language with high focus on readability of code <br/>
Lots of existing libraries and frameworks exists already allowing us to use Python to a wide variety of tasks <br/>
Python use cases : <br/>
1) Automate simple tasks <br/>
    Searching for files and editing them <br/>
    Scraping information from a website <br/>
    Reading and editing excel files <br/>
    Work with PDFs <br/>
    Automate emails and text messages <br/>
    Fill out forms <br/>
2) Data science and machine learning <br/>
    Analyze large data files <br/>
    Create visualizations <br/>
    Perform machine learning tasks <br/>
    Create and run predictive algorithms <br/>
3) Create websites <br/>
    Using Django, Flask frameworks to handle the backend and data <br/>
    Create interactive dashboards for users using plotly, dash <br/>
`;

let pythonCLIHTML = `Python is an interpreted language <br/>
So, It will come with a python executable with OS supported libraries <br/>
>python hello.py <br/>
We can also execute one line codes using python provided REPL <br/>
>python <br/>
`;

let jupyterNotebookHTML = `A Jupyter Notebook is an open source web application that allows data scientists to <br/>
create and share documents that include live code, equations, and other multimedia resources. <br/>
Jupyter notebooks are useful for "showing the work" through a combination of code, markdown, links, and images. <br/>
They are easy to use and can be run cell by cell to better understand what the code does. <br/>
Jupyter notebooks can also be converted to a number of standard output formats (HTML, Ppt, PDF, Markdown, Python)<br/>
A Jupyter notebook has two components: <br/>
1) a front-end web page <br/>
2) a back-end kernel. <br/>
The front-end web page allows to enter programming code or text in rectangular "cells." <br/>
The browser then passes the code to the back-end kernel which runs the code and returns the results. <br/>
`;

let pythonSyntaxHTML = `a comment is a piece of text that begins with a # <br/>

`;

let pythonDatatypesHTML = `bool - logical value representing True or False <br/>
int - (Integers are whole numbers - 3, 300 etc...) <br/>
&emsp;&emsp; you can write this number either like this: 11111111, or like that: 11_111_111 <br/>
&emsp;&emsp; Octal values are preceded by 0O or 0o, and numbers between [0..7] <br/>
&emsp;&emsp; Hexadecimal values are preceded by 0X or 0x, and numbers between [0..9] and A,B,C,D,E,F <br/>

float - (Decimal numbers - 2.34, 100.33, etc...) <br/>
&emsp;&emsp; To avoid writing out so many zeros, we use abbreviated form, which you have probably already seen <br/>
&emsp;&emsp; 300000000 : 3 x 10^8, same can be written in python by : 3E8, or 3e8 <br/>
str - (Ordered sequence of characters (seperated by' or ") - "Hello", "Sample question", etc...) <br/>
&emsp;&emsp; String are immutable, we can't change characters in string <br/>
&emsp;&emsp; these are indexed and accessed by [index] or [reverse index] <br/>
&emsp;&emsp; There are some builtin functions to manipulate strings like <br/>
&emsp;&emsp; slice[start:stop:step] - to get sub string <br/>
&emsp;&emsp; split() - split string by white space or given character <br/>
&emsp;&emsp; "This is object {1} {0}".format(obj.name, obj.id) - is used when formatting an object into string <br/>

<br/>

list - (Ordered sequence of mutable objects - [10, "hello", 23.343], etc...) <br/>
set - (Unordered collection of unique objects - {"test", 10, 23.2323}, etc... <br/>
`;

let pythonOperatorsHTML = `If both operands integers, result integer, if one is float result is float <br/>
All operators are left sided binding except exponential operator which is right sided <br/>
+ - (for addition and concatenation in string) <br/>
- - (for subtraction) <br/>
* - (for multiplication and times in string(number <= 0 produces an empty string)) <br/>
/ - (for division, always returns float, ZeroDivisionError possible) <br/>
// - (for rounding off division or floor division, ZeroDivisionError possible) <br/>
% - (for modulus, giving reminder of division) <br/>
** - (for exponential 2**3 = 8) <br/>
<br/>
== - for equal, != - for not equal <br/>
> - greater than, >= - greater than or equal to <br/>
< - less than, <= - less than or equal to <br/>
<br/>
and -  conjunction, both should be true <br/>
or - disjunction, any one is true, evaluates to true <br/>
not - negation, true to false, false to true <br/>
<br/>
bitwise &(conjunction), bitwise |(disjunction), bitwise ~(negation), bitwise ^(xor) <br/>
Bitwise operators works with integers only <br/>
<br/>
<<, >> are binary left and right shift operators <br/>
<br/>
Priority - (), **, unary(+,-), *, /, //, %, +, -, <<, >>, <, <=, >, >=, ==, !=, &, |, short hand operators <br/>
`;

let pythonFlowControlsHTML = `Do execute if condition is met  <br/>
if true_or_not:  <br/>
&emsp; do_this_if_true <br/>
elif: <br/>
&emsp; do_this_else_if <br/>
else: (always preceding with if, last branch, and optional)<br/>
&emsp; do this otherwise <br/>
Supports nested conditions also <br/>
<br/>
while condition_expression: Iterate until condition meets<br/>
&emsp; instruction <br/>
for i in range(10): count the "turns" of the loop than to check the conditions <br/>
&emsp; do_something() <br/>
&emsp; pass <br/>
pass here because the for,if,elif,else,while syntax demands at least one instruction inside the body <br/>
The loop's else branch is always executed once, regardless of whether the loop has entered its body or not.<br/>
<b>break</b> - exits the loop immediately, and unconditionally ends the loop's operation; <br/>
&emsp; the program begins to execute the nearest instruction after the loop's body; <br/>
<b>continue</b> - behaves as if the program has suddenly reached the end of the body; <br/>
&emsp; the next turn is started and the condition expression is tested immediately. <br/>
`;

let pythonVariablesHTML = `We use variable name to name a data type <br/>
Ex: height = 23 <br/>
Rules for variable names : <br/>
1) alpha numerica characters and _ <br/>
2) Can not start with a number <br/>
3) No spaces in the name, instead we use _ <br/>
4) We cant use special characters other than _ <br/>
5) We cant use python keywords as variable names <br/>
6) PEP8 recommends to use lower case for variables <br/>
7) Dynamic typing - meaning we can re-assign a variable different data type <br/>
`;

let pythonFunctionsHTML = `If block of code is repeated and used more than once, then we can wrap that in a function. <br/>
<div class="sourceCode">def my_function():
    # function body
    return expression
</div>
Rules for naming a function is same as variables <br/>
Arguments to function can be passed by position, or keyword(parameter name) <br/>
We can have default values to function parameters <br/>
We can return value from function using return statement, if no return statement it returns None. <br/>
A variable existing outside a function has a scope inside the functions' bodies. (reading)<br/>
If we want to modify the variable defined outside of function, make it global <br/>
The values to functions are passed by value means, the value is copied to parameter <br/>
print() -  Prints the values to a stream, or to sys.stdout by default.<br/>
&emsp; - print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)  <br/>
round() - to round the outputted result to the number of decimal places specified in the parentheses <br/>
&emsp; - round(number, ndigits=None) <br/>
input() function is able to read data entered by the user and to return the same data to the running program.<br/>
int() function takes one argument (e.g., a string: int(string)) and tries to convert it into an integer; <br/>
float() function takes one argument (e.g., a string: float(string)) and tries to convert it into a float <br/>
str() function convert a number into a string <br/>
min() - return minimum value of passed parameters <br/>
max() - return maximum value of passed parameters <br/>
range(start, stop, step) - is responsible for generating all the desired values upto given value(not including last one) <br/>
`;

let pythonListsHTML = `list is a collection of elements, different datatype, and can be nested <br/>
list - (Ordered sequence of mutable objects - [10, "hello", 23.343], etc...) <br/>
We can access the list element by using index : my_list[0] <br/>
len(my_list) - will give the length of the list <br/>
del numbers[1] - will delete element at index 1 <br/>
del my_list[1:3] - will delete the slice of the list <br/>
del my_list[:] will delete content <br/>
del my_list will delete the list itself <br/>
my_list.insert(3, 'o') - will insert element at index 3 <br/>
List elements can also be accessed by reverse/negative indexes(-1, -2, ... from last) <br/>
my_list.sort() - can sort the elements of the list <br/>
lst.reverse() - can reverse the elements of the list <br/>
my_list[start:end] - make a brand-new copy of a list, or parts of a list <br/>
if start element lying further than the element of end, it will give empty list <br/>
if start is omitted it assumes 0, if end omitted it assumes the end element <br/>
elem in my_list - true if element in list <br/>
elem not in my_list - true if element not in list <br/>
<b>List comprehension</b><br/>
<div class="sourceCode">row = []
for i in range(8):
    row.append("WHITE_PAWN")
row1 = ["BLACK_PAWN" for i in range(8)]
</div>
<b>Two dimensional arrays </b><br/>
<div class="sourceCode">board = [["pawn" for i in range(8)] for j in range(8)]</div>
`;

let pythonTuplesHTML = `tup - (Ordered sequence of immutable objects - (10, "hello", 23.2323), etc...) <br/>
tuple_1 = (1, 2, 4, 8) <br/>
tuple_2 = 1., .5, .25, .125 <br/>
the len() function accepts tuples, and returns the number of elements contained inside; <br/>
the + operator can join tuples together (we've shown you this already) <br/>
the * operator can multiply tuples, just like lists; <br/>
the in and not in operators work in the same way as in lists. <br/>
a tuple's elements can be variables <br/>
`;

let pythonDictionariesHTML = `dict - (Unordered key value pairs - {"key1":"value1", "name":"John"}, etc...) <br/>
each key must be unique - it's not possible to have more than one key of the same value;  <br/>
a key may be any immutable type of object: it can be a number, or even a string, but not a list; <br/>
dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"} <br/>
print(dictionary['cat']) <br/>
dictionary.keys() - returns an iterable object consisting of all the keys gathered within the dictionary <br/>
dictionary.items() - returns tuples  where each tuple is a key-value pair. <br/>
dictionary.values() - which works similarly to keys(), but returns values. <br/>
dictionary.update({"duck": "canard"}) - to update the dictionary <br/>
del dictionary['dog'] - to delete an item <br/>

`;

let pythonModulesHTML = `a file containing Python definitions and statements <br/>
Each module consists of entities - functions, variables, constants, classes, and objects.<br/>
Modules are just .py scripts that you call in other .py script <br/>
To make a module usable, you must import it, using import statement: import math <br/>
The instruction may be located anywhere in code, but it must be placed before the first use of the module's entities. <br/>
If we need to import multiple modules : import math, sys (single line preferred) <br/>
A namespace is a space in which some names exist and the names don't conflict with each other <br/>
`;

let pythonPackagesHTML = `Packages are a collection of modules <br/>
We need __init__.py script is required to treat the current directory as package <br/>

`;

let pythonPypiHTML = `PyPI is a repository for open source third party python packages(Package Manager) <br/>
Using pip install we can install third party packages (downloading from PyPI repo to local) <br/>

`;

let pythonStringsHTML = `Python's strings are immutable sequences. <br/>
The multiline strings can be delimited by triple quotes, or, three single quotes <br/>
In general, strings can be: concatenated (joined) (+), replicated. (*) <br/>
ord() - to know a specific character's ASCII/UNICODE code point value <br/>
chr() - takes a code point and returns its character. <br/>
Indexing, in, not in operators works with Strings <br/>
min() - finds the minimum element of the sequence passed as an argument <br/>
max() - finds the maximum element of the sequence. <br/>
index() - searches the sequence from the beginning, to find the first element of the value specified <br/>

list() - takes its argument (a string) and creates a new list containing all the string's characters <br/>
count() - counts all occurrences of the element inside the sequence <br/>
capitalize() - it creates a new string filled with characters, first letter capital, remaining lower case <br/>
lower() - it creates a new string filled with characters, with lowercase <br/>
upper() - it creates a new string filled with characters, with uppercase <br/>
center() - adding some spaces before and after the string. <br/>
The two-parameter variant of center() makes use of the character from the second argument, instead of a space <br/>
startswith - it checks if a given string starts with the specified substring. <br/>
endswith() - checks if the given string ends with the specified argument and returns True or False <br/>
<br/>
find() - it looks for a substring and returns the index of first occurrence of this substring (safer) <br/>
you can use a two-parameter variant of the find() method, to specify the start index of the search <br/>
3 argument the third argument points to the first index which won't be taken into consideration during the search <br/>
rfind() - same like find but start from reverse order <br/>
<br/>
isalpha() - checks if the string contains only alphabets <br/>
isdigit() - checks if the string contains only digits <br/>
isalnum() - checks if the string contains only digits or alphabetical characters (letters), and returns True or False <br/>
islower() - checks if the string in lower case letters <br/>
isupper() - checks if the string in upper cases letters <br/>
isspace() - checks if the string is space <br/>
swapcase() - makes a new string by swapping the case of all letters within the source string <br/>
title() - capitalize each work in the string <br/>
join() - joins all elements of list using the seperator specified <br/>
<br/>
strip() - it makes a new string lacking all the leading and trailing whitespaces. <br/>
lstrip() - removes the lift side spaces <br/>
rstrip() - removes the right side spaces <br/>
<br/>
replace() - returns a copy of the original string in which all occurrences of the first argument have been replaced by the second argument. <br/>
The three-parameter replace() variant uses the third argument (a number) to limit the number of replacements. <br/>
split() - it splits the string and builds a list of all detected substrings <br/>
<br/>
Strings can be compared using the same set of operators - ==, !=, >, >=, <, <= <br/>
sort() - sorts the list of strings/collection <br/>
`;

let pythonOOPHTML = `Python allows create objects with attributes and methods <br/>
<div class="sourceCode">class NameOfClass(BaseClass):
    # class attributes
    attr1 = 'value1'
    def __init__(self, param1, param2):
        BaseClass.__init__(self)
        self.param1 = param1
        self.param2 = param2

    def some_method(self):
        print(self.param)

my_object = NameOfClass()
my_object.some_method()
</div>

`;