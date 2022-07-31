<h1><a id="arrayunion_0"></a>common-objects-in-arrays</h1>
<p>Can use this package to find out the common objects in between the n  number of arrays and on the basis of n number of keys</p>
<h1><a id="Install_5"></a>Install</h1>
<p>npm install  --save common-objects-in-arrays</p>
<h2><a id="Usage_8"></a>Usage</h2>
<pre><code>const testModule = require('common-objects-in-arrays');

let firstArray = [
    {
        "id":"test", 
        "displayName" : "Test"
    }
    {
        "id":"demo",
        "displayName" : "Demo"
    }
];
let secondArray = [
    {
        "id" : "test",
        "displayName" : "Test"
    }
];
let thirdArray = [
    {
        "id" : "test",
        "displayName" : "Test"
    },
    {
        "id" : "user",
        "displayName" : "User"
    }
]
testModule.findCommonObjectsOfArrays(["id"], firstArray, secondArray, thirdArray);

//result will be
[
    {
        "key" : "test",
        "displayName" : "Test"
    }
]</code></pre>

<p>When we compare all the objects in each and every array on the basis  key <b style="color:#cb3837">id</b> that is mentioned in the first parameter of findIntersectionOfArray, <b style="color:#cb3837">test</b> id is common in all the arrays. So the result will have this object.</p>
<p>You can pass any number of keys in the first parameter in array format. Also you can any number of arrays from second parameter onwards</p>
