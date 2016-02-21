# Social SVG Icons
[Click Here To View Live Examples](http://uloga.github.io/socialicons/)

Getting Started:
---
Paste the following code into the ```<head>``` section of your site's HTML.

```  
<link rel="stylesheet" href="http://uloga.github.io/socialicons/css/social-icons.css">
```

After you get up and running, you can place Decorator Social Icons just about anywhere with the ```<i>``` tag as shown in example below:

```
<i class="dc dc-twitter-rounded"></i>
```
SVG FILES
---
All of the svg files are included in svg folder, in case you want to edit them in Illustrator or embed them into your project.

Embeding SVG
---
The ```<object>``` tag is the primary way to include an external SVG file. The main advantage of using this tag is that there is a natural mechanism for displaying a fallback in case the SVG is not rendered. The tag requires defining a data attribute which is the location of the SVG file, normally a relative path. Defining the type attribute is highly recommended as it allows browsers to avoid downloading content they do not support. For SVG the type is "image/svg+xml". If the SVG is not rendered, the browser will try to render the content between the opening ```<object>``` and closing ```</object>``` tags. A PNG version of the SVG would normally be a good choice to put here. You can use included svg files in Illustrator to generate .png icons for fallback. 

```
<object type="image/svg+xml" data="icon.svg">
      <img src="icon.png" alt="Decorator Social Icon"/>
</object>
```


