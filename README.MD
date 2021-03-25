
# addHTML - Client-side importing of HTML files

Add the script in your head and give it an onload attribute where you call the function with the name of the HTML file to include:

`<script onload="addHTML('myfile.html, false');" src="scripts/common/addHTML.js"></script>`

The function will add all elements within the __`<head>` of the imported file to the `<head>` of the current site__. It then repeats this for the body tag.

The second parameter indicates if you want the contents of the imported `<body>` to be added before the content of the site.
If you set it to true the imported contents will be inserted before the start of the original content and if you set it to false it will be appended to the end.
