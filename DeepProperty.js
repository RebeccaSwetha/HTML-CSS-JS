function getDeepProperty(obj, path) {
var paths = path.split(&#39;.&#39;);
current = obj;

for (var i = 0; i &lt; paths.length; ++i) {
if (current[paths[i]] == undefined) {
return undefined;
} else {
current = current[paths[i]];
}
}
return current;
}
const someObj = {person: {name: {first: &#39;FirstName&#39;, middleInitial: &#39;I&#39;, lastName:
&#39;LastName&#39;}}};
console.log(getDeepProperty(someObj, &#39;person.name.lastName&#39;));
